import Hero from "../../../components/sections/hero/Hero";
import Button from "../../../components/ui/button/Button";
import heroBg from "../../../assets/images/hero/main_cover_100526.jpg";

export default function BankrotstvoFizicheskihLicRyazanPage() {
  return (
    <main>
      <Hero
        backgroundImage={heroBg}
        heroTitle={
          <>
            Банкротство <span className="color--secondary">физических лиц</span> в&nbsp;Рязани
          </>
        }
        heroSubTitle={
          "Поможем пройти процедуру банкротства и\u00A0законно списать долги с\u00A0сопровождением юриста"
        }
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
    </main>
  )
}