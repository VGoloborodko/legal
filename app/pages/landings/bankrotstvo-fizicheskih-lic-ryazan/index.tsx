import Hero from '../../../components/sections/hero/Hero';
import Button from '../../../components/ui/button/Button';
import heroBg from '../../../assets/images/hero/main_cover_100526.avif';

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
    </main>
  );
}
