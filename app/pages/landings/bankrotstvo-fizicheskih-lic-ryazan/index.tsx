import { useState } from 'react';
import styles from './page.module.scss';
import Navbar, { type NavbarLink } from '../../../components/layout/navbar/Navbar';
import Footer from '../../../components/layout/footer/Footer';
import Hero from '../../../components/sections/hero/Hero';
import PromoSection from '../../../components/sections/promoSection/PromoSection';
// import LeadForm from '../../../components/forms/lead-form/LeadForm';
import Button from '../../../components/ui/button/Button';
import Icon from '../../../components/ui/icon/Icon';

import heroBg from '../../../assets/images/hero/main_cover_100526.avif';
import promoImage from '../../../assets/images/bankrotstvo-fizicheskih-lic-ryazan/promo_sections_200526.avif';
import promoImagePrice from '../../../assets/images/bankrotstvo-fizicheskih-lic-ryazan/promo_sections_200526_2.avif';
import whyusPerson from '../../../assets/images/bankrotstvo-fizicheskih-lic-ryazan/whyus_image_200526.avif';
import whyusPerson2 from '../../../assets/images/bankrotstvo-fizicheskih-lic-ryazan/whyus_image_200526_2.avif';

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

const pageLinks: NavbarLink[] = [
  { label: 'Stylekit', href: '/stylekit' },
  { label: 'Кому подходит', href: '#fits' },
  { label: 'Шаги', href: '#steps' },
  { label: 'Стоимость', href: '#price' },
  { label: 'Кейсы', href: '#cases' },
];

