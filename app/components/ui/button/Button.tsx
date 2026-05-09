import styles from './Button.module.scss';
import ArrowRightIcon from '../icon/ArrowRightIcon';

type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonShape = 'default' | 'round';

type ButtonProps = {
  children?: React.ReactNode;
  icon?: boolean;
  iconPosition?: 'left' | 'right';
  size?: ButtonSize;
  shape?: ButtonShape;
};

export default function Button({ children, icon = false, iconPosition = 'right', size = 'md', shape = 'default' }: ButtonProps) {
  const sizeClass = size === 'sm' ? styles['button--sm'] : size === 'lg' ? styles['button--lg'] : styles['button--md'];

  const shapeClass = shape === 'round' ? styles['button--round'] : styles['button--default'];

  const className = `${styles.button} ${sizeClass} ${shapeClass}`;

  return (
    <button className={className} type="button">
      {icon && iconPosition === 'left' && (
        <span className={styles.button__icon} aria-hidden="true">
          <ArrowRightIcon />
        </span>
      )}

      {children && <span className={styles.button__text}>{children}</span>}

      {icon && iconPosition === 'right' && (
        <span className={styles.button__icon} aria-hidden="true">
          <ArrowRightIcon />
        </span>
      )}
    </button>
  );
}
