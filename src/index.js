import React from 'react';
import * as ReactDom from "@testing-library/react";
import {scanImageData} from 'zbar.wasm';

const SCAN_PROID_MS = 200;
let portalLeft, portalTop, portalWidth, portalHeight;

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

  const overlay = document.getElementById('overlay');
  overlay.width = video.videoWidth;
  overlay.height = video.videoHeight;
  if (width * video.videoHeight < height * video.videoWidth) {
    overlay.style.width = '100vw';
    overlay.style.height = 'auto';
  } else {
    overlay.style.width = 'auto';
    overlay.style.height = '100vh';
  }

  const widthMultiplier = canvas.width/overlay.offsetWidth;
  const heightMultiplier = canvas.height/overlay.offsetHeight;

  // draw a locating box that is a percent
  const percentTall = 8
  const percentWide = 50
  const oWidth = window.innerWidth*(percentWide/100);
  const oHeight = window.innerHeight*(percentTall/100);

  portalLeft = ((window.innerWidth/2)-(oWidth/2))*widthMultiplier;
  portalTop = ((window.innerHeight/2)-(oHeight/2))*heightMultiplier
  portalWidth = oWidth*widthMultiplier;
  portalHeight = oHeight*heightMultiplier;

  const overlayCtx = overlay.getContext('2d');
  overlayCtx.fillStyle = 'rgba(255,5,5,0.2)';
  overlayCtx.fillRect(portalLeft,portalTop,portalWidth,portalHeight);
}

async function init() {
  window.onresize = handleResize;
  const videoConstraints = {
    facingMode: "environment",
    height: {max: 1080},
    width: {max: 1920},
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
  ctx.strokeStyle = 'rgba(5,255,5,0.5)';
  ctx.fillStyle = 'rgba(5,255,5,0.5)';
  //ctx.fillStyle = '#ff0000';
  ctx.lineWidth = 6;
  for (let i = 0; i < symbols.length; ++i) {
    const sym = symbols[i];
    const points = sym.points;
    ctx.beginPath();
    for (let j = 0; j < points.length; ++j) {
      const {x, y} = points[j];
      if (j === 0) {
        ctx.moveTo(x+portalLeft-50, y+portalTop+20);
      } else {
        ctx.lineTo(x+portalLeft-50, y+portalTop+20);
      }
    }
    ctx.closePath();
    ctx.stroke();
    //ctx.fillText('#' + i, points[0].x+portalLeft-50, points[0].y+portalTop);

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

  //const imgData = ctx.getImageData(0, 0, width, height);
  const imgData = ctx.getImageData(portalLeft, portalTop, portalWidth, portalHeight);
  
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
    let div = (
      <div
        className={'full middle'}
        style={{height: 72, width: "100%", textAlign: 'center', fontSize: 36}}>{'Cannot get camera: ' + err}</div>);
    let target = document.getElementById('status');
    ReactDom.render(div, target);
    console.error(err);
  }
}

main();
