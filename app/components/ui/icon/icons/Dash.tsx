import type { BaseSvgIconProps } from '../icon.types';

export default function Dash({ className, size = 24, width = size, height = size, fill = 'none', stroke = 'currentColor', ...props }: BaseSvgIconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="4" width="6" height="6" rx="1" stroke={stroke} strokeLinejoin="round" />
      <rect x="4" y="14" width="6" height="6" rx="1" stroke={stroke} strokeLinejoin="round" />
      <rect x="14" y="14" width="6" height="6" rx="1" stroke={stroke} strokeLinejoin="round" />
      <rect x="14" y="4" width="6" height="6" rx="1" stroke={stroke} strokeLinejoin="round" />
    </svg>
  );
}
