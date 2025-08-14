'use client'
import { motion } from 'framer-motion'
import { LucideProps } from 'lucide-react'

interface AnimatedIconProps extends LucideProps {
  animation?: 'pulse' | 'draw' | 'fill' | 'rotate' | 'none'
  className?: string
}

// Modern unified icons with micro-animations
export function Phone({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path 
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(20, 184, 166, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.8, ease: "easeInOut" },
          opacity: { duration: 0.3 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      {/* Phone signal animation */}
      <motion.g>
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx="12"
            cy="12"
            r={8 + i * 4}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: animation === 'pulse' ? [0, 1.2, 0] : 0,
              opacity: animation === 'pulse' ? [0, 0.6, 0] : 0
            }}
            transition={{
              duration: 2,
              repeat: animation === 'pulse' ? Infinity : 0,
              delay: i * 0.4,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.g>
    </svg>
  )
}

export function Calculator({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.rect 
        x="4" y="2" width="16" height="20" rx="2"
        initial={{ pathLength: 0 }}
        animate={{ 
          pathLength: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(20, 184, 166, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.6, ease: "easeInOut" },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      
      <motion.line 
        x1="8" y1="6" x2="16" y2="6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <motion.line 
        x1="16" y1="10" x2="8" y2="10"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      />
      
      {[
        { x1: 8, y1: 14, x2: 10, y2: 14, delay: 0.4 },
        { x1: 14, y1: 14, x2: 16, y2: 14, delay: 0.5 },
        { x1: 8, y1: 18, x2: 10, y2: 18, delay: 0.6 },
        { x1: 14, y1: 18, x2: 16, y2: 18, delay: 0.7 }
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            ...(animation === 'pulse' && i % 2 === 0 && {
              opacity: [1, 0.5, 1]
            })
          }}
          transition={{ 
            pathLength: { duration: 0.3, delay: line.delay },
            opacity: { duration: 0.2, delay: line.delay },
            ...(animation === 'pulse' && i % 2 === 0 && {
              opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            })
          }}
        />
      ))}
    </svg>
  )
}

export function Menu({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {[
        { y: 6, delay: 0 },
        { y: 12, delay: 0.1 },
        { y: 18, delay: 0.2 }
      ].map((line, i) => (
        <motion.line
          key={i}
          x1="4" y1={line.y} x2="20" y2={line.y}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            ...(animation === 'pulse' && {
              pathLength: [1, 0.8, 1],
              stroke: ["currentColor", "rgba(20, 184, 166, 0.8)", "currentColor"]
            })
          }}
          transition={{ 
            pathLength: { duration: 0.4, delay: line.delay },
            opacity: { duration: 0.2, delay: line.delay },
            ...(animation === 'pulse' && {
              pathLength: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
              stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
            })
          }}
        />
      ))}
    </svg>
  )
}

export function X({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.line 
        x1="18" y1="6" x2="6" y2="18"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(239, 68, 68, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.2 },
          ...(animation === 'pulse' && {
            stroke: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      <motion.line 
        x1="6" y1="6" x2="18" y2="18"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(239, 68, 68, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.4, delay: 0.1, ease: "easeInOut" },
          opacity: { duration: 0.2, delay: 0.1 },
          ...(animation === 'pulse' && {
            stroke: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
          })
        }}
      />
    </svg>
  )
}

