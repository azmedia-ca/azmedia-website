'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type HeroVideoProps = {
  title?: string
  /** YouTube video ID (e.g., 'dQw4w9WgXcQ'). If omitted and imageSrc provided, an image-only card is shown. */
  youtubeId?: string
  /** Optional image poster or animated media (e.g., .gif). If provided with youtubeId, used as poster. If provided alone, shown directly. */
  imageSrc?: string
  imageAlt?: string
}

export function HeroVideo({
  title = 'AZ Media Showreel',
  youtubeId = 'q3yFo-t1ykw',
  imageSrc,
  imageAlt = 'Media preview'
}: HeroVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const iframeSrc = useMemo(() => {
    if (!youtubeId) return ''
    const params = new URLSearchParams({
      autoplay: isPlaying ? '1' : '0',
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      mute: '0'
    })
    return `https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`
  }, [youtubeId, isPlaying])

  const hasVideo = Boolean(youtubeId)
  const hasImage = Boolean(imageSrc)
  const isGif = useMemo(() => (imageSrc ? imageSrc.toLowerCase().endsWith('.gif') : false), [imageSrc])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-200/70 bg-white/40 backdrop-blur supports-[backdrop-filter]:bg-white/30">
        {hasVideo ? (
          !isPlaying ? (
          <button
            type="button"
            className="group absolute inset-0 z-10 grid place-items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play video: ${title}`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-100/60 via-transparent to-brand-200/50" />
            <Image
              src={imageSrc || '/images/small_logo.png'}
              alt={imageAlt}
              fill
              className="object-cover opacity-85 group-hover:opacity-95 transition-opacity duration-300"
              priority={false}
              unoptimized={isGif}
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <motion.div
              initial={false}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative z-20 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg ring-8 ring-white/60"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="-ml-0.5"
              >
                <path fill="currentColor" d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
            <span className="sr-only">Play</span>
          </button>
          ) : null
        ) : null}

        {isPlaying && hasVideo ? (
          <iframe
            title={title}
            src={iframeSrc}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : null}

        {!hasVideo && hasImage ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-100/40 via-transparent to-brand-200/40" />
            <Image
              src={imageSrc as string}
              alt={imageAlt}
              fill
              className="object-cover"
              priority={false}
              unoptimized={isGif}
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </>
        ) : null}
      </div>
    </motion.div>
  )
}


