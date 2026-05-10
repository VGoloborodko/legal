import Hero from '../../components/sections/hero/Hero';
import Button from '../../components/ui/button/Button';
import Advantages from '../../components/sections/advantages/Advantages';

import heroBg from '../../assets/images/hero/main_cover_100526.jpg';

export default function Home() {
  return (
    <>
      <main>
        <Hero
          backgroundImage={heroBg}
          heroTitle={'Банкротство физических лиц в\u00A0Рязани'}
          heroSubTitle={'Поможем пройти процедуру банкротства и\u00A0законно списать долги с\u00A0сопровождением юриста'}
          actions={
            <>
              <Button size="lg" icon fullWidthMobile>
                Получить консультацию
              </Button>
              <Button size="lg" fullWidthMobile variant="dark">
                Заказать звонок
              </Button>
            </>
          }
        />
        <Advantages />
      </main>
    </>
  );
}
