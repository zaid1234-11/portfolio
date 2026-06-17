import { useState, useCallback, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VideoModal from "./VideoModal";
import AmbientBackground from "./AmbientBackground";
import Parallax from "./ui/Parallax";
import TextPressure from "./ui/TextPressure";

const CircularGallery = lazy(() => import("./CircularGallery"));

const videoRows = [
  {
    id: "row1",
    direction: "left" as const,
    speed: 80,
    videos: [
      {
        id: "v1",
        videoUrl: "v1.mp4",
        youtubeUrl: "https://www.youtube.com/embed/fIPAKrPEfeg",
        title: "Film edit",
        category: "showreel",
      },
      {
        id: "v2",
        videoUrl: "v2.mp4",
        youtubeUrl: "https://www.youtube.com/embed/zPEeClWx5EM",
        title: "graphic animation edit",
        category: "Commercial",
      },
      {
        id: "v3",
        videoUrl: "v11.mp4",
        youtubeUrl: "https://www.youtube.com/embed/2On10OXlpW0",
        title: "3d target tracking",
        category: "Motion",
      },
       {
        id: "v4",
        videoUrl: "v4.mp4",
        youtubeUrl: "https://www.youtube.com/embed/tYIlCWtaIgE",
        title: "art Direction",
        category: "Motion",
      },
      {
        id: "v9",
        videoUrl: "v9.mp4",
        youtubeUrl: "https://www.youtube.com/embed/NaX8wYkZ1iU",
        title: "caption animation",
        category: "Motion",
      },
    ],
  },
  {
    id: "row2",
    direction: "right" as const,
    speed: 100,
    videos: [
      {
        id: "v5",
        videoUrl: "v5.mp4",
        youtubeUrl: "https://youtube.com/embed/c9xpYUM_voo",
        title: "Showreel",
        category: "Showreel",
      },
      {
        id: "v6",
        videoUrl: "v6.mp4",
        youtubeUrl: "https://www.youtube.com/embed/S_QPKjvQYmo",
        title: "cafe edit",
        category: "Creative",
      },
      {
        id: "v7",
        videoUrl: "v7.mp4",
        youtubeUrl: "https://www.youtube.com/embed/bCvncttzuPI",
        title: "client edit",
        category: "Creative",
      },
      {
        id: "v8",
        videoUrl: "v8.mp4",
        youtubeUrl: "https://www.youtube.com/embed/-xn1VK3xW3E",
        title: "Gym edit",
        category: "Creative",
      },
      {
        id: "v10",
        videoUrl: "v10.mp4",
        youtubeUrl: "https://www.youtube.com/embed/Gs4VIV1rL9A",
        title: "blender animation",
        category: "Creative",
      },
    ],
  },
];

const WorkSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeUrl: string;
    title: string;
    category: string;
  } | null>(null);

  const handleVideoClick = useCallback((video: any) => {
    setSelectedVideo({
      youtubeUrl: video.youtubeUrl,
      title: video.title,
      category: video.category,
    });
  }, []);

  const allVideos = videoRows.flatMap((row) => row.videos).map((video) => ({
    image: video.videoUrl,
    text: video.title,
  }));

  return (
    <section id="work" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <AmbientBackground />

      <div className="relative z-10">
        <Parallax offset={25}>
          <motion.div
            className="px-4 sm:px-6 pb-8 md:pb-12 md:px-12 lg:px-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">
                Featured Work
              </p>
              {/* Interactive Text Pressure Heading */}
              <div className="relative h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] w-full flex items-center justify-center max-w-3xl mx-auto mb-2 sm:mb-4">
                <TextPressure
                  text="CRAFTING VISUAL"
                  flex
                  alpha={false}
                  stroke={false}
                  width
                  weight
                  italic
                  textColor="hsl(var(--foreground))"
                  minFontSize={32}
                />
              </div>
              <div className="relative h-[50px] sm:h-[70px] md:h-[90px] lg:h-[110px] w-full flex items-center justify-center max-w-3xl mx-auto -mt-2">
                <TextPressure
                  text="STORIES"
                  flex
                  alpha={false}
                  stroke={false}
                  width
                  weight
                  italic
                  textColor="hsl(var(--primary))"
                  minFontSize={24}
                />
              </div>
            </div>
          </motion.div>
        </Parallax>

        <div className="mt-8 md:mt-12 w-full max-w-[100vw] overflow-hidden">
          <Suspense fallback={<div className="h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-muted-foreground animate-pulse">Loading interactive gallery...</div>}>
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
              <CircularGallery
                items={allVideos}
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.05}
                font="bold 24px sans-serif"
                scrollSpeed={2}
              />
            </div>
          </Suspense>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/work"
            className="rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase text-primary-foreground"
          >
            View All Projects
          </Link>
        </div>
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.youtubeUrl || ""}
        title={selectedVideo?.title || ""}
        category={selectedVideo?.category || ""}
      />
    </section>
  );
};

export default WorkSection;
