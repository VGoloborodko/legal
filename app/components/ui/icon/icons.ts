import ArrowRightIcon from './icons/ArrowRightIcon';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import ShieldIcon from './icons/ShieldIcon';
import Sheet from './icons/Sheet';
import Chart from './icons/Chart';
import Info from './icons/Info';

export const icons = {
  arrowRight: ArrowRightIcon,
  arrowUpRight: ArrowUpRightIcon,
  shield: ShieldIcon,
  sheet: Sheet,
  chart: Chart,
  info: Info,
};

export type IconName = keyof typeof icons;