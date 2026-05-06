import styles from './Hero.module.scss';

type HeroProps = {
  backgroundImage: string;
};

export default function Hero({ backgroundImage }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.hero__wrapper} sp-t-wine radius--xxl`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className={styles.hero__inner}>
            <div className="col-5 col-md-6 col-sm-3">
              <div className={styles.hero__info}>
                <h1 className="font-h1 color--white">Юридические услуги в&nbsp;Рязани</h1>
                <p className="font-t-l color--secondary sp-t-burgundy">Помогаем решать споры с банками, оформлять недвижимость, защищать права потребителей и сопровождать дела в суде</p>
                <p className="font-t-l color--white sp-t-burgundy">БУДУТ КНОПКИ</p>
              </div>
            </div>

            <div className="col-4 col-md-6 col-sm-3">
              <div className={styles.hero__image}>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
