import type { ReactNode } from 'react';
import styles from './Hero.module.scss';
// import Button from '../../ui/button/Button';

type HeroProps = {
  backgroundImage?: string;
  backgroundColor?: string;
  heroTitle: ReactNode;
  heroSubTitle?: ReactNode;
  actions?: ReactNode;
};

export default function Hero({ backgroundImage, backgroundColor = 'var(--color-bg-surface)', heroTitle, heroSubTitle, actions }: HeroProps) {
  const background = backgroundImage ? `${backgroundColor} url(${backgroundImage}) center / cover no-repeat` : backgroundColor;

  return (
    <section className={styles.hero}>
      <div className="ears">
        <div className={`${styles.hero__wrapper} sp-v-wine radius--xxl`} style={{ background }}>
          <div className="container">
            <div className="col-6 col-lg-10 col-md-6 col-sm-3">
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
