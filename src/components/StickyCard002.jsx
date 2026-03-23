import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { cn } from "../lib/utils";

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}) => {
  const container = useRef(null);
  const imageRefs = useRef([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const imageElements = imageRefs.current;
      const totalCards = imageElements.length;

      if (!imageElements[0] || totalCards === 0) return;

      gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (!imageElements[i]) continue;
        gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentImage = imageElements[i];
        const nextImage = imageElements[i + 1];
        const position = i;
        if (!currentImage || !nextImage) continue;

        scrollTimeline.to(
          currentImage,
          {
            scale: 0.7,
            rotation: 5,
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTimeline.to(
          nextImage,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <div className={cn("relative h-full w-full", className)} ref={container}>
      <div className="sticky-cards relative flex h-screen w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div
          className={cn(
            "relative h-[80vh] w-full max-w-sm overflow-hidden rounded-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl",
            containerClassName,
          )}
        >
          {cards.map((card, i) => {
            const imgEl = (
              <img
                key={card.id || i}
                src={card.image}
                alt={card.alt || ""}
                className={cn(
                  "rounded-4xl absolute h-full w-full object-cover",
                  imageClassName,
                )}
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
              />
            );
            return card.link ? (
              <a
                key={card.id || i}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute h-full w-full cursor-pointer"
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
              >
                <img
                  src={card.image}
                  alt={card.alt || ""}
                  className={cn(
                    "rounded-4xl h-full w-full object-cover",
                    imageClassName,
                  )}
                />
              </a>
            ) : (
              imgEl
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StickyCard002;
