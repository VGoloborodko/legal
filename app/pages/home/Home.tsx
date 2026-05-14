import Hero from '../../components/sections/hero/Hero';
import Button from '../../components/ui/button/Button';
import heroBg from '../../assets/images/hero/main_cover_050526.jpg';
import Advantages from '../../components/sections/advantages/Advantages';

export default function Home() {
  return (
    <>
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
