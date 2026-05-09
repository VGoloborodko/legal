import Hero from '../../components/sections/hero/Hero';
import Advantages from '../../components/sections/advantages/Advantages';

import heroBg from '../../assets/images/hero/main_cover_050526.jpg';

export default function Home() {
  return (
    <>
      <main>
        <Hero backgroundImage={heroBg} heroTitle={'Юридические услуги в\u00A0Рязани'} heroSubTitle="Помогаем решать споры с банками, оформлять недвижимость, защищать права потребителей и сопровождать дела в суде" />
        <Advantages />
      </main>
    </>
  );
}
