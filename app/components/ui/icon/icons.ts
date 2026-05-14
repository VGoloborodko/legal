import ArrowRightIcon from './icons/ArrowRightIcon';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import ShieldIcon from './icons/ShieldIcon';
import Sheet from './icons/Sheet';

export const icons = {
  arrowRight: ArrowRightIcon,
  arrowUpRight: ArrowUpRightIcon,
  shield: ShieldIcon,
  sheet: Sheet,
};

export type IconName = keyof typeof icons;