import type { SVGProps } from 'react';

export type BaseSvgIconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  size?: number | string;
  width?: number | string;
  height?: number | string;
};