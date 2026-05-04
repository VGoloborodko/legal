import styles from './Navbar.module.scss';
import ThemeToggle from '../theme-toggle/ThemeToggle';

export default function Navbar() {
  return (
    <header className={styles['navbar']}>
      <div className={`${styles['navbar__wrapper']} bg--surface radius--xl`}>
        <div className="container">
          <div className="col">
            <div className={styles['navbar__inner']}>
              <div className={styles['navbar__brand']}>
                <a href="/" className={`${styles['navbar__logo']} font-s-s color--secondary`}>
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
                    <a href="#" className={`${styles['navbar__link']} font-t-s f-w-bold color--secondary`}>
                      Услуги
                    </a>
                  </li>
                </ul>
              </nav>

              <div className={styles['navbar__actions']}>
                <ThemeToggle />
                <div className="font-t-s f-w-bold color--secondary">Кнопка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
