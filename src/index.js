import React from 'react';
import {scanImageData} from 'zbar.wasm';

const SCAN_PROID_MS = 500;

function handleResize() {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const video = document.getElementById('video');
  video.width = width;
  video.height = height;

  const canvas = document.getElementById('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  if (width * video.videoHeight < height * video.videoWidth) {
    canvas.style.width = '100vw';
    canvas.style.height = 'auto';
  } else {
    canvas.style.width = 'auto';
    canvas.style.height = '100vh';
  }
}

async function init() {
  window.onresize = handleResize;
  const videoConstraints = {
    facingMode: "environment",
    height: {max: 640},
    width: {max: 640},
  };
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: videoConstraints
  });
  const video = document.getElementById('video');
  video.srcObject = mediaStream;
  video.setAttribute('playsinline', '');
  video.play();
  await new Promise(r => {
    video.onloadedmetadata = r;
  });
  handleResize();
}

function render(symbols) {
  const canvas = document.getElementById('canvas');
  const footer = document.getElementById('footer');
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  while (footer.firstChild) {
    footer.removeChild(footer.lastChild);
  }
  ctx.font = '20px serif';
  ctx.strokeStyle = '#00ff00';
  ctx.fillStyle = '#ff0000';
  ctx.lineWidth = 6;
  for (let i = 0; i < symbols.length; ++i) {
    const sym = symbols[i];
    const points = sym.points;
    ctx.beginPath();
    for (let j = 0; j < points.length; ++j) {
      const {x, y} = points[j];
      if (j === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fillText('#' + i, points[0].x, points[0].y - 10);

    const div = document.createElement('div');
    div.className = 'footerItem';
    div.innerText = `#${i}: Type: ${sym.typeName}; Value: "${sym.decode()}"`
    footer.appendChild(div);
  }
}

async function scan() {
  const canvas = document.createElement('canvas');
  const video = document.getElementById('video');
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, width, height);
  const imgData = ctx.getImageData(0, 0, width, height);
  const res = await scanImageData(imgData);
  // console.log(res, Date.now());
  render(res);
}

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms)
  });
}

async function main() {
  try {
    await init();
    while (true) {
      await scan();
      await sleep(SCAN_PROID_MS);
    }
  } catch (err) {
    const div = document.createElement('div');
    div.className = 'full middle';
    div.style = 'height: 72px; width: 100%; text-align: center; font-size: 36px';
    div.innerText = 'Cannot get camera: ' + err;
    document.body.appendChild(div);
    console.error(err);
  }
}

main();
