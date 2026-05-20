import type { BaseSvgIconProps } from '../icon.types';

export default function Info({ className, size = 24, width = size, height = size, fill = 'none', stroke = 'currentColor', ...props }: BaseSvgIconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="9" stroke={stroke} />
      <path d="M12.5 7.5C12.5 7.77614 12.2761 8 12 8C11.7239 8 11.5 7.77614 11.5 7.5C11.5 7.22386 11.7239 7 12 7C12.2761 7 12.5 7.22386 12.5 7.5Z" fill={fill} />
      <path d="M12 17V10" stroke={stroke} strokeLinecap="round" />
    </svg>
  );
}
