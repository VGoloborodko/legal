import { icons, type IconName } from './icons';
import type { BaseSvgIconProps } from './icon.types';

export type IconProps = BaseSvgIconProps & {
  name: IconName;
};

export default function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];

  if (!Component) {
    if (import.meta.env.DEV) {
      console.warn(`[Icon] Unknown icon name: "${name}"`);
    }

    return null;
  }

  return <Component {...props} />;
}