export function ArrowRight({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.line 
        x1="5" y1="12" x2="19" y2="12"
        initial={{ pathLength: 0, x2: 5 }}
        animate={{ 
          pathLength: 1, 
          x2: 19,
          ...(animation === 'pulse' && {
            x2: [19, 17, 19],
            stroke: ["currentColor", "rgba(20, 184, 166, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.5, ease: "easeOut" },
          x2: { duration: 0.5, ease: "easeOut" },
          ...(animation === 'pulse' && {
            x2: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      <motion.polyline 
        points="12,5 19,12 12,19"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            pathLength: [1, 0.7, 1]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.4, delay: 0.2, ease: "easeOut" },
          opacity: { duration: 0.2, delay: 0.2 },
          ...(animation === 'pulse' && {
            pathLength: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
          })
        }}
      />
    </svg>
  )
}

export function CheckCircle({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.circle 
        cx="12" cy="12" r="10"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(34, 197, 94, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 0.3 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      <motion.polyline 
        points="9,12 12,15 16,8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(34, 197, 94, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.6, delay: 0.2, ease: "easeInOut" },
          opacity: { duration: 0.3, delay: 0.2 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          })
        }}
      />
      
      {animation === 'pulse' && (
        <motion.circle
          cx="12" cy="12" r="10"
          fill="none"
          stroke="rgba(34, 197, 94, 0.3)"
          strokeWidth="1"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.8, 0, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      )}
    </svg>
  )
}

export function Star({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.polygon 
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            fill: ["currentColor", "rgba(251, 191, 36, 0.9)", "currentColor"],
            stroke: ["currentColor", "rgba(251, 191, 36, 0.9)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.8, ease: "easeInOut" },
          opacity: { duration: 0.3 },
          ...(animation === 'pulse' && {
            fill: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      
      {animation === 'pulse' && (
        <>
          <motion.circle
            cx="12" cy="10" r="1"
            fill="rgba(251, 191, 36, 0.6)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.2
            }}
          />
          <motion.circle
            cx="8" cy="12" r="0.5"
            fill="rgba(251, 191, 36, 0.8)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5
            }}
          />
          <motion.circle
            cx="16" cy="12" r="0.5"
            fill="rgba(251, 191, 36, 0.8)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.8
            }}
          />
        </>
      )}
    </svg>
  )
}

export function Sparkles({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path 
        d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(251, 191, 36, 0.8)", "currentColor"],
            fill: ["none", "rgba(251, 191, 36, 0.2)", "none"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.8, ease: "easeInOut" },
          opacity: { duration: 0.3 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            fill: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      
      {[
        { d: "M5 3v4", delay: 0.3 },
        { d: "M19 17v4", delay: 0.4 },
        { d: "M3 5h4", delay: 0.5 },
        { d: "M17 19h4", delay: 0.6 }
      ].map((sparkle, i) => (
        <motion.path
          key={i}
          d={sparkle.d}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            ...(animation === 'pulse' && {
              opacity: [1, 0.3, 1],
              stroke: ["currentColor", "rgba(251, 191, 36, 0.8)", "currentColor"]
            })
          }}
          transition={{ 
            pathLength: { duration: 0.3, delay: sparkle.delay },
            opacity: { duration: 0.2, delay: sparkle.delay },
            ...(animation === 'pulse' && {
              opacity: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
              stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }
            })
          }}
        />
      ))}
    </svg>
  )
}

export function Award({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.circle 
        cx="12" cy="8" r="6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(251, 191, 36, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 0.3 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      <motion.path 
        d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(251, 191, 36, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.6, delay: 0.2, ease: "easeInOut" },
          opacity: { duration: 0.3, delay: 0.2 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
          })
        }}
      />
      
      {/* Award shine effect */}
      {animation === 'pulse' && (
        <motion.circle
          cx="12" cy="8" r="6"
          fill="none"
          stroke="rgba(251, 191, 36, 0.3)"
          strokeWidth="1"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 0, 0.6]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      )}
    </svg>
  )
}

export function TrendingUp({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.polyline 
        points="22,7 13.5,15.5 8.5,10.5 2,17"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(34, 197, 94, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.8, ease: "easeOut" },
          opacity: { duration: 0.3 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      <motion.polyline 
        points="16,7 22,7 22,13"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(34, 197, 94, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.4, delay: 0.3, ease: "easeOut" },
          opacity: { duration: 0.2, delay: 0.3 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          })
        }}
      />
      
      {/* Growth indicator dots */}
      {animation === 'pulse' && (
        <>
          <motion.circle
            cx="22" cy="7" r="1.5"
            fill="rgba(34, 197, 94, 0.6)"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [0, 1.2, 0],
              fill: ["rgba(34, 197, 94, 0.6)", "rgba(34, 197, 94, 0.9)", "rgba(34, 197, 94, 0.6)"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.8
            }}
          />
        </>
      )}
    </svg>
  )
}

