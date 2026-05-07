import styles from './Advantages.module.scss';

export default function Advantages() {
  return (
    <section className={`${styles.advantages} sp-t-wine`}>
      <div className="ears">
        <div className={`${styles.advantages__wrapper} sp-v-green bg--surface stroke--secondary radius--xxl`}>
          <div className="container">
            <div className={`${styles.advantages__inner}`}>
              <div className="col-6 col-md-6 col-sm-3">
                <p className="font-t-l color--secondary">Мы в цифрах</p>
                <h2 className="font-h2 color--primary sp-t-lightblue">Результаты, <br/><span className="color--secondary">а не пустые обещания</span></h2>
                <p className="font-s-s color--secondary sp-t-purple">Кнопка</p>
              </div>
              <div className="col-6 col-md-6 col-sm-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
