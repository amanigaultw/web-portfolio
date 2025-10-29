'use client'

import React, { useState, useEffect, useRef } from "react";

interface ColorDistanceTextProps {
  text?: string;
  maxDistance?: number;
  closeColor?: string;
  farColor?: string;
  style?: React.CSSProperties;
}

/**
 * Inline React 19 + TypeScript component that changes text color
 * depending on how far the mouse cursor is from the text.
 *
 * It renders as a <span>, so it fits naturally into paragraphs.
 */
const ColorDistanceText: React.FC<ColorDistanceTextProps> = ({
  text = "hover me",
  maxDistance = 300,
  closeColor = "rgba(255, 208, 0, 1)",
  farColor = "#a1a1a1ff",
  style,
}) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [color, setColor] = useState<string>(farColor);

  // Parse various color formats (rgb, rgba, hex with or without alpha)
  const parseColor = (colorStr: string): [number, number, number] => {
    // Handle rgba format
    let match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
    }
    
    // Handle hex colors
    if (colorStr.startsWith('#')) {
      const hex = colorStr.replace('#', '');
      // Handle both 6-digit and 8-digit hex (with alpha)
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return [r, g, b];
    }
    
    return [0, 0, 0];
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spanRef.current) return;

      const rect = spanRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const normalized = Math.min(distance / maxDistance, 1);

      // Parse the close and far colors
      const [r1, g1, b1] = parseColor(closeColor);
      const [r2, g2, b2] = parseColor(farColor);

      // Interpolate between the two colors
      const r = Math.round(r1 + (r2 - r1) * normalized);
      const g = Math.round(g1 + (g2 - g1) * normalized);
      const b = Math.round(b1 + (b2 - b1) * normalized);

      setColor(`rgb(${r}, ${g}, ${b})`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [maxDistance, closeColor, farColor]);

  return (
    <span
      ref={spanRef}
      className="whitespace-nowrap"
      style={{
        color,
        transition: "color 0.1s linear",
        ...style,
      }}
    >
      {text}
    </span>
  );
};

export default ColorDistanceText;