export function Users({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path 
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(99, 102, 241, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.6, ease: "easeInOut" },
          opacity: { duration: 0.3 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      <motion.circle 
        cx="9" cy="7" r="4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(99, 102, 241, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.4, delay: 0.2, ease: "easeInOut" },
          opacity: { duration: 0.3, delay: 0.2 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
          })
        }}
      />
      <motion.path 
        d="M22 21v-2a4 4 0 0 0-3-3.87"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(99, 102, 241, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.6, delay: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.3, delay: 0.4 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
          })
        }}
      />
      <motion.path 
        d="M16 3.13a4 4 0 0 1 0 7.75"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(99, 102, 241, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.6, delay: 0.6, ease: "easeInOut" },
          opacity: { duration: 0.3, delay: 0.6 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
          })
        }}
      />
    </svg>
  )
}

// Service specific icons
export function Marketing({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path 
        d="m21 3-6 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(236, 72, 153, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 0.3 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      <motion.path 
        d="m15 3 6 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(236, 72, 153, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.5, delay: 0.1, ease: "easeInOut" },
          opacity: { duration: 0.3, delay: 0.1 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
          })
        }}
      />
      <motion.path 
        d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(236, 72, 153, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.4, delay: 0.3, ease: "easeInOut" },
          opacity: { duration: 0.3, delay: 0.3 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          })
        }}
      />
      <motion.path 
        d="m21 21-8.35-8.35"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(236, 72, 153, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.6, delay: 0.5, ease: "easeInOut" },
          opacity: { duration: 0.3, delay: 0.5 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
          })
        }}
      />
    </svg>
  )
}

export function Development({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.rect 
        width="18" height="18" x="3" y="3" rx="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(34, 197, 94, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 0.3 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      <motion.path 
        d="m9 9 3 3-3 3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(34, 197, 94, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
          opacity: { duration: 0.3, delay: 0.2 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
          })
        }}
      />
      <motion.path 
        d="m15 15h3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(34, 197, 94, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.3, delay: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.3, delay: 0.4 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
          })
        }}
      />
    </svg>
  )
}

export function Design({ animation = 'none', ...props }: AnimatedIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path 
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          ...(animation === 'pulse' && {
            stroke: ["currentColor", "rgba(139, 92, 246, 0.8)", "currentColor"]
          })
        }}
        transition={{ 
          pathLength: { duration: 0.8, ease: "easeInOut" },
          opacity: { duration: 0.3 },
          ...(animation === 'pulse' && {
            stroke: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          })
        }}
      />
      
      {/* Color dots with staggered animation */}
      {[
        { cx: 13.5, cy: 6.5, color: "rgba(239, 68, 68, 0.8)", delay: 0.2 },
        { cx: 17.5, cy: 10.5, color: "rgba(34, 197, 94, 0.8)", delay: 0.3 },
        { cx: 8.5, cy: 7.5, color: "rgba(59, 130, 246, 0.8)", delay: 0.4 },
        { cx: 6.5, cy: 12.5, color: "rgba(251, 191, 36, 0.8)", delay: 0.5 }
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx} cy={dot.cy} r="1.5"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            ...(animation === 'pulse' && {
              fill: ["currentColor", dot.color, "currentColor"],
              scale: [1, 1.3, 1]
            })
          }}
          transition={{ 
            scale: { duration: 0.3, delay: dot.delay },
            opacity: { duration: 0.2, delay: dot.delay },
            ...(animation === 'pulse' && {
              fill: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
            })
          }}
        />
      ))}
    </svg>
  )
}