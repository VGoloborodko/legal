import type { BaseSvgIconProps } from '../icon.types';

export default function Move({ className, size = 24, width = size, height = size, fill = 'none', stroke = 'currentColor', ...props }: BaseSvgIconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 18L18 12L12 6" stroke={stroke} />
      <path d="M6 18L12 12L6 6" stroke={stroke} />
    </svg>
  );
}
