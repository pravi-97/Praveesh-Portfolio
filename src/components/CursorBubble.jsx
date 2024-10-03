import React, { useState, useEffect } from 'react';
import "./styles/CursorBubble.css";

const CursorBubble = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    const handleScroll = () => {
      setPosition((prevPosition) => ({
        x: prevPosition.x,
        y: prevPosition.y,
      }));
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="cursor-bubble"
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px) scale(1.1, 0.9)`, // Slight scale to give the bubble effect
      }}
    />
  );
};

export default CursorBubble;
