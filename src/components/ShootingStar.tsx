"use client";
import React, { useState, useEffect } from "react";

interface ShootingStarProps {
  delay?: number;
  top?: number;
  left?: number;
  distance?: number;
  angle?: number;
}

// Individual shooting star component
function ShootingStar({
  delay = 0,
  top = 50,
  left = -150,
  distance = 750,
  angle = 25,
}: ShootingStarProps) {
  const angleInRadians = (angle * Math.PI) / 180;
  const endX = distance * Math.cos(angleInRadians);
  const endY = distance * Math.sin(angleInRadians);

  return (
    <div
      className="shooting-star"
      style={{
        animationDelay: `${delay}s`,
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      <div className="star-core"></div>
      <style jsx>{`
        .shooting-star {
          position: absolute;
          width: 150px;
          height: 2px;
          animation: shootingStar 4s ease-out infinite;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 100%
          );
          border-radius: 2px;
          will-change: transform, opacity;
        }

        .star-core {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 0 6px 1px rgba(255, 255, 255, 0.9),
            0 0 12px 2px rgba(255, 255, 255, 0.5);
        }

        @keyframes shootingStar {
          0% {
            opacity: 0;
            transform: translateX(0) translateY(0) scale(0.8)
              rotate(${angle}deg);
          }
          2% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(${endX}px) translateY(${endY}px) scale(0.8)
              rotate(${angle}deg);
          }
        }
      `}</style>
    </div>
  );
}

interface ShootingStarFieldProps {
  starCount?: number;
}

function generateShootingStars(count: number) {
  return Array.from({ length: count }, () => ({
    delay: Math.random() * 10, // 0 to 10 seconds
    top: Math.floor(Math.random() * 600) - 200, // -200 to 400
    left: -150,
    angle: 25,
    distance: 750,
  }));
}

// Component that renders multiple shooting stars
export function ShootingStarField({ starCount = 15 }: ShootingStarFieldProps) {
  const [stars, setStars] = useState<Array<ShootingStarProps>>([]);

  useEffect(() => {
    setStars(generateShootingStars(starCount));
  }, [starCount]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {stars.map((star, index) => (
        <ShootingStar key={`star-${index}`} {...star} />
      ))}
    </div>
  );
}
