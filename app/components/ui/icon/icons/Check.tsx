import type { BaseSvgIconProps } from '../icon.types';

export default function Check({ className, size = 24, width = size, height = size, fill = 'none', stroke = 'currentColor', ...props }: BaseSvgIconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="9" stroke={stroke} />
      <path d="M8 12L11 15L16 9" stroke={stroke} />
    </svg>
  );
}
