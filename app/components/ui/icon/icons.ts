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
import ThemeToggleMoon from './icons/ThemeToggleMoon';
import ThemeToggleSun from './icons/ThemeToggleSun';
import Dash from './icons/Dash';
import Phone from './icons/Phone';
import Globe from './icons/Globe';
import MapPin from './icons/MapPin';

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
  moon: ThemeToggleMoon,
  sun: ThemeToggleSun,
  dash: Dash,
  phone: Phone,
  globe: Globe,
  mapPin: MapPin,
};

export type IconName = keyof typeof icons;
