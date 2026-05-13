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
          heroTitle={
          <>
            Юридические <span className="color--secondary">услуги</span> в&nbsp;Рязани
          </>
        }
          heroSubTitle={'Помогаем решать споры с\u00A0банками, оформлять недвижимость, защищать права потребителей и\u00A0сопровождать дела в\u00A0суде'}
          actions={
            <>
              <Button size="lg" icon fullWidthMobile>
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
