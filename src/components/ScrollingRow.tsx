import { useState, useRef } from "react";
import { motion } from "framer-motion";
import VideoCard from "./VideoCard";

interface Video {
  id: string;
  videoUrl: string;
  title: string;
  category: string;
}

interface ScrollingRowProps {
  videos: Video[];
  direction: "left" | "right";
  speed: number;
  onVideoClick: (video: Video) => void;
  rowIndex: number;
  totalRows: number;
}

const ScrollingRow = ({
  videos,
  direction,
  speed,
  onVideoClick,
  rowIndex,
  totalRows,
}: ScrollingRowProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [isRowHovered, setIsRowHovered] = useState(false);

  // Calculate depth properties based on row index
  const getDepthProperties = () => {
    const normalizedPosition = rowIndex / (totalRows - 1 || 1);
    const scale = 1 + (0.03 - normalizedPosition * 0.06);
    const opacity = 1 - normalizedPosition * 0.1;
    const blur = normalizedPosition * 0.5;

    return { scale, opacity, blur };
  };

  const depthProps = getDepthProperties();

  // Duplicate videos for seamless loop
  const duplicatedVideos = [...videos, ...videos];

  return (
    <motion.div
      ref={rowRef}
      className="relative overflow-hidden py-2 md:py-4"
      style={{ 
        opacity: depthProps.opacity,
        filter: depthProps.blur > 0 ? `blur(${depthProps.blur}px)` : undefined,
      }}
      onMouseEnter={() => setIsRowHovered(true)}
      onMouseLeave={() => {
        setIsRowHovered(false);
        setHoveredId(null);
      }}
    >
      <div
        className={`flex gap-3 md:gap-6 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        } ${isRowHovered ? "animation-paused" : ""}`}
        style={{ 
          ["--scroll-duration" as string]: `${speed}s`,
          transform: `scale(${depthProps.scale})`,
          transformOrigin: "center center",
        }}
      >
        {duplicatedVideos.map((video, index) => (
          <VideoCard
            key={`${video.id}-${index}`}
            videoUrl={video.videoUrl}
            title={video.title}
            category={video.category}
            isHovered={hoveredId === `${video.id}-${index}`}
            onHover={(hovered) =>
              setHoveredId(hovered ? `${video.id}-${index}` : null)
            }
            onClick={() => onVideoClick(video)}
            shouldPause={hoveredId !== null && hoveredId !== `${video.id}-${index}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ScrollingRow;