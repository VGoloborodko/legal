import styles from './Advantages.module.scss';
import Button from '../../ui/button/Button';

export default function Advantages() {
  return (
    <section className={`${styles.advantages} sp-t-wine`}>
      <div className="ears">
        <div className={`${styles.advantages__wrapper} sp-v-green bg--surface radius--xxl`}>
          <div className="container">
            <div className="col">
              <div className="row">
                <div className="col-6 col-md-6 col-sm-3">
                  <p className="font-t-l color--secondary">Мы в цифрах</p>
                  <h2 className="font-h2 color--primary sp-t-lightblue">
                    Результаты, <br className="d-none-md" />
                    <span className="color--secondary">а не пустые обещания</span>
                  </h2>
                  <div className="sp-t-purple">
                    <Button icon={{ name: 'arrowUpRight' }} size="lg" fullWidthMobile variant="dark">
                      Смотреть кейсы
                    </Button>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-sm-3">
                  <div className={styles.advantages__stats}>
                    <div className={styles.advantages__item}>
                      <p className="font-h1 color--primary">91%</p>
                      <p className="font-t-m color--secondary sp-t-lightblue">Успешно завершённых дел</p>
                    </div>

                    <div className={styles.advantages__item}>
                      <p className="font-h1 color--primary">300+</p>
                      <p className="font-t-m color--secondary sp-t-lightblue">Клиентов получили помощь</p>
                    </div>

                    <div className={styles.advantages__item}>
                      <p className="font-h1 color--primary">15+</p>
                      <p className="font-t-m color--secondary sp-t-lightblue">Лет юридической практики</p>
                    </div>

                    <div className={styles.advantages__item}>
                      <p className="font-h1 color--primary">24</p>
                      <p className="font-t-m color--secondary sp-t-lightblue">Практикующих юриста</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
