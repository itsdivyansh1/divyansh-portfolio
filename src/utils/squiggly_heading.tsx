import type { ReactNode } from "react";

interface DynamicSquigglyHeadingProps {
  text: string;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  children?: ReactNode;
}

export function DynamicSquigglyHeading({
  text,
  className = "",
  strokeColor = "#F59E0B",
  strokeWidth = 2,
}: DynamicSquigglyHeadingProps) {
  // Calculate width based on text length (approximate)
  const textWidth: number = text.length * 12; // Rough estimate
  const waveWidth: number = 40;
  const numWaves: number = Math.ceil(textWidth / waveWidth);

  // Generate path for multiple waves
  let path: string = "M2 4";
  for (let i = 0; i < numWaves; i++) {
    const baseX: number = i * waveWidth;
    path += `C${baseX + 8} 1 ${baseX + 16} 7 ${baseX + 24} 4C${baseX + 32} 1 ${
      baseX + 38
    } 7 ${baseX + 40} 4`;
  }

  return (
    <span className={`relative inline-block ${className}`}>
      {text}
      <svg
        className="absolute bottom-0 left-0 w-full h-2"
        viewBox={`0 0 ${numWaves * waveWidth + 4} 8`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d={path}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
