import styles from './Button.module.scss';
import ArrowRightIcon from '../icon/ArrowRightIcon';

type ButtonVariant = 'brand' | 'dark';

type ButtonSize = 'lg' | 'md';

type ButtonShape = 'default' | 'round';

type ButtonProps = {
  variant?: ButtonVariant;
  children?: React.ReactNode;
  icon?: boolean;
  iconPosition?: 'left' | 'right';
  size?: ButtonSize;
  shape?: ButtonShape;
  fullWidth?: boolean;
  fullWidthMobile?: boolean;
};

export default function Button({ children, icon = false, iconPosition = 'right', size = 'md', shape = 'default', variant = 'brand', fullWidth = false, fullWidthMobile = false }: ButtonProps) {
  const isRound = shape === 'round';
  if (import.meta.env.DEV && isRound && children) {
    console.warn('Button: shape="round" should be used without text.');
  }
  if (import.meta.env.DEV && isRound && !icon) {
    console.warn('Button: shape="round" should usually be used with icon.');
  }
  if (import.meta.env.DEV && isRound && (fullWidth || fullWidthMobile)) {
    console.warn('Button: shape="round" should not be used with full width.');
  }

  const variantClass = variant === 'dark' ? styles['button--dark'] : styles['button--brand'];

  const fullWidthClass = fullWidth ? styles['button--full'] : '';
  const fullWidthMobileClass = fullWidthMobile ? styles['button--full-mobile'] : '';

  const sizeClass = size === 'lg' ? styles['button--lg'] : styles['button--md'];

  const shapeClass = shape === 'round' ? styles['button--round'] : '';

  const className = [styles.button, sizeClass, shapeClass, variantClass, fullWidthClass, fullWidthMobileClass, 'font-t-m'].filter(Boolean).join(' ');

  return (
    <button className={className} type="button">
      {icon && iconPosition === 'left' && (
        <span className={styles.button__icon} aria-hidden="true">
          <ArrowRightIcon />
        </span>
      )}

      {!isRound && children && <span className={styles.button__text}>{children}</span>}

      {icon && iconPosition === 'right' && (
        <span className={styles.button__icon} aria-hidden="true">
          <ArrowRightIcon />
        </span>
      )}
    </button>
  );
}
