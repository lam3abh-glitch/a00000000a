export function EiffelSketch({ className = "" }: { className?: string }) {
  // Deterministic pseudo-random twinkle positions across the tower silhouette
  const lights = [
    // Spire
    { x: 100, y: 22, d: 1.6, delay: 0.1 },
    { x: 100, y: 34, d: 1.4, delay: 0.7 },
    // Upper section (narrow)
    { x: 94, y: 56, d: 1.6, delay: 0.3 },
    { x: 106, y: 58, d: 1.4, delay: 1.1 },
    { x: 100, y: 70, d: 1.8, delay: 1.6 },
    { x: 92, y: 82, d: 1.4, delay: 0.5 },
    { x: 108, y: 84, d: 1.4, delay: 2.0 },
    // Second observation deck (around y=110)
    { x: 84, y: 108, d: 1.8, delay: 0.2 },
    { x: 100, y: 112, d: 2.0, delay: 1.2 },
    { x: 116, y: 108, d: 1.8, delay: 0.9 },
    // Middle lattice
    { x: 78, y: 138, d: 1.6, delay: 1.4 },
    { x: 92, y: 142, d: 1.4, delay: 0.4 },
    { x: 108, y: 142, d: 1.4, delay: 1.8 },
    { x: 122, y: 138, d: 1.6, delay: 0.6 },
    // First observation deck (around y=170)
    { x: 66, y: 168, d: 2.0, delay: 0.3 },
    { x: 86, y: 172, d: 1.6, delay: 1.0 },
    { x: 100, y: 174, d: 2.0, delay: 1.5 },
    { x: 114, y: 172, d: 1.6, delay: 0.8 },
    { x: 134, y: 168, d: 2.0, delay: 2.2 },
    // Lower legs — outer edges
    { x: 52, y: 210, d: 1.6, delay: 0.5 },
    { x: 74, y: 220, d: 1.4, delay: 1.3 },
    { x: 126, y: 220, d: 1.4, delay: 0.9 },
    { x: 148, y: 210, d: 1.6, delay: 1.9 },
    // Base arch
    { x: 62, y: 250, d: 1.4, delay: 0.6 },
    { x: 100, y: 244, d: 1.8, delay: 1.7 },
    { x: 138, y: 250, d: 1.4, delay: 0.4 },
  ];

  return (
    <svg
      viewBox="0 0 200 300"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="eiffel-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5c74a" stopOpacity="1" />
          <stop offset="40%" stopColor="#f5c74a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f5c74a" stopOpacity="0" />
        </radialGradient>
        <filter id="eiffel-blur">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>

      {/* Tower ink sketch */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Spire */}
        <line x1="100" y1="12" x2="100" y2="40" />
        <line x1="97" y1="40" x2="103" y2="40" />

        {/* Top pod */}
        <path d="M94 46 L106 46 L104 54 L96 54 Z" />
        <line x1="97" y1="50" x2="103" y2="50" />

        {/* Upper narrow section (top -> second deck) */}
        <path d="M96 54 L88 108 M104 54 L112 108" />
        <line x1="92" y1="70" x2="108" y2="70" />
        <line x1="90" y1="86" x2="110" y2="86" />
        <line x1="88" y1="102" x2="112" y2="102" />
        {/* lattice X's */}
        <path d="M96 60 L104 68 M104 60 L96 68" />
        <path d="M94 76 L106 84 M106 76 L94 84" />
        <path d="M92 92 L108 100 M108 92 L92 100" />

        {/* Second observation deck */}
        <rect x="82" y="108" width="36" height="6" rx="1" />
        <line x1="82" y1="118" x2="118" y2="118" />

        {/* Middle section (second deck -> first deck) */}
        <path d="M86 120 L74 168 M114 120 L126 168" />
        <line x1="80" y1="138" x2="120" y2="138" />
        <line x1="76" y1="158" x2="124" y2="158" />
        <path d="M84 124 L116 140 M116 124 L84 140" />
        <path d="M80 144 L120 160 M120 144 L80 160" />

        {/* First observation deck */}
        <rect x="62" y="168" width="76" height="8" rx="1" />
        <line x1="62" y1="180" x2="138" y2="180" />
        {/* deck railings */}
        <path d="M66 168 L66 176 M76 168 L76 176 M86 168 L86 176 M100 168 L100 176 M114 168 L114 176 M124 168 L124 176 M134 168 L134 176" />

        {/* Lower legs (first deck -> base arch) */}
        <path d="M66 182 L46 260 M134 182 L154 260" />
        <path d="M74 182 L64 240 M126 182 L136 240" />
        {/* lattice on legs */}
        <path d="M64 200 L78 210 M78 200 L64 210" />
        <path d="M122 200 L136 210 M136 200 L122 210" />
        <path d="M58 230 L72 240 M72 230 L58 240" />
        <path d="M128 230 L142 240 M142 230 L128 240" />

        {/* Grand arch */}
        <path d="M64 240 Q100 210 136 240" />

        {/* Ground line */}
        <line x1="40" y1="264" x2="160" y2="264" strokeDasharray="2 3" opacity="0.6" />
      </g>

      {/* Twinkling lights */}
      <g>
        {lights.map((l, i) => (
          <g key={i}>
            {/* halo */}
            <circle
              cx={l.x}
              cy={l.y}
              r={l.d * 3}
              fill="url(#eiffel-glow)"
              filter="url(#eiffel-blur)"
              style={{
                animation: `eiffelPulse 2.4s ease-in-out ${l.delay}s infinite`,
                transformOrigin: `${l.x}px ${l.y}px`,
              }}
            />
            {/* core */}
            <circle
              cx={l.x}
              cy={l.y}
              r={l.d * 0.6}
              fill="#fff4c2"
              style={{
                animation: `eiffelTwinkle 2.4s ease-in-out ${l.delay}s infinite`,
              }}
            />
          </g>
        ))}
      </g>

      <style>{`
        @keyframes eiffelPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.25); }
        }
        @keyframes eiffelTwinkle {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </svg>
  );
}