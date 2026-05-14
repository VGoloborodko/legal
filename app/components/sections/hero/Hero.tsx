import type { ReactNode } from 'react';
import styles from './Hero.module.scss';
import Icon, { type AppIconProps } from '../../ui/icon/Icon';

type HeroProps = {
  backgroundImage?: string;
  backgroundColor?: string;
  heroTag?: ReactNode;
  icon?: AppIconProps;
  heroTitle: ReactNode;
  heroSubTitle?: ReactNode;
  actions?: ReactNode;
};

export default function Hero({ backgroundImage, backgroundColor = 'var(--color-bg-surface)', heroTag, icon, heroTitle, heroSubTitle, actions }: HeroProps) {
  const background = backgroundImage ? `${backgroundColor} url(${backgroundImage}) center / cover no-repeat` : backgroundColor;

  const hasTag = Boolean(heroTag);
  const defaultIconSize = 20;
  const iconSize = icon?.size ?? defaultIconSize;

  return (
    <section className={styles.hero}>
      <div className="ears">
        <div className={`${styles.hero__wrapper} sp-v-green radius--xxl`} style={{ background }}>
          <div className="container">
            <div className="col-6 col-lg-10 col-md-6 col-sm-3">
              {hasTag && (
                <div className="sp-b-burgundy">
                  <div className={`${styles.hero__tag} color--secondary bg--glass radius--l`}>
                    {icon && <Icon {...icon} size={iconSize} />}
                    <p className="font-t-s color--secondary">{heroTag}</p>
                  </div>
                </div>
              )}

              <h1 className="font-h1 color--white">{heroTitle}</h1>

              {heroSubTitle && <p className="font-t-l color--secondary sp-t-burgundy">{heroSubTitle}</p>}

              {actions && <div className={`${styles.hero__actions} sp-t-burgundy`}>{actions}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
