export function EverestSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 300" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* Main peak */}
        <path d="M20 250 L78 120 L104 158 L132 68 L176 160 L200 128 L228 250" />
        {/* Snow caps */}
        <path d="M120 92 L132 68 L146 96 L138 92 L130 100 L124 94 Z" fill="currentColor" opacity="0.12" />
        <path d="M70 138 L78 120 L88 142 L82 138 L76 144 Z" fill="currentColor" opacity="0.12" />
        {/* Ridges */}
        <path d="M132 68 L128 250 M78 120 L86 250 M176 160 L172 250" opacity="0.45" />
        <path d="M108 130 L120 146 M144 110 L156 130 M158 138 L168 152" opacity="0.5" />
        {/* Snow lines */}
        <path d="M112 118 L126 112 L140 122 L152 116" opacity="0.6" />
        <path d="M62 158 L74 152 L88 162" opacity="0.6" />
        {/* Prayer flags */}
        <path d="M132 62 L132 44" />
        <path d="M132 46 Q160 52 190 42" strokeDasharray="1 3" opacity="0.7" />
        <path d="M132 46 Q104 54 76 46" strokeDasharray="1 3" opacity="0.7" />
        {/* Ground */}
        <line x1="12" y1="250" x2="228" y2="250" strokeDasharray="2 3" opacity="0.6" />
      </g>
    </svg>
  );
}

export function PyramidsSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 300" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* Sun */}
        <circle cx="188" cy="62" r="16" opacity="0.5" />
        <circle cx="188" cy="62" r="22" strokeDasharray="1 4" opacity="0.4" />
        {/* Back pyramid */}
        <path d="M132 250 L184 138 L232 250" opacity="0.55" />
        <path d="M184 138 L184 250" strokeDasharray="2 3" opacity="0.35" />
        {/* Great pyramid */}
        <path d="M18 250 L96 96 L174 250" />
        <path d="M96 96 L96 250" opacity="0.45" />
        <path d="M96 96 L60 250 M96 96 L134 250" opacity="0.25" />
        {/* Block courses */}
        <path d="M74 140 L118 140 M60 176 L132 176 M44 212 L148 212" opacity="0.4" />
        {/* Small pyramid */}
        <path d="M4 250 L34 194 L64 250" opacity="0.5" />
        {/* Camel silhouette hint */}
        <path d="M186 244 q4 -12 12 -10 q6 -8 12 0 q8 -2 10 10" opacity="0.6" />
        <path d="M190 244 L190 252 M198 244 L198 252 M210 244 L210 252 M218 244 L218 252" opacity="0.6" />
        {/* Dune ground */}
        <path d="M6 250 Q60 244 120 250 T236 248" strokeDasharray="2 3" opacity="0.6" />
      </g>
    </svg>
  );
}