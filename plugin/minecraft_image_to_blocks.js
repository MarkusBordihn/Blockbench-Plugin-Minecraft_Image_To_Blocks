!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(this,(()=>(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("fs");var o=e.n(t);let r={title:"Image to Blocks Model",icon:"logo.png",author:"Markus Bordihn (Kaworru)",tags:["Minecraft","Image","Blocks"],version:"1.0.0",min_version:"4.10.4",description:"Converts an image into a 3D block model based on pixels with various options",website:"https://github.com/MarkusBordihn/Blockbench-Plugin-Minecraft_Image_To_Blocks",repository:"https://github.com/MarkusBordihn/Blockbench-Plugin-Minecraft_Image_To_Blocks",bug_tracker:"https://github.com/MarkusBordihn/Blockbench-Plugin-Minecraft_Image_To_Blocks/issues",variant:"both",has_changelog:!0,onload(){BarItems.import_pixel_model&&console.warn("Import Pixel Model already exists ..."),MenuBar.addAction(new Action({id:"import_pixel_model",name:"Import Image to Blocks Model",icon:"photo",click:()=>{new Dialog({id:"import_pixel_dialog",title:"Import Image to Blocks Model",form:{image:{label:"Texture Image",type:"file",extensions:["png"]},useColorForMerging:{label:"Use Color Values for Merging",type:"checkbox",value:!1},optimizeBlocks:{label:"Optimize Blocks",type:"checkbox",value:!0},mappingTexture:{label:"Mapping Texture",type:"checkbox",value:!0}},onConfirm(e){if(!e.image)return void console.error("No image selected");let t=e.image;console.info("Processing image...",t),function(e,t){"string"==typeof e?o().readFile(e,((e,o)=>{if(e)return void console.error("Error reading file:",e);const r=`data:image/png;base64,${o.toString("base64")}`,i=new Image;i.onload=()=>{console.log("Image loaded successfully"),t(i)},i.src=r})):console.error("Invalid file path")}(t,(o=>{!function(e,t,o,r,i){const n=document.createElement("canvas");n.width=t.width,n.height=t.height;const l=n.getContext("2d");l.save(),l.translate(0,n.height),l.scale(1,-1),l.drawImage(t,0,0);const{data:a}=l.getImageData(0,0,n.width,n.height),c=Array.from({length:n.height},((e,t)=>Array.from({length:n.width},((e,o)=>{const[r,i,l,c]=a.slice(4*(t*n.width+o),4*(t*n.width+o)+4);return c>0?{r,g:i,b:l}:null})))),s=r?function(e,t){const o=[],r=e[0].length,i=e.length,n=Array.from({length:i},(()=>Array(r).fill(!1))),l=(e,t)=>e.r===t.r&&e.g===t.g&&e.b===t.b,a=(o,n,a)=>{let c=0,s=0;for(;o+c<r&&e[n][o+c]&&(!t||l(e[n][o+c],a));)c++;for(;n+s<i&&e[n+s][o]&&(!t||l(e[n+s][o],a))&&Array.from({length:c},((t,r)=>e[n+s][o+r])).every((e=>e&&(!t||l(e,a))));)s++;return{blockWidth:c,blockHeight:s}},c=e=>o.filter((t=>!(t.x>=e.x&&t.y>=e.y&&t.x+t.width<=e.x+e.width&&t.y+t.height<=e.y+e.height)));for(let l=0;l<i;l++)for(let i=0;i<r;i++)if(!n[l][i]&&e[l][i]){const r=e[l][i],{blockWidth:s,blockHeight:h}=a(i,l,r),g={x:i,y:l,width:s,height:h,color:t?r:{r:255,g:255,b:255}};o.splice(0,o.length,...c(g)),o.push(g);for(let e=l;e<l+h;e++)for(let t=i;t<i+s;t++)n[e][t]=!0}return o}(c,o):function(e,t){const o=[],r=Array.from({length:e.length},(()=>Array(e[0].length).fill(!1)));for(let i=0;i<e.length;i++)for(let n=0;n<e[0].length;n++)if(!r[i][n]&&e[i][n]){const l=e[i][n];o.push({x:n,y:i,width:1,height:1,color:t?l:{r:255,g:255,b:255}}),r[i][n]=!0}return o}(c,o),h=function(e){return(e=e.replace(/\\/g,"/")).split("/").pop().split(".")[0].toLowerCase()}(e).toLowerCase(),g=new Group({name:h}).init();if(i){const o=function(e,t,o){const r=document.createElement("canvas");r.width=e.width,r.height=e.height,r.getContext("2d").drawImage(e,0,0);const i=new Texture({source:t,name:o}).add(!1);return i.width=r.width,i.height=r.height,i.updateSource(r.toDataURL("image/png")),i}(t,e,`${h}_texture`);!function(e){const{width:t,height:o}=e;"undefined"!=typeof Project&&void 0!==Project.texture_width&&void 0!==Project.texture_height?Project.texture_width!==t||Project.texture_height!==o?(Project.texture_width=t,Project.texture_height=o,console.log(`Project texture size adjusted to ${t}x${o}.`)):console.log("The project texture size already matches the texture size."):console.error("Project or its properties are not defined.")}(o),function(e,t,o){const{width:r,height:i}=o;e.forEach((({x:e,y:n,width:l,height:a,color:c,mirror_uv:s=!1})=>{const h=new Cube({from:[e,n,0],to:[e+l,n+a,1],color:new THREE.Color(`rgb(${c.r}, ${c.g}, ${c.b})`),faces:{north:{texture:o},south:{texture:o},east:{texture:o},west:{texture:o},up:{texture:o},down:{texture:o}},mirror_uv:s}),g=e,u=e+l,d=i-(n+a),f=i-n,m=1/r,p=u-g<m?g+m:u,x=u-g<m?u-m:g,w=f-d<m?f-m:d,b=f-d<m?d+m:f;h.faces.north.uv=[u,d,g,f],h.faces.south.uv=[g,d,u,f],h.faces.east.uv=[p,d,p-1,f],h.faces.west.uv=[x,d,x+1,f],h.faces.up.uv=[g,d,u,w+1],h.faces.down.uv=[g,b,u,f-1],h.addTo(t).init()}))}(s,g,o)}else!function(e,t){e.forEach((({x:e,y:o,width:r,height:i,color:n})=>{new Cube({from:[e,o,0],to:[e+r,o+i,1],color:new THREE.Color(`rgb(${n.r}, ${n.g}, ${n.b})`)}).addTo(t).init()}))}(s,g);Canvas.updateAll(),Blockbench.showQuickMessage("Block model created successfully!",2e3)}(t,o,e.useColorForMerging,e.optimizeBlocks,e.mappingTexture)}))}}).show()}}),"file.import")},onunload(){MenuBar.removeAction("import_pixel_model")}};return Plugin.register("minecraft_image_to_blocks",r),{}})()));