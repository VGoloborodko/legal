import Hero from '../../components/sections/hero/Hero';
import Button from '../../components/ui/button/Button';
import heroBg from '../../assets/images/hero/main_cover_050526.avif';
import Advantages from '../../components/sections/advantages/Advantages';

export function meta() {
  return [
    { title: 'Юридические услуги в Рязани — VERUM LAW' },
    {
      name: 'description',
      content: 'Юридические услуги в Рязани: споры с банками, недвижимость, защита прав потребителей, сопровождение дел в суде. Консультация юриста VERUM LAW.',
    },
    { name: 'robots', content: 'index, follow' },
    { tagName: 'link', rel: 'canonical', href: 'https://verum-law.ru/' },
    { tagName: 'link', rel: 'preload', as: 'image', href: heroBg },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Юридические услуги в Рязани — VERUM LAW' },
    {
      property: 'og:description',
      content: 'Помогаем решать споры с банками, оформлять недвижимость, защищать права потребителей и сопровождать дела в суде.',
    },
    { property: 'og:url', content: 'https://verum-law.ru/' },
    // Нужна картинка для соцсетей
  ];
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'VERUM LAW',
  url: 'https://verum-law.ru/',
  areaServed: 'Рязань',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Рязань',
    addressCountry: 'RU',
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      <main>
        <Hero
          backgroundImage={heroBg}
          heroTag={<>Никаких скрытых платежей и&nbsp;подводных камней</>}
          icon={{
            name: 'sheet',
            stroke: 'var(--color-text-brand)',
          }}
          heroTitle={
            <>
              Юридические <span className="color--secondary">услуги</span> в&nbsp;Рязани
            </>
          }
          heroSubTitle={<>Помогаем решать споры с&nbsp;банками, оформлять недвижимость, защищать права потребителей и&nbsp;сопровождать дела в&nbsp;суде</>}
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
                Изучить практику
              </Button>
            </>
          }
        />
        <Advantages />
      </main>
    </>
  );
}
