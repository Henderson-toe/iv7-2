interface LogoProps {
  className?: string
  inverted?: boolean
}

export default function Logo({ className = 'h-10 w-auto', inverted = false }: LogoProps) {
  const color = inverted ? '#000000' : '#ffffff'
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="IV7 Logo"
    >
      {/* Left diagonal line of the V */}
      <path
        d="M18 8 L42 58"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right diagonal line of the V */}
      <path
        d="M102 8 L78 58"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom curve connecting */}
      <path
        d="M42 58 Q60 72 78 58"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* I V 7 text below */}
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fill={color}
        fontSize="10"
        fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
        fontWeight="300"
        letterSpacing="6"
      >
        I V 7
      </text>
    </svg>
  )
}
