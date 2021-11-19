import React, { useState, useEffect } from 'react'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import { fabric } from 'fabric'; // this also installed on your project
import './Canvas.css';
function Canvas() {
 
  // https://firebasestorage.googleapis.com/v0/b/angular-chat-7e902.appspot.com/o/74A34F74.png?alt=media&token=d6fa5c8d-4616-4b2b-8524-aa718f11363c
    // const stickerOneUrl = 'https://d33v4339jhl8k0.cloudfront.net/docs/assets/55d20ae1e4b089486cadc329/images/5bb3d15e042863158cc6fd1a/file-HsxM6tHTgl.png';
  const stickerOneUrl = 'https://firebasestorage.googleapis.com/v0/b/veganic-75dd1.appspot.com/o/images%2FLabel-with-no-logo.jpg?alt=media&token=93ffaa45-9644-46d3-ab04-86ae9e72efd7';
 
  const stickerTwoUrl = 'https://firebasestorage.googleapis.com/v0/b/veganic-75dd1.appspot.com/o/images%2FLabel-with-no-logo.jpg?alt=media&token=93ffaa45-9644-46d3-ab04-86ae9e72efd7';
  const tubeImage = 'https://firebasestorage.googleapis.com/v0/b/veganic-75dd1.appspot.com/o/images%2FZinClear%20front.jpg?alt=media&token=a024dad0-fb56-484d-b29f-415e35d129b2';

    const { editor, onReady } = useFabricJSEditor();

   editor?.canvas.on('object:added', objectAddedListener);
  editor?.canvas.on('object:modified', objectMovedListener);
  editor?.canvas.on('object:scaling', objectMovedListener);
  editor?.canvas.on('object:moving', objectMovedListener);
  editor?.canvas.on('object:skewing', objectMovedListener);
  editor?.canvas.on('path:created', objectMovedListener);

   function objectAddedListener(ev) {
     let target = ev.target;
    // console.log('left', target.left, 'top', target.top, 'width', target.width, 'height', target.height);
    //   localStorage.setItem('left', target.left);
    // localStorage.setItem('top', target.left);
    // localStorage.setItem('width', target.left);
    // localStorage.setItem('height', target.left);
  }

  function objectMovedListener(ev) {
    let target = ev.target;
    // console.log('left', target.left, 'top', target.top, 'width', target.width * target.scaleX, 'height', target.height * target.scaleY);
    localStorage.setItem('left', target.left);
    localStorage.setItem('top', target.top);
    localStorage.setItem('width', target.width * target.scaleX);
    localStorage.setItem('height', target.height * target.scaleY);
  }
  
    fabric.Image.fromURL(tubeImage, (oImg) => {
      editor?.canvas.setBackgroundImage(oImg, editor?.canvas.renderAll.bind(editor?.canvas), {
       
        scaleX: editor?.canvas.width / oImg.width,
       scaleY: editor?.canvas.height / oImg.height,
    
       })
    })
    
    
   const addStickerOne = () => {
     fabric.Image.fromURL(stickerOneUrl, (oImg) => {
       oImg.left = localStorage.getItem('left');
       oImg.top = localStorage.getItem('top');
      oImg.width = localStorage.getItem('width');
       oImg.height = localStorage.getItem('height');
     editor?.canvas.add(oImg)
           },{crossOrigin:"*"})
   }
  
  const addStickerTwo = () => {
    
    fabric.Image.fromURL(stickerTwoUrl, (oImg) => {
     
      oImg.left =Number(localStorage.getItem('left')) ;
      oImg.top = Number(localStorage.getItem('top'));
      // oImg.scaleX =Number(localStorage.getItem('width'))/oImg.width;
      // oImg.scaleY = Number(localStorage.getItem('height')) / oImg.height;
      const a = Number(localStorage.getItem('width')) / oImg.width;
      const b = Number(localStorage.getItem('height')) / oImg.height;
      oImg.scale(Math.min(a, b));
      // oImg.height = Number(localStorage.getItem('height'));
      // oImg.width = Number(localStorage.getItem('width'));
      // oImg.scaleToHeight(Number(localStorage.getItem('height'))/oImg.height);
      // oImg.scaleToWidth(Number(localStorage.getItem('width'))/oImg.width);
    
       editor?.canvas.add(oImg)
        },{crossOrigin:"*"})  
     }
    
    const onDelete = () => {
        editor?.canvas.clear();
    }
  const download = () => {
    let url = editor?.canvas.toDataURL();
    console.log('The download url is ' + url);
  }
 
 const  drawRectangle=()=> {
   editor?.addRectangle();
  //  editor?.addText('place logo here', {
  //      borderColor: 'red',
  //  });
   
 }
  
  const getCoords = () => {
const cords = editor?.canvas.getActiveObject().getCoords();
   console.log(cords);
  }


  
  const handleLogoUpload = (e) => {
  let file = e.target.files[0];
  let u = URL.createObjectURL(file);
  let img = new Image();
    img.onload = () => {
    let containerWidth = Number(localStorage.getItem('width'));
    let containerHeight= Number(localStorage.getItem('height'));
    let imageWidth = img.width;
    let imageHeight = img.height;
   
      let w = imageWidth / containerWidth;
      let h = imageHeight / containerHeight;
      if (h > w) {
  
 let testHeight = imageHeight / containerHeight;
      let testWidth = imageWidth / testHeight;
      let displacement = Math.abs(containerWidth - testWidth);
      let coord = displacement /2;
      let xposition = Number(localStorage.getItem('left')) + coord;
     let reader = new FileReader();
    reader.onload = (f) => {
    let data = f.target.result;
    fabric.Image.fromURL(data, (oImg) => {
     
      const a = Number(localStorage.getItem('width')) / oImg.width;
      
      const b = Number(localStorage.getItem('height')) / oImg.height;
      console.log('scaled width', a);
      console.log('scaled height', b);
       oImg.left =xposition;
      oImg.top = Number(localStorage.getItem('top'));
      oImg.scale(Math.min(a, b));   
    editor?.canvas.add(oImg)
    })
    }
    reader.readAsDataURL(file)
      }
      else if (w > h) {
        let  newimageheight = imageWidth / containerWidth;
        let fact = imageHeight / newimageheight;
        let dis = Math.abs(containerHeight - fact);
        let ycord = dis / 2;
        let yposition = Number(localStorage.getItem('top')) + ycord;
        let reader = new FileReader();
    reader.onload = (f) => {
    let data = f.target.result;
    fabric.Image.fromURL(data, (oImg) => {
     
      const a = Number(localStorage.getItem('width')) / oImg.width;
      
      const b = Number(localStorage.getItem('height')) / oImg.height;
      console.log('scaled width', a);
      console.log('scaled height', b);
       oImg.left = Number(localStorage.getItem('left'));
      oImg.top = yposition;
      oImg.scale(Math.min(a, b));   
    editor?.canvas.add(oImg)
    })
    }
    reader.readAsDataURL(file)
      }
     
    };
    img.src = u;

    
}

    return (
        <div className="App">
      <h1>FabricJS React Sample</h1>
          
            {/* <button onClick={addStickerOne}>Add Sticker one</button> */}
              <button onClick={addStickerTwo}>Add Sticker Two</button>
        <button onClick={onDelete}>Delete</button>
        <button onClick={download}>Download</button>
        <button onClick={drawRectangle}>draw rectangle</button>
           {/* <button onClick={getCoords}>Save Coordinates</button> */}
              <input onChange={handleLogoUpload} multiple={false}  type='file'  accept="image/*" />

    <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
    )
}

export default Canvas
