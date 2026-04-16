// SVG rabiscos: estrela torta, raio, coração

export function StarScribble({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="32,5 39,24 60,25 43,38 49,58 32,46 15,59 21,38 4,26 25,24" />
    </svg>
  );
}

export function BoltScribble({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 32 64" className={className} fill={color} stroke={color} strokeWidth="2" strokeLinejoin="round" aria-hidden>
      <polygon points="20,2 4,34 14,34 10,62 28,28 18,28 24,2" />
    </svg>
  );
}

export function HeartScribble({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M32 56 C 6 38, 6 14, 22 12 C 28 11, 32 16, 32 20 C 32 16, 36 11, 42 12 C 58 14, 58 38, 32 56 Z" />
    </svg>
  );
}

export function ArrowScribble({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 22 C 30 8, 60 32, 95 18" />
      <polyline points="82,8 100,18 88,30" />
    </svg>
  );
}

export function CircleScribble({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" aria-hidden>
      <path d="M50 8 C 80 10, 92 35, 88 60 C 82 85, 50 92, 28 86 C 8 78, 6 50, 18 28 C 28 12, 50 6, 60 12" />
    </svg>
  );
}
