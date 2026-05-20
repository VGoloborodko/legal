import styles from './page.module.scss';
import Hero from '../../../components/sections/hero/Hero';
import PromoSection from '../../../components/sections/promoSection/PromoSection';
import Button from '../../../components/ui/button/Button';
import Icon from '../../../components/ui/icon/Icon';
import heroBg from '../../../assets/images/hero/main_cover_100526.avif';
import promoImage from '../../../assets/images/bankrotstvo-fizicheskih-lic-ryazan/promo_sections_200526.avif';
import promoImagePrice from '../../../assets/images/bankrotstvo-fizicheskih-lic-ryazan/promo_sections_200526_2.avif';

export function meta() {
  return [
    { title: 'Банкротство физических лиц в Рязани — VERUM LAW' },
    {
      name: 'description',
      content: 'Банкротство физических лиц в Рязани с сопровождением юриста. Поможем пройти процедуру банкротства и законно списать долги. Консультация VERUM LAW.',
    },
    { name: 'robots', content: 'index, follow' },
    {
      tagName: 'link',
      rel: 'canonical',
      href: 'https://verum-law.ru/bankrotstvo-fizicheskih-lic-ryazan',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Банкротство физических лиц в Рязани — VERUM LAW' },
    {
      property: 'og:description',
      content: 'Поможем пройти процедуру банкротства и законно списать долги с сопровождением юриста.',
    },
    {
      property: 'og:url',
      content: 'https://verum-law.ru/bankrotstvo-fizicheskih-lic-ryazan',
    },
  ];
}

export default function BankrotstvoFizicheskihLicRyazanPage() {
  return (
    <main>
      <Hero
        backgroundImage={heroBg}
        heroTag={<>Надежная защита от&nbsp;кредитов</>}
        icon={{
          name: 'shield',
          stroke: 'var(--color-text-brand)',
        }}
        heroTitle={
          <>
            Банкротство <span className="color--secondary">физических лиц</span> в&nbsp;Рязани
          </>
        }
        heroSubTitle={<>Поможем пройти процедуру банкротства и&nbsp;законно списать долги с&nbsp;сопровождением юриста</>}
        actions={
          <>
            <Button
              size="lg"
              icon={{
                name: 'arrowUpRight',
              }}
              fullWidthMobile
            >
              Получить консультацию
            </Button>
            <Button size="lg" fullWidthMobile variant="dark">
              Заказать звонок
            </Button>
          </>
        }
      />

      <PromoSection
        sectionClassName="sp-t-pink"
        // wrapperClassName="sp-v-green"
        background="var(--color-bg-primary)"
        image={{
          src: promoImage,
          alt: 'Юридическая консультация по банкротству физических лиц',
        }}
        bottom={
          <>
            <div className="row sp-t-purple">
              <div className="col">
                <h3 className="font-s-m color--primary f-w-bold">Банкротство подойдёт вам, если:</h3>
              </div>
            </div>
            <div className="row sp-t-mint">
              <div className="col-6 col-md-6 col-sm-3">
                <div className={styles.bottomNote}>
                  <div className={`${styles.bottomNote__icon} bg--surface radius--m`}>
                    <Icon name="chart" size={24} stroke="var(--color-text-error)" />
                  </div>
                  <div className={styles.bottomNote__content}>
                    <p className="font-t-l color--primary f-w-bold">Долги растут, а платить становится всё сложнее</p>
                    <p className="font-t-l color--secondary sp-t-grey">Проценты и штрафы увеличивают сумму задолженности</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-6 col-sm-3">
                <div className={styles.bottomNote}>
                  <div className={`${styles.bottomNote__icon} bg--surface radius--m`}>
                    <Icon name="info" size={24} stroke="var(--color-text-error)" fill="var(--color-text-error)" />
                  </div>
                  <div className={styles.bottomNote__content}>
                    <p className="font-t-l color--primary f-w-bold">Приходится брать новые кредиты, чтобы закрыть старые</p>
                    <p className="font-t-l color--secondary sp-t-grey">Долговая нагрузка только увеличивается</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-6 col-sm-3">
                <div className={styles.bottomNote}>
                  <div className={`${styles.bottomNote__icon} bg--surface radius--m`}>
                    <Icon name="phoneOff" size={24} stroke="var(--color-text-error)" fill="var(--color-text-error)" />
                  </div>
                  <div className={styles.bottomNote__content}>
                    <p className="font-t-l color--primary f-w-bold">Есть просрочки и давление со стороны банков или коллекторов</p>
                    <p className="font-t-l color--secondary sp-t-grey">Постоянные звонки, требования и угрозы</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-6 col-sm-3">
                <div className={styles.bottomNote}>
                  <div className={`${styles.bottomNote__icon} bg--surface radius--m`}>
                    <Icon name="wallet" size={24} stroke="var(--color-text-error)" />
                  </div>
                  <div className={styles.bottomNote__content}>
                    <p className="font-t-l color--primary f-w-bold">Дохода не хватает на обязательные платежи</p>
                    <p className="font-t-l color--secondary sp-t-grey">Нет возможности погашать задолженность даже частично</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      >
        <h2 className="font-h2 color--secondary">В каких случаях подходит банкротство физического лица</h2>

        <p className="font-t-m color--secondary sp-t-mint">
          Процедура банкротства физических лиц подходит, если вы не можете выполнять свои финансовые обязательства. Это законный способ списать долги и избавиться от давления со стороны кредиторов
        </p>

        <div className="sp-t-mint">
          <Button size="lg" icon={{ name: 'arrowUpRight' }} fullWidthMobile variant="dark">
            Проверить ситуацию
          </Button>
        </div>
      </PromoSection>

      <PromoSection
        sectionClassName="sp-t-pink"
        wrapperClassName="sp-v-green"
        background="var(--color-bg-surface)"
        imagePosition="right"
        image={{
          src: promoImagePrice,
          alt: 'Стоимость банкротства физических лиц',
        }}
      >
        <h2 className="font-h2 color--secondary">Сколько стоит банкротство физических лиц в Рязани</h2>
        <p className="font-h2 color--brand">от 80 000 ₽</p>

        <p className="font-t-m color--secondary sp-t-mint">
          Наши юристы по банкротству в Рязани сопровождают клиентов на всех этапах процедуры – от консультации до полного списания долгов. Мы берём на себя все юридические вопросы и помогаем пройти процесс без лишних рисков
        </p>

        <ul className="rt-ordered-list sp-t-mint">
          <li className="font-t-m color--secondary">Возможна рассрочка</li>
          <li className="font-t-m color--secondary sp-t-darkpurple">Без скрытых платежей</li>
        </ul>

        <div className="sp-t-mint">
          <Button size="lg" icon={{ name: 'arrowUpRight' }} fullWidthMobile variant="dark">
            Разобрать вашу ситуацию
          </Button>
        </div>
      </PromoSection>
    </main>
  );
}
