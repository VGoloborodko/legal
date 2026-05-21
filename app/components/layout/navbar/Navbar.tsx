import styles from './Navbar.module.scss';
import Button from '../../ui/button/Button';
import ThemeToggle from '../../ui/theme-toggle/ThemeToggle';

export default function Navbar() {
  return (
    <>
      <header className={`${styles['navbar']} sp-t-mint`}>
        <div className="ears">
          <div className={`${styles['navbar__wrapper']} bg--surface radius--xl`}>
            <div className="container">
              <div className="col">
                <div className={styles['navbar__inner']}>
                  <div className={styles['navbar__brand']}>
                    <a href="/" className={`${styles['navbar__logo']} font-s color--secondary`}>
                      VERUM LAW
                    </a>
                  </div>

                  <nav className={styles['navbar__nav']}>
                    <ul className={styles['navbar__list']}>
                      <li className={styles['navbar__item']}>
                        <a href="/stylekit" className={`${styles['navbar__link']} font-t-s f-w-bold color--secondary`}>
                          Stylekit
                        </a>
                      </li>

                      <li className={styles['navbar__item']}>
                        <a href="/bankrotstvo-fizicheskih-lic-ryazan" className={`${styles['navbar__link']} font-t-s f-w-bold color--secondary`}>
                          Банкротство
                        </a>
                      </li>
                    </ul>
                  </nav>

                  <div className={styles['navbar__actions']}>
                    <ThemeToggle />
                    <Button size="lg" icon>
                      Консультация
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={styles['navbar-offset']} />
    </>
  );
}
