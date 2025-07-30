// import gsap from 'gsap/all';
// import React, { useEffect, useRef, useState } from 'react';

// const Loader = () => {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const inputRef = useRef(null);
//   const [inputValue, setInputValue] = useState('Connecting All Circles');

//   const hideExplore = () => {
//     gsap.to(containerRef.current, {
//       display: "none",
//       duration: 3,
//       scale: 2.4,
//       opacity: 0
//     });
//   };

//   useEffect(() => {  
//     const canvas = canvasRef.current; 
//     const input = inputRef.current;
//     const ctx = canvas.getContext("2d");
//     let mouse = { x: 0, y: 0 };
//     let circleArr = [];
//     let txtArr = [];

//     // const colors = ["#00FFFF", "#00FF00", "#FF69B4", "#FFFF00", "#FF4500", "#FF00FF", "#40E0D0"];
//     const colors = ["orange" ];
//     const hoverColor = "#FFFFFF"; // Color to change to on hover

//     const initScene = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       const w = canvas.width;
//       const h = canvas.height;

//       ctx.font = "bold 4em 'Dancing Script', cursive";
//       ctx.textAlign = "center";
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillText(input.value, canvas.width / 4, canvas.height / 2);

//       const radius = 1;
//       const data32 = new Uint32Array(ctx.getImageData(0, 0, canvas.width / 2, canvas.height).data.buffer);
//       txtArr = [];

//       for (let i = 0; i < data32.length; i++) {
//         if (data32[i] & 0xff000000) {
//           txtArr.push({
//             x: (i % w) * radius * 2 + radius,
//             y: ((i / w) | 0) * radius * 2 + radius,
//           });
//         }
//       }

//       ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);
//       ctx.globalCompositeOperation = "screen";
//       circleArr = [];
//       for (let i = 0; i < txtArr.length; i++) {
//         circleArr.push(new Circle(txtArr[i].x, txtArr[i].y, colors[Math.floor(Math.random() * colors.length)]));
//       }
//     };

//     const Circle = function (x, y, color) {
//       this.x = Math.random() * canvas.width;
//       this.y = Math.random() * canvas.height;
//       this.dx = Math.random() - 1;
//       this.dy = Math.random() - 1;
//       this.radius = 1;
//       this.dest = { x, y };
//       this.vx = (Math.random() - 0.5) * 20;
//       this.vy = (Math.random() - 0.5) * 20;
//       this.accX = 0;
//       this.accY = 0;
//       this.friction = Math.random() * 0.05 + 0.94;
//       this.color = color;
//       this.originalColor = color; // Store the original color
//     };

//     Circle.prototype.render = function () {
//       this.accX = (this.dest.x - this.x) / 1000;
//       this.accY = (this.dest.y - this.y) / 1000;
//       this.vx += this.accX;
//       this.vy += this.accY;
//       this.vx *= this.friction;
//       this.vy *= this.friction;

//       this.x += this.vx;
//       this.y += this.vy;

//       const a = this.x - mouse.x;
//       const b = this.y - mouse.y;
//       const distance = Math.sqrt(a * a + b * b);

//       // Change color on hover
//       if (distance < (this.radius * 70)) {
//         this.color = hoverColor;
//       } else {
//         this.color = this.originalColor;
//       }

//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//       ctx.fillStyle = this.color;
//       ctx.fill();

//       if (distance < (this.radius * 70)) {
//         this.accX = (this.x - mouse.x) / 100;
//         this.accY = (this.y - mouse.y) / 100;
//         this.vx += this.accX;
//         this.vy += this.accY;
//       }
//     };

//     const onMouseMove = (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     const render = () => {
//       requestAnimationFrame(render);
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (let i = 0; i < circleArr.length; i++) {
//         circleArr[i].render();
//       }
//     };

//     input.addEventListener("keyup", initScene);
//     window.addEventListener("resize", initScene);
//     window.addEventListener("mousemove", onMouseMove);

//     initScene();
//     requestAnimationFrame(render);

//     return () => {
//       input.removeEventListener("keyup", initScene);
//       window.removeEventListener("resize", initScene);
//       window.removeEventListener("mousemove", onMouseMove);
//     };
//   }, [inputValue]);

//   return (
//     <div ref={containerRef} className='w-full h-screen fixed top-0 bg-black z-[250] flex items-center justify-center'>
//       <div className='flex flex-col items-center'>
//         <input
//           id="txt"
//           ref={inputRef}
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           className='text-center hidden mb-4 p-2'
//         />
//         <canvas id="canvas" ref={canvasRef}></canvas>
//       </div>
//       <div className='w-full flex items-end justify-center pb-20 h-full absolute top-0 left-0 '>
//         <div onClick={() => hideExplore()} className='w-[14%] flex items-center justify-center h-12 border-y-[2px] border-red-500 rounded-xl cursor-pointer'>
//           <p className='f3 text-[1.2rem]'>Explore more</p>
//         </div>
//       </div>
//     </div>
//   );

// };
// // constraints are tof two type , 1.integrity constraint  , 2.key constraints . 

// export default Loader;
