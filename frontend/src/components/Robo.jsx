import React, { useEffect, useRef } from "react";

function RoboFollower() {
  const headRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      if (headRef.current) {
        headRef.current.style.transform = `rotate(${x * 10}deg) rotateX(${y * 10}deg)`;
      }

      const eyeMovement = 12;
      if (leftEyeRef.current && rightEyeRef.current) {
        leftEyeRef.current.style.transform = `translate(${x * eyeMovement}px, ${
          y * eyeMovement
        }px)`;
        rightEyeRef.current.style.transform = `translate(${x * eyeMovement}px, ${
          y * eyeMovement
        }px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-72 h-96">
        {/* Robot PNG */}
        <div
          ref={headRef}
          className="absolute w-full h-full transition-transform duration-150 ease-out"
        >
          <img
            src="/eva.png" // rename your PNG to eva.png inside public/
            alt="Robot EVA"
            className="w-full h-full"
          />

          {/* Eye overlay aligned to EVA's eyes */}
          <div className="absolute top-[30%] left-[32%] w-32 flex justify-between">
            <div
              ref={leftEyeRef}
              className="w-7 h-7 bg-cyan-400 rounded-full shadow-lg"
            ></div>
            <div
              ref={rightEyeRef}
              className="w-7 h-7 bg-cyan-400 rounded-full shadow-lg"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoboFollower;
