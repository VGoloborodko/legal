import ArrowRightIcon from './icons/ArrowRightIcon';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import ShieldIcon from './icons/ShieldIcon';
import Sheet from './icons/Sheet';
import Chart from './icons/Chart';
import Info from './icons/Info';
import PhoneOff from './icons/PhoneOff';
import Wallet from './icons/Wallet';
import Move from './icons/Move';
import Check from './icons/Check';

export const icons = {
  arrowRight: ArrowRightIcon,
  arrowUpRight: ArrowUpRightIcon,
  shield: ShieldIcon,
  sheet: Sheet,
  chart: Chart,
  info: Info,
  phoneOff: PhoneOff,
  wallet: Wallet,
  move: Move,
  check: Check,
};

export type IconName = keyof typeof icons;