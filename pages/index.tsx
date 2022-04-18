import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import WelcomeText from "../components/Home/WelcomeText";

const IndexPage = () => {
  var dots = [],
    mouse = {
      x: 0,
      y: 0,
    };

  // useEffect(() => {
  //   var Dot = function () {
  //     this.x = 0;
  //     this.y = 0;
  //     if (document) {
  //       this.node = (function () {
  //         var n = document.createElement("div");
  //         n.className = "trail";
  //         document.body.appendChild(n);
  //         return n;
  //       })();
  //     }
  //   };
  //   Dot.prototype.draw = function () {
  //     this.node.style.left = this.x + "px";
  //     this.node.style.top = this.y + "px";
  //   };
  //   for (var i = 0; i < 24; i++) {
  //     var d = new Dot();
  //     dots.push(d);
  //   }

  //   function draw() {
  //     var x = mouse.x + 100,
  //       y = mouse.y + 10;

  //     // This loop is where all the 90s magic happens
  //     dots.forEach(function (dot, index, dots) {
  //       var nextDot = dots[index + 1] || dots[0];

  //       dot.x = x;
  //       dot.y = y;
  //       dot.draw();
  //       x += (nextDot.x - dot.x) * 0.6;
  //       y += (nextDot.y - dot.y) * 0.6;
  //     });
  //   }

  //   function animate() {
  //     draw();
  //     requestAnimationFrame(animate);
  //   }
  //   animate();
  // }, []);

  useEffect(() => {
    // const moveCursor = (e) => {
    //   mouse.x = e.pageX;
    //   mouse.y = e.pageY;
    // };
    // window.addEventListener("mousemove", moveCursor);
    // return () => {
    //   window.removeEventListener("mousemove", moveCursor);
    // };
  }, []);

  const dirsX = [
    [-200, 0],
    // [0, 0],
  ];
  const dirsY = [
    [0, 0],
    // [100, 0],
  ];
  const skewX = [
    [0, 180, 360, 0],
    // [100, 0],
  ];
  const randomXDir = dirsX[Math.floor(Math.random() * dirsX.length)];
  const randomYDir = dirsY[Math.floor(Math.random() * dirsY.length)];
  const randomXSkew = skewX[Math.floor(Math.random() * skewX.length)];

  return (
    <motion.div className="h-full flex items-center justify-center">
      {/* <div className="max-h-1/2 w-1/3 cursor-none relative"> */}
      <div className="h-screen relative flex items-end">
        {/* <Canvas draw={draw} options={{}} /> */}
        <motion.div
          animate={{ x: randomXDir, y: randomYDir }}
          transition={{
            ease: "anticipate",
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            repeatDelay: 4
          }}
          className="basis-1/2 h-3/4 bg-primary dark:bg-primary-dark"          
        >
          <img
            src="images/drawing.png"
            alt="drawing of me"
            className="mix-blend-multiply dark:mix-blend-luminosity h-full
                      slidingImg"            
          />
        </motion.div>
        <div className="self-center">
          <WelcomeText />
        </div>
      </div>
    </motion.div>
  );
};

export default IndexPage;
