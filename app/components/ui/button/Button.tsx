import type { MouseEventHandler, ReactNode } from 'react';
import type { BaseSvgIconProps } from '../icon/icon.types';
import styles from './Button.module.scss';
import { icons, type IconName } from '../icon/icons';

type ButtonVariant = 'brand' | 'dark';
type ButtonSize = 'lg' | 'md';
type ButtonShape = 'default' | 'round';

type CommonProps = {
  variant?: ButtonVariant;
  children?: ReactNode;
  icon?: BaseSvgIconProps & { name: IconName };
  iconPosition?: 'left' | 'right';
  size?: ButtonSize;
  shape?: ButtonShape;
  fullWidth?: boolean;
  fullWidthMobile?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
};

type LinkButtonProps = CommonProps & {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  type?: never;
};

type NativeButtonProps = CommonProps & {
  href?: undefined;
  target?: never;
  rel?: never;
  type?: 'button' | 'submit' | 'reset';
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const { children, icon, iconPosition = 'right', size = 'md', shape = 'default', variant = 'brand', fullWidth = false, fullWidthMobile = false, ariaLabel, disabled = false, className = '', onClick } = props;

  const isRound = shape === 'round';
  const isLink = 'href' in props && Boolean(props.href);
  const hasIcon = Boolean(icon);
  const Icon = icon ? icons[icon.name] : null;

  const defaultIconSize = 24;
  const iconSize = icon?.size ?? defaultIconSize;

  const iconProps: BaseSvgIconProps = icon ? (({ name: _iconName, ...rest }) => rest)(icon) : {};

  if (import.meta.env.DEV && isRound && children) {
    console.warn('Button: shape="round" should be used without text.');
  }

  if (import.meta.env.DEV && isRound && !hasIcon) {
    console.warn('Button: shape="round" should usually be used with icon.');
  }

  if (import.meta.env.DEV && isRound && (fullWidth || fullWidthMobile)) {
    console.warn('Button: shape="round" should not be used with full width.');
  }

  if (import.meta.env.DEV && isRound && !ariaLabel) {
    console.warn('Button: shape="round" requires ariaLabel for accessibility.');
  }

  const variantClass = variant === 'dark' ? styles['button--dark'] : styles['button--brand'];

  const fullWidthClass = fullWidth ? styles['button--full'] : '';
  const fullWidthMobileClass = fullWidthMobile ? styles['button--full-mobile'] : '';
  const sizeClass = size === 'lg' ? styles['button--lg'] : styles['button--md'];
  const shapeClass = isRound ? styles['button--round'] : '';

  const buttonClassName = [styles.button, sizeClass, shapeClass, variantClass, fullWidthClass, fullWidthMobileClass, 'font-t-m', className].filter(Boolean).join(' ');

  const content = (
    <>
      {hasIcon && Icon && iconPosition === 'left' && (
        <span className={styles.button__icon} aria-hidden="true">
          <Icon {...iconProps} size={iconSize} />
        </span>
      )}

      {!isRound && children && <span className={styles.button__text}>{children}</span>}

      {hasIcon && Icon && iconPosition === 'right' && (
        <span className={styles.button__icon} aria-hidden="true">
          <Icon {...iconProps} size={iconSize} />
        </span>
      )}
    </>
  );

  if (isLink) {
    const { href, target, rel } = props;
    const safeRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel;

    return (
      <a
        className={buttonClassName}
        href={disabled ? undefined : href}
        target={disabled ? undefined : target}
        rel={disabled ? undefined : safeRel}
        aria-label={isRound ? ariaLabel : undefined}
        aria-disabled={disabled || undefined}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
      >
        {content}
      </a>
    );
  }

  const { type = 'button' } = props;

  return (
    <button className={buttonClassName} type={type} disabled={disabled} onClick={onClick} aria-label={isRound ? ariaLabel : undefined}>
      {content}
    </button>
  );
}
