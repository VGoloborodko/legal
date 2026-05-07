import Hero from '../../components/hero/Hero';
import Advantages from '../../components/advantages/Advantages';


import heroBg from '../../assets/images/hero/main_cover_050526.jpg';

export default function Home() {
  return (
    <>
      <Hero
      backgroundImage={heroBg}
      heroTitle="Юридические услуги в&nbsp;Рязани"
      heroSubTitle="Помогаем решать споры с банками, оформлять недвижимость, защищать права потребителей и сопровождать дела в суде"
    />
    <Advantages/>
    </>
  );
}