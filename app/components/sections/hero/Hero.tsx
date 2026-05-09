import styles from './Hero.module.scss';
import Button from '../../ui/button/Button';

type HeroProps = {
  backgroundImage: string;
  heroTitle: string;
  heroSubTitle: string;
};

export default function Hero({ backgroundImage, heroTitle, heroSubTitle }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className="ears">
        <div className={`${styles.hero__wrapper} sp-v-wine radius--xxl`} style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="container">
            <div className="col-6 col-lg-10 col-md-6 col-sm-3">
              <h1 className="font-h1 color--white">{heroTitle}</h1>
              <p className="font-t-l color--secondary sp-t-burgundy">{heroSubTitle}</p>
              {/* <p className="font-t-l color--white sp-t-burgundy">БУДУТ КНОПКИ</p> */}
              <Button size="md" icon>
                Получить поддержку
              </Button>
              <Button size="sm">Маленькая кнопка</Button>
              <Button icon shape="round" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
