"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    '/images/portfolio/nano-preview.jpg',
    '/images/portfolio/neurize-preview.png',
    '/images/portfolio/tapari-preview.jpg',
    '/images/portfolio/anjam-preview.png',
    '/images/portfolio/nano-preview.jpg',
    '/images/portfolio/neurize-preview.png',
    '/images/portfolio/tapari-preview.jpg',
    '/images/portfolio/anjam-preview.png',
    '/images/portfolio/nano-preview.jpg',
    '/images/portfolio/neurize-preview.png',
    '/images/portfolio/nano-preview.jpg',
    '/images/portfolio/neurize-preview.png',
    '/images/portfolio/tapari-preview.jpg',
    '/images/portfolio/anjam-preview.png',
    '/images/portfolio/nano-preview.jpg',
    '/images/portfolio/neurize-preview.png',
    '/images/portfolio/tapari-preview.jpg',
    '/images/portfolio/anjam-preview.png',
    '/images/portfolio/nano-preview.jpg',
    '/images/portfolio/neurize-preview.png',
    '/images/portfolio/tapari-preview.jpg',
    '/images/portfolio/anjam-preview.png',
    '/images/portfolio/nano-preview.jpg',
    '/images/portfolio/neurize-preview.png',
    '/images/portfolio/tapari-preview.jpg',
    '/images/portfolio/anjam-preview.png',
    '/images/portfolio/nano-preview.jpg',
    '/images/portfolio/neurize-preview.png',
    '/images/portfolio/tapari-preview.jpg',
    '/images/portfolio/anjam-preview.png',
    '/images/portfolio/nano-preview.jpg',
    '/images/portfolio/neurize-preview.png',
    '/images/portfolio/tapari-preview.jpg',
    '/images/portfolio/anjam-preview.png',
    '/images/portfolio/nano-preview.jpg',
    '/images/portfolio/neurize-preview.png',
    '/images/portfolio/tapari-preview.jpg',
    '/images/portfolio/anjam-preview.png',
    '/images/portfolio/nano-preview.jpg',
    '/images/portfolio/neurize-preview.png',
    '/images/portfolio/tapari-preview.jpg',


  ];
  return (
    <div className="mx-auto my-2 w-full max-w-md sm:max-w-xl lg:max-w-3xl xl:max-w-4xl rounded-lg bg-teal-50/50 ring-1 ring-neutral-700/10 dark:bg-neutral-800 overflow-hidden">
      <ThreeDMarquee images={images} />
    </div>
  );
}