export default function BankrotstvoFizicheskihLicRyazanPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Navbar links={pageLinks} />
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
          id="fits"
          sectionClassName="sp-t-pink"
          // wrapperClassName="sp-v-green"
          rowClassName="md-wrap-reverce"
          background="var(--color-bg-primary)"
          image={{
            src: promoImage,
            alt: 'Юридическая консультация по банкротству физических лиц',
          }}
          bottom={
            <>
              <div className="row sp-t-purple">
                <div className="col">
                  <h3 className="font-h4 color--primary f-w-bold">Банкротство подойдёт вам, если:</h3>
                </div>
              </div>
              <div className="row sp-t-mint">
                <div className="col-6 col-md-6 col-sm-3">
                  <div className={styles.bottomNote}>
                    <div className="icon-wrapper bg--surface stroke--primary radius--m">
                      <Icon name="chart" size={24} stroke="var(--color-text-error)" />
                    </div>
                    <div>
                      <p className="font-t-l color--primary f-w-bold">Долги растут, а&nbsp;платить становится всё сложнее</p>
                      <p className="font-t-l color--secondary sp-t-grey">Проценты и&nbsp;штрафы увеличивают сумму задолженности</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-6 col-sm-3">
                  <div className={styles.bottomNote}>
                    <div className="icon-wrapper bg--surface stroke--primary radius--m">
                      <Icon name="info" size={24} stroke="var(--color-text-error)" fill="var(--color-text-error)" />
                    </div>
                    <div>
                      <p className="font-t-l color--primary f-w-bold">Приходится брать новые кредиты, чтобы закрыть старые</p>
                      <p className="font-t-l color--secondary sp-t-grey">Долговая нагрузка только увеличивается</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-6 col-sm-3">
                  <div className={styles.bottomNote}>
                    <div className="icon-wrapper bg--surface stroke--primary radius--m">
                      <Icon name="phoneOff" size={24} stroke="var(--color-text-error)" fill="var(--color-text-error)" />
                    </div>
                    <div>
                      <p className="font-t-l color--primary f-w-bold">Есть просрочки и&nbsp;давление со&nbsp;стороны банков или коллекторов</p>
                      <p className="font-t-l color--secondary sp-t-grey">Постоянные звонки, требования и&nbsp;угрозы</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-6 col-sm-3">
                  <div className={styles.bottomNote}>
                    <div className="icon-wrapper bg--surface stroke--primary radius--m">
                      <Icon name="wallet" size={24} stroke="var(--color-text-error)" />
                    </div>
                    <div>
                      <p className="font-t-l color--primary f-w-bold">Дохода не&nbsp;хватает на&nbsp;обязательные платежи</p>
                      <p className="font-t-l color--secondary sp-t-grey">Нет возможности погашать задолженность даже частично</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        >
          <h2 className="font-h2 color--primary">
            В&nbsp;каких случаях <span className="color--secondary f-w-regular">подходит банкротство физического лица</span>
          </h2>

          <p className="font-t-m color--secondary sp-t-mint">
            Процедура банкротства физических лиц подходит, если вы&nbsp;не&nbsp;можете выполнять свои финансовые обязательства. Это законный способ списать долги и&nbsp;избавиться от&nbsp;давления со&nbsp;стороны кредиторов
          </p>

          <div className="sp-t-mint">
            <Button size="lg" icon={{ name: 'arrowUpRight' }} fullWidthMobile variant="dark">
              Проверить ситуацию
            </Button>
          </div>
        </PromoSection>

        <section id="steps" className={`${styles.steps} sp-t-wine`}>
          <div className="ears">
            <div className={styles.steps__wrapper}>
              <div className="container">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <h2 className="font-h2 color--primary sp-b-purple">
                        Как проходит процедура банкротства <span className="color--secondary f-w-regular">физических лиц</span>
                      </h2>
                    </div>
                  </div>
                  <div className={`row ${styles.steps__grid}`}>
                    <div className="col-4 col-md-6 col-sm-3">
                      <div className={`${styles.steps__item} bg--surface radius--xl`}>
                        <div className="flex-space-between sp-b-purple">
                          <p className="font-h3">Шаг 1</p>
                          <div className="icon-wrapper stroke--primary radius--m">
                            <Icon name="info" size={24} stroke="var(--color-text-error)" fill="var(--color-text-error)" />
                          </div>
                        </div>
                        <h3 className="font-s f-w-bold color--error sp-b-lightblue">Консультация и&nbsp;анализ ситуации</h3>
                        <p className="font-t-m">&mdash;&nbsp;Обсуждаем вашу ситуацию онлайн или в&nbsp;офисе</p>
                        <p className="font-t-m">&mdash;&nbsp;Проверяем, подходит&nbsp;ли вам процедура банкротства</p>
                        <p className="font-t-m">&mdash;&nbsp;Отвечаем на&nbsp;все вопросы</p>
                      </div>
                    </div>

                    <div className="col-4 col-md-6 col-sm-3">
                      <div className={`${styles.steps__item} bg--surface radius--xl`}>
                        <div className="flex-space-between sp-b-purple">
                          <p className="font-h3">Шаг 2</p>
                          <div className="icon-wrapper stroke--primary radius--m">
                            <Icon name="move" size={24} stroke="var(--color-text-primary)" />
                          </div>
                        </div>
                        <h3 className="font-s f-w-bold color--primary sp-b-lightblue">Подготовка документов и&nbsp;подача в&nbsp;суд</h3>
                        <p className="font-t-m">&mdash;&nbsp;Заключаем договор</p>
                        <p className="font-t-m">&mdash;&nbsp;Собираем и&nbsp;оформляем документы</p>
                        <p className="font-t-m">&mdash;&nbsp;Подаём заявление о&nbsp;банкротстве</p>
                      </div>
                    </div>

                    <div className="col-4 col-md-6 col-sm-3">
                      <div className={`${styles.steps__item} bg--surface radius--xl`}>
                        <div className="flex-space-between sp-b-purple">
                          <p className="font-h3">Шаг 3</p>
                          <div className="icon-wrapper stroke--primary radius--m">
                            <Icon name="move" size={24} stroke="var(--color-text-primary)" />
                          </div>
                        </div>
                        <h3 className="font-s f-w-bold color--primary sp-b-lightblue">Рассмотрение дела в&nbsp;суде</h3>
                        <p className="font-t-m">&mdash;&nbsp;Представляем ваши интересы в&nbsp;суде</p>
                        <p className="font-t-m">&mdash;&nbsp;Взаимодействуем с&nbsp;кредиторами</p>
                        <p className="font-t-m">&mdash;&nbsp;Контролируем ход дела</p>
                      </div>
                    </div>

                    <div className="col-6 col-md-6 col-sm-3">
                      <div className={`${styles.steps__item} bg--surface radius--xl`}>
                        <div className="flex-space-between sp-b-purple">
                          <p className="font-h3">Шаг 4</p>
                          <div className="icon-wrapper stroke--primary radius--m">
                            <Icon name="move" size={24} stroke="var(--color-text-primary)" />
                          </div>
                        </div>
                        <h3 className="font-s f-w-bold color--primary sp-b-lightblue">Признание банкротом и&nbsp;сопровождение</h3>
                        <p className="font-t-m">&mdash;&nbsp;Суд признаёт вас банкротом</p>
                        <p className="font-t-m">&mdash;&nbsp;Мы&nbsp;берём на&nbsp;себя общение с&nbsp;коллекторами</p>
                        <p className="font-t-m">&mdash;&nbsp;Сопровождаем процедуру до&nbsp;завершения</p>
                      </div>
                    </div>

                    <div className="col-6 col-md-6 col-sm-3">
                      <div className={`${styles.steps__item} bg--surface radius--xl`}>
                        <div className="flex-space-between sp-b-purple">
                          <p className="font-h3">Шаг 5</p>
                          <div className="icon-wrapper bg--brand stroke--primary radius--m">
                            <Icon name="check" size={24} stroke="var(--color-text-white)" />
                          </div>
                        </div>
                        <h3 className="font-s f-w-bold color--brand sp-b-lightblue">Списание долгов и&nbsp;новый этап жизни</h3>
                        <p className="font-t-m">&mdash;&nbsp;Суд принимает решение о&nbsp;списании долгов</p>
                        <p className="font-t-m">&mdash;&nbsp;Вы&nbsp;освобождаетесь от&nbsp;обязательств</p>
                        <p className="font-t-m">&mdash;&nbsp;Начинаете финансовую жизнь без долгов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PromoSection
          id="price"
          sectionClassName="sp-t-pink"
          wrapperClassName="sp-v-green"
          background="var(--color-bg-surface)"
          imagePosition="right"
          image={{
            src: promoImagePrice,
            alt: 'Стоимость банкротства физических лиц',
          }}
        >
          <h2 className="font-h2 color--primary">
            Сколько стоит банкротство <span className="color--secondary f-w-regular">физических лиц в&nbsp;Рязани</span>
          </h2>
          <p className="font-h2 color--brand">от&nbsp;80&nbsp;000&nbsp;₽</p>

          <p className="font-t-m color--secondary sp-t-mint">
            Наши юристы по&nbsp;банкротству в&nbsp;Рязани сопровождают клиентов на&nbsp;всех этапах процедуры&nbsp;&mdash; от&nbsp;консультации до&nbsp;полного списания долгов. Мы&nbsp;берём на&nbsp;себя все юридические вопросы
            и&nbsp;помогаем пройти процесс без лишних рисков
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

        <section className={`${styles.whyus} sp-t-wine`}>
          <div className="ears">
            <div className={styles.whyus__wrapper}>
              <div className="container">
                <div className="col">
                  <div className="row md-wrap-reverce">
                    <div className="col-6 col-md-6 col-sm-3">
                      <div className={styles.whyus__media}>
                        <div className={styles.whyus__person}>
                          <div className={`${styles.whyus__image} radius--xl`}>
                            <img src={whyusPerson} alt="Юридический сотрудник" />
                          </div>
                          <p className="font-t-l color--primary f-w-bold text-align-center sp-t-purple">Дмитрий Соколов</p>
                          <p className="font-t-m text-align-center sp-t-lightblue">Руководитель практики</p>
                        </div>
                        <div className={styles.whyus__person}>
                          <div className={`${styles.whyus__image} radius--xl`}>
                            <img src={whyusPerson2} alt="Юридический сотрудник" />
                          </div>
                          <p className="font-t-l color--primary f-w-bold text-align-center sp-t-purple">Мария Лебедева</p>
                          <p className="font-t-m text-align-center sp-t-lightblue">Ведущий юрист</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-6 col-sm-3">
                      <div className={styles.whyus__content}>
                        <h2 className="font-h2 color--primary">Почему стоит обратиться к&nbsp;юристу</h2>
                        <p className="font-t-l sp-t-red">
                          Наши юристы по&nbsp;банкротству в&nbsp;Рязани сопровождают клиентов на&nbsp;всех этапах процедуры&nbsp;&mdash; от&nbsp;консультации до&nbsp;полного списания долгов. Мы&nbsp;берём на&nbsp;себя все юридические
                          вопросы и&nbsp;помогаем пройти процесс спокойно и&nbsp;без лишних рисков
                        </p>
                        <ul className="rt-ordered-list sp-t-red">
                          <li className="font-t-l color--secondary">Опыт ведения дел о&nbsp;банкротстве физических лиц</li>
                          <li className="font-t-l color--secondary sp-t-lightblue">Сопровождение &laquo;под ключ&raquo;</li>
                          <li className="font-t-l color--secondary sp-t-lightblue">Прозрачные условия без скрытых платежей</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className={`${styles.clients} sp-t-wine`}>
          <div className="ears">
            <div className={styles.clients__wrapper}>
              <div className="container">
                <div className="col">
                  <div className={`row ${styles.clients__top} sp-b-purple`}>
                    <div className="col-7 col-md-4 col-sm-3">
                      <h2 className="font-h2 f-w-regular">
                        <span className="color--primary f-w-bold">Реальные результаты</span> наших клиентов
                      </h2>
                    </div>
                    <div className="col-5 col-md-2 col-sm-3">
                      <div className={styles.clients__btn}>
                        <Button size="lg" fullWidthMobile variant="dark">
                          Все кейсы
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4 col-md-6 col-sm-3">
                      <div className={`${styles.clients__item} bg--main radius--xl stroke--secondary`}>
                        <div>
                          <div className="flex-space-between">
                            <div className="icon-wrapper bg--surface stroke--primary radius--m">
                              <Icon name="wallet" size={24} stroke="var(--color-text-primary)" />
                            </div>
                            <p className="font-h3 color--tertiary">01</p>
                          </div>

                          <div className="sp-t-purple">
                            <p className="font-s color--primary f-w-bold">Списали долг 1,2 млн ₽ за 8 месяцев</p>
                            <p className="font-t-m sp-t-lightblue">Клиент не справлялся с кредитной нагрузкой – помогли пройти процедуру банкротства и полностью списали долги</p>
                          </div>
                        </div>

                        <div className="sp-t-lightblue">
                          <div className="stroke--tertiary" style={{ borderTop: 0 }}></div>
                          <div className="flex-space-between sp-t-mint">
                            <p className="font-t-m">Изучить дело</p>
                            <Button
                              variant="brand"
                              size="lg"
                              shape="round"
                              ariaLabel="Перейти к следующему блоку"
                              icon={{
                                name: 'arrowUpRight',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-4 col-md-6 col-sm-3">
                      <div className={`${styles.clients__item} bg--main radius--xl stroke--secondary`}>
                        <div>
                          <div className="flex-space-between">
                            <div className="icon-wrapper bg--surface stroke--primary radius--m">
                              <Icon name="wallet" size={24} stroke="var(--color-text-primary)" />
                            </div>
                            <p className="font-h3 color--tertiary">02</p>
                          </div>

                          <div className="sp-t-purple">
                            <p className="font-s color--primary f-w-bold">Списали 780 000 ₽ по микрозаймам за 7 месяцев</p>
                            <p className="font-t-m sp-t-lightblue">Клиент столкнулся с давлением коллекторов – остановили взыскания и довели дело до полного списания долгов</p>
                          </div>
                        </div>

                        <div className="sp-t-lightblue">
                          <div className="stroke--tertiary" style={{ borderTop: 0 }}></div>
                          <div className="flex-space-between sp-t-mint">
                            <p className="font-t-m">Изучить дело</p>
                            <Button
                              variant="brand"
                              size="lg"
                              shape="round"
                              ariaLabel="Перейти к следующему блоку"
                              icon={{
                                name: 'arrowUpRight',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-4 col-md-6 col-sm-3">
                      <div className={`${styles.clients__item} bg--main radius--xl stroke--secondary`}>
                        <div>
                          <div className="flex-space-between">
                            <div className="icon-wrapper bg--surface stroke--primary radius--m">
                              <Icon name="wallet" size={24} stroke="var(--color-text-primary)" />
                            </div>
                            <p className="font-h3 color--tertiary">03</p>
                          </div>

                          <div className="sp-t-purple">
                            <p className="font-s color--primary f-w-bold">Списали долг 1 млн ₽ за 9 месяцев</p>
                            <p className="font-t-m sp-t-lightblue">Было открыто исполнительное производство – прекратили взыскания и полностью освободили клиента от долгов</p>
                          </div>
                        </div>

                        <div className="sp-t-lightblue">
                          <div className="stroke--tertiary" style={{ borderTop: 0 }}></div>
                          <div className="flex-space-between sp-t-mint">
                            <p className="font-t-m">Изучить дело</p>
                            <Button
                              variant="brand"
                              size="lg"
                              shape="round"
                              ariaLabel="Перейти к следующему блоку"
                              icon={{
                                name: 'arrowUpRight',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className={`${styles.faq} sp-t-wine`}>
          <div className="ears">
            <div className={styles.faq__wrapper}>
              <div className="container">
                <div className="col">
                  <div className={`row ${styles.faq__inner}`}>
                    <div className="col-6 col-lg-12 col-md-6 col-sm-3">
                      <div className={styles.faq__list}>
                        <div className={`${styles.faq__item} ${openIndex === 0 ? styles['faq__item--active'] : ''}`}>
                          <button type="button" className={styles.faq__head} onClick={() => handleToggle(0)} aria-expanded={openIndex === 0} aria-controls="faq-answer-0">
                            <span className={`${styles.faq__question} font-h4 color--primary`}>Сколько длится процедура банкротства физического лица?</span>

                            <span className={styles.faq__icon}>{openIndex === 0 ? '−' : '+'}</span>
                          </button>

                          <div id="faq-answer-0" className={styles.faq__body}>
                            <div className={styles.faq__bodyInner}>
                              <p className={`${styles.faq__answer} font-t-m`}>В среднем процедура банкротства физического лица занимает от 6 до 12 месяцев. Срок зависит от сложности дела, количества кредиторов и наличия имущества.</p>
                            </div>
                          </div>
                        </div>

                        <div className={`${styles.faq__item} ${openIndex === 1 ? styles['faq__item--active'] : ''}`}>
                          <button type="button" className={styles.faq__head} onClick={() => handleToggle(1)} aria-expanded={openIndex === 1} aria-controls="faq-answer-1">
                            <span className={`${styles.faq__question} font-h4 color--primary`}>Можно ли&nbsp;списать все долги через банкротство?</span>

                            <span className={styles.faq__icon}>{openIndex === 1 ? '−' : '+'}</span>
                          </button>

                          <div id="faq-answer-1" className={styles.faq__body}>
                            <div className={styles.faq__bodyInner}>
                              <p className={`${styles.faq__answer} font-t-m`}>В большинстве случаев возможно полное списание долгов по&nbsp;кредитам, займам и&nbsp;другим обязательствам, если процедура банкротства проведена корректно.</p>
                            </div>
                          </div>
                        </div>

                        <div className={`${styles.faq__item} ${openIndex === 2 ? styles['faq__item--active'] : ''}`}>
                          <button type="button" className={styles.faq__head} onClick={() => handleToggle(2)} aria-expanded={openIndex === 2} aria-controls="faq-answer-2">
                            <span className={`${styles.faq__question} font-h4 color--primary`}>Какие последствия банкротства физического лица?</span>

                            <span className={styles.faq__icon}>{openIndex === 2 ? '−' : '+'}</span>
                          </button>

                          <div id="faq-answer-1" className={styles.faq__body}>
                            <div className={styles.faq__bodyInner}>
                              <p className={`${styles.faq__answer} font-t-m`}>После процедуры вводятся определённые ограничения (например, при получении новых кредитов), но вы&nbsp;полностью освобождаетесь от&nbsp;долговых обязательств.</p>
                            </div>
                          </div>
                        </div>

                        <div className={`${styles.faq__item} ${openIndex === 3 ? styles['faq__item--active'] : ''}`}>
                          <button type="button" className={styles.faq__head} onClick={() => handleToggle(3)} aria-expanded={openIndex === 3} aria-controls="faq-answer-3">
                            <span className={`${styles.faq__question} font-h4 color--primary`}>Нужен ли юрист по&nbsp;банкротству в&nbsp;Рязани?</span>

                            <span className={styles.faq__icon}>{openIndex === 3 ? '−' : '+'}</span>
                          </button>

                          <div id="faq-answer-1" className={styles.faq__body}>
                            <div className={styles.faq__bodyInner}>
                              <p className={`${styles.faq__answer} font-t-m`}>Юрист по&nbsp;банкротству помогает правильно оформить документы, избежать ошибок и&nbsp;пройти процедуру быстрее и безопаснее.</p>
                            </div>
                          </div>
                        </div>

                        <div className={`${styles.faq__item} ${openIndex === 4 ? styles['faq__item--active'] : ''}`}>
                          <button type="button" className={styles.faq__head} onClick={() => handleToggle(4)} aria-expanded={openIndex === 4} aria-controls="faq-answer-4">
                            <span className={`${styles.faq__question} font-h4 color--primary`}>Можно ли&nbsp;сохранить имущество при банкротстве?</span>

                            <span className={styles.faq__icon}>{openIndex === 4 ? '−' : '+'}</span>
                          </button>

                          <div id="faq-answer-1" className={styles.faq__body}>
                            <div className={styles.faq__bodyInner}>
                              <p className={`${styles.faq__answer} font-t-m`}>В ряде случаев возможно сохранить часть имущества. Всё зависит от&nbsp;конкретной ситуации – на&nbsp;консультации мы&nbsp;оцениваем риски и&nbsp;варианты.</p>
                            </div>
                          </div>
                        </div>

                        <div className={`${styles.faq__item} ${openIndex === 5 ? styles['faq__item--active'] : ''}`}>
                          <button type="button" className={styles.faq__head} onClick={() => handleToggle(5)} aria-expanded={openIndex === 5} aria-controls="faq-answer-5">
                            <span className={`${styles.faq__question} font-h4 color--primary`}>Когда прекращаются звонки коллекторов?</span>

                            <span className={styles.faq__icon}>{openIndex === 5 ? '−' : '+'}</span>
                          </button>

                          <div id="faq-answer-1" className={styles.faq__body}>
                            <div className={styles.faq__bodyInner}>
                              <p className={`${styles.faq__answer} font-t-m`}>После начала процедуры банкротства взаимодействие с&nbsp;кредиторами ограничивается, и&nbsp;давление со&nbsp;стороны коллекторов прекращается.</p>
                            </div>
                          </div>
                        </div>

                        <div className={`${styles.faq__item} ${openIndex === 6 ? styles['faq__item--active'] : ''}`}>
                          <button type="button" className={styles.faq__head} onClick={() => handleToggle(6)} aria-expanded={openIndex === 6} aria-controls="faq-answer-6">
                            <span className={`${styles.faq__question} font-h4 color--primary`}>Сколько стоит банкротство физического лица в&nbsp;Рязани?</span>

                            <span className={styles.faq__icon}>{openIndex === 6 ? '−' : '+'}</span>
                          </button>

                          <div id="faq-answer-1" className={styles.faq__body}>
                            <div className={styles.faq__bodyInner}>
                              <p className={`${styles.faq__answer} font-t-m`}>Стоимость зависит от&nbsp;сложности дела, количества кредиторов и&nbsp;наличия имущества. В среднем цена начинается от&nbsp;XX ₽, возможна рассрочка.</p>
                            </div>
                          </div>
                        </div>

                        <div className={`${styles.faq__item} ${openIndex === 7 ? styles['faq__item--active'] : ''}`}>
                          <button type="button" className={styles.faq__head} onClick={() => handleToggle(7)} aria-expanded={openIndex === 7} aria-controls="faq-answer-7">
                            <span className={`${styles.faq__question} font-h4 color--primary`}>Какая сумма долга нужна для банкротства физического лица?</span>

                            <span className={styles.faq__icon}>{openIndex === 7 ? '−' : '+'}</span>
                          </button>

                          <div id="faq-answer-1" className={styles.faq__body}>
                            <div className={styles.faq__bodyInner}>
                              <p className={`${styles.faq__answer} font-t-m`}>
                                Подать на&nbsp;банкротство можно при наличии задолженности и&nbsp;невозможности её&nbsp;погашения. Точные условия определяются индивидуально – на&nbsp;консультации мы&nbsp;оцениваем вашу ситуацию.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-lg-12 col-md-6 col-sm-3">
                      <div className={styles.faq__fixed}>
                        <p className="font-t-l color--secondary">FAQ</p>
                        <h2 className="font-h2 sp-t-lightblue">
                          <span className="color--primary">Часто задаваемые вопросы</span> о&nbsp;банкротстве физических лиц
                        </h2>
                        <div className="sp-t-purple">
                          <Button variant="dark" size="lg" shape="default" iconPosition="left" onClick={() => console.log('click')}>
                            Задать вопрос
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// Отправить заявку
// curl -X POST "https://yougile.com/api-v2/tasks" \
//   -H "Content-Type: application/json" \
//   -H "Accept: application/json" \
//   -H "Authorization: Bearer ТВОЙ_API_KEY" \
//   -d '{
//     "title": "Тестовая заявка с сайта",
//     "columnId": "20f4ab39-186e-4200-9724-290f13756c20",
//     "description": "Имя: Тест\nТелефон: +7 999 123-45-67\nКомментарий: Проверка интеграции"
//   }'


// Получить список колонок
// curl -X GET "https://yougile.com/api-v2/columns" \
//   -H "Accept: application/json" \
//   -H "Authorization: Bearer ТВОЙ_API_KEY"


// Создай новый API key
// curl -X POST "https://yougile.com/api-v2/auth/keys" \
//   -H "Content-Type: application/json" \
//   -H "Accept: application/json" \
//   -d '{
//     "login": "ТВОЙ_ЛОГИН",
//     "password": "ТВОЙ_ПАРОЛЬ",
//     "companyId": "ТВОЙ_COMPANY_ID"
//   }'