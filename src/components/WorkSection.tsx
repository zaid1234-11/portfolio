import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollingRow from "./ScrollingRow";
import VideoModal from "./VideoModal";
import AmbientBackground from "./AmbientBackground";
import Parallax from "./ui/Parallax";
import TextPressure from "./ui/TextPressure";

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
              <div className="relative h-[35px] sm:h-[45px] md:h-[60px] lg:h-[75px] w-full overflow-hidden flex items-center justify-center max-w-2xl mx-auto mb-1 sm:mb-2">
                <TextPressure
                  text="CRAFTING VISUAL"
                  flex
                  alpha={false}
                  stroke={false}
                  width
                  weight
                  italic
                  textColor="hsl(var(--foreground))"
                  minFontSize={28}
                />
              </div>
              <div className="relative h-[25px] sm:h-[35px] md:h-[50px] lg:h-[65px] w-full overflow-hidden flex items-center justify-center max-w-2xl mx-auto">
                <TextPressure
                  text="STORIES"
                  flex
                  alpha={false}
                  stroke={false}
                  width
                  weight
                  italic
                  textColor="hsl(var(--primary))"
                  minFontSize={20}
                />
              </div>
            </div>
          </motion.div>
        </Parallax>

        <div className="space-y-4 md:space-y-6">
          {videoRows.map((row, index) => (
            <ScrollingRow
              key={row.id}
              videos={row.videos}
              direction={row.direction}
              speed={row.speed}
              onVideoClick={handleVideoClick}
              rowIndex={index}
              totalRows={videoRows.length}
            />
          ))}
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
