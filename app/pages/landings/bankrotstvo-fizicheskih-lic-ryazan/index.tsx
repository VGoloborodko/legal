import Hero from "../../../components/sections/hero/Hero";
import Button from "../../../components/ui/button/Button";
import heroBg from "../../../assets/images/hero/main_cover_100526.avif";

export default function BankrotstvoFizicheskihLicRyazanPage() {
  return (
    <main>
      <Hero
        backgroundImage={heroBg}
        heroTag={<>Надежная защита от&nbsp;кредитов</>}
        icon={{
          name: "shield",
          stroke: "var(--color-text-brand)",
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
                name: "arrowUpRight",
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
