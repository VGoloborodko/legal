import type { BaseSvgIconProps } from '../icon.types';

export default function ThemeToggleSun({ className, size = 24, width = size, height = size, fill = 'none', stroke = '#FE9A00', ...props }: BaseSvgIconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 12 12" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#themeLightClip)">
        <path d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 1V2" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10V11" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.46484 2.46497L3.16984 3.16997" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.83008 8.82996L9.53508 9.53496" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1 6H2" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6H11" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.16984 8.82996L2.46484 9.53496" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.53508 2.46497L8.83008 3.16997" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="themeLightClip">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
