import { icons, type IconName } from './icons';
import type { IconProps } from './icon.types';

export type AppIconProps = Omit<IconProps, 'name'> & {
  name: IconName;
};

export default function Icon({ name, ...props }: AppIconProps) {
  const Component = icons[name];

  return <Component {...props} />;
}