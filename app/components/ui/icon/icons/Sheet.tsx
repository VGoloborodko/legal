import type { IconProps } from '../icon.types';

export default function Sheet({ className, size = 24, width = size, height = size, fill = 'none', stroke = 'currentColor', ...props }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.83333 18.3333L7.67577 15.8122C7.30957 9.95314 11.9628 5 17.8333 5L16.6183 5.972C14.7527 7.4645 13.6667 9.72414 13.6667 12.1133C13.6667 13.9262 11.8706 15.1919 10.1634 14.5822L7.83333 13.75"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
      />
    </svg>
  );
}
