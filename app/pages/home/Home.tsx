import Hero from '../../components/hero/Hero';
import heroBg from '../../assets/images/hero/main_cover_050526.jpg';
import heroPerson from '../../assets/images/hero/main_cover_mini.jpg';

export default function Home() {
  return (
    <>
      <Hero
      backgroundImage={heroBg}
      heroImage={heroPerson}
    />
    </>
  );
}