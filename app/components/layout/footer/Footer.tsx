import styles from './Footer.module.scss';
import LeadForm from '../../../components/forms/lead-form/LeadForm';
import Icon from '../../ui/icon/Icon';

export default function Footer() {
  return (
    <footer className={`${styles.footer} sp-t-wine sp-b-green`}>
      <div className="ears">
        <div className={`${styles.footer__wrapper} sp-v-green bg--surface radius--xxl`}>
          <div className="container">
            <div className="col">
              <div className={`${styles.footer__inner} row`}>
                <div className="col-6 col-md-6 col-sm-3">
                  <div className={styles.footer__info}>
                    <h2 className="font-h2 color--primary">Получите консультацию</h2>
                    <p className="font-t-l color--secondary">Оставьте заявку, и&nbsp;юрист свяжется с&nbsp;вами, чтобы оценить вашу ситуацию и&nbsp;предложить решение</p>
                    <div className={`${styles.footer__contact} sp-t-mint`}>
                      <p className="font-t-l f-w-bold color--primary">Контакты:</p>

                      <div className={`${styles.footer__contactItem} sp-t-darkpurple`}>
                        <Icon name="phone" stroke="var(--color-text-brand)" />
                        <a className="font-t-l" href="tel:+79990000000">
                          +7 (999) 000-00-00
                        </a>
                      </div>

                      <div className={`${styles.footer__contactItem} sp-t-darkpurple`}>
                        <Icon name="globe" stroke="var(--color-text-brand)" />
                        <a className="font-t-l" href="mailto:info@bankrotstvo-ryazan.ru">
                          info@bankrotstvo-ryazan.ru
                        </a>
                      </div>

                      <div className={`${styles.footer__contactItem} sp-t-darkpurple`}>
                        <Icon name="mapPin" stroke="var(--color-text-brand)" />
                        <p className="font-t-l">г. Рязань, ул. Ленина, д. 10</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <a className="font-t-s color--secondary sp-b-darkpurple" href="#">
                          Политика конфиденциальности
                        </a>
                      </div>
                      <div>
                        <a className="font-t-s color--secondary" href="#">
                          Правила cookies
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-sm-3">
                  <LeadForm service="Банкротство физических лиц" formId="lead-form" blockId="footer" submitLabel="Оставить заявку" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
