import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2 } from "lucide-react";

interface VideoCardProps {
  videoUrl: string;
  title: string;
  category: string;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
  shouldPause: boolean;
}

const VideoCard = ({
  videoUrl,
  title,
  category,
  isHovered,
  onHover,
  onClick,
  shouldPause,
}: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lightSweepActive, setLightSweepActive] = useState(false);

  // Handle video playback based on hover state
  const handleMouseEnter = () => {
    onHover(true);
    setLightSweepActive(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    onHover(false);
    setLightSweepActive(false);
  };

  // Pause video when another card is hovered
  if (shouldPause && videoRef.current && !isHovered) {
    videoRef.current.pause();
  }

  return (
    <motion.div
      className="glass-card group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl md:rounded-2xl"
      style={{
        width: "clamp(140px, 40vw, 280px)",
        aspectRatio: "9/16",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        autoPlay
        onLoadedData={() => setIsLoaded(true)}
      />

      {/* Loading Shimmer */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-secondary to-muted bg-[length:200%_100%] animate-shimmer" />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

      {/* Glow Effect on Hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl md:rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          boxShadow: "inset 0 0 80px -20px hsl(var(--glow-primary) / 0.4), 0 0 60px -10px hsl(var(--glow-primary) / 0.3)",
        }}
      />

      {/* Light Sweep Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: lightSweepActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, transparent 40%, hsl(0 0% 100% / 0.08) 45%, hsl(0 0% 100% / 0.15) 50%, hsl(0 0% 100% / 0.08) 55%, transparent 60%)",
            transform: "translateX(-100%)",
          }}
          animate={lightSweepActive ? {
            transform: ["translateX(-100%)", "translateX(100%)"],
          } : {
            transform: "translateX(-100%)",
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-primary mb-0.5 md:mb-1">
            {category}
          </p>
          <h3 className="text-sm md:text-lg font-semibold text-foreground">{title}</h3>
        </motion.div>
      </div>

      {/* Play Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
          <Play className="h-4 w-4 md:h-6 md:w-6 text-primary fill-primary" />
        </div>
      </motion.div>

      {/* Sound Indicator - Hidden on mobile */}
      <motion.div
        className="absolute top-2 right-2 md:top-4 md:right-4 hidden sm:flex items-center gap-1.5 rounded-full bg-background/60 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Volume2 className="h-3 w-3 md:h-3.5 md:w-3.5 text-muted-foreground" />
        <span className="text-[10px] md:text-xs text-muted-foreground">Click for sound</span>
      </motion.div>
    </motion.div>
  );
};

export default VideoCard;