import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import Button from '../../ui/button/Button';
import ThemeToggle from '../../ui/theme-toggle/ThemeToggle';

export type NavbarLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: NavbarLink[];
};

export default function Navbar({ links }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header className={`${styles.navbar} sp-t-mint`}>
        <div className="ears">
          <div className={`${styles.navbar__wrapper} bg--surface radius--xl`}>
            <div className="container">
              <div className="col">
                <div className={styles.navbar__inner}>
                  <div className={styles.navbar__brand}>
                    <a
                      href="/"
                      className={`${styles.navbar__logo} font-s color--primary f-w-bold`}
                      aria-label="VERUM LAW — перейти на главную"
                      onClick={closeDrawer}
                    >
                      VERUM <span className="color--brand">LAW</span>
                    </a>
                  </div>

                  <nav
                    className={styles.navbar__nav}
                    aria-label="Основная навигация"
                  >
                    <ul className={styles.navbar__list}>
                      {links.map((link) => (
                        <li key={link.href} className={styles.navbar__item}>
                          <a
                            href={link.href}
                            className={`${styles.navbar__link} font-t-s f-w-bold color--secondary`}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className={styles.navbar__actions}>
                    <ThemeToggle />

                    <div className="md-d-none">
                      <Button size="lg" icon={{ name: 'arrowUpRight' }}>
                        Консультация
                      </Button>
                    </div>

                    <button
                      type="button"
                      className={styles.navbar__menuButton}
                      aria-label={isDrawerOpen ? 'Закрыть меню' : 'Открыть меню'}
                      aria-expanded={isDrawerOpen}
                      aria-controls="navbar-drawer"
                      onClick={openDrawer}
                    >
                      <span className={styles.navbar__menuLine} />
                      <span className={styles.navbar__menuLine} />
                      <span className={styles.navbar__menuLine} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={styles['navbar-offset']} />

      <div
        className={`${styles.navbar__overlay} ${
          isDrawerOpen ? styles['navbar__overlay--open'] : ''
        }`}
        onClick={closeDrawer}
        aria-hidden={!isDrawerOpen}
      >
        <aside
          id="navbar-drawer"
          className={`${styles.navbar__drawer} ${
            isDrawerOpen ? styles['navbar__drawer--open'] : ''
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню"
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.navbar__drawerInner}>
            <div className={styles.navbar__drawerTop}>
              <a
                href="/"
                className={`${styles.navbar__logo} font-s color--primary f-w-bold`}
                aria-label="VERUM LAW — перейти на главную"
                onClick={closeDrawer}
              >
                VERUM <span className="color--brand">LAW</span>
              </a>

              <button
                type="button"
                className={styles.navbar__closeButton}
                aria-label="Закрыть меню"
                onClick={closeDrawer}
              >
                <span className={styles.navbar__closeLine} />
                <span className={styles.navbar__closeLine} />
              </button>
            </div>

            <nav
              className={styles.navbar__drawerNav}
              aria-label="Мобильная навигация"
            >
              <ul className={styles.navbar__drawerList}>
                {links.map((link) => (
                  <li key={link.href} className={styles.navbar__drawerItem}>
                    <a
                      href={link.href}
                      className={`${styles.navbar__drawerLink} font-t-l f-w-bold color--primary`}
                      onClick={closeDrawer}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.navbar__drawerActions}>
              <Button size="lg" icon={{ name: 'arrowUpRight' }} fullWidth>
                Оставить заявку
              </Button>

              <Button size="lg" fullWidth>
                Консультация
              </Button>
            </div>

            <div className={styles.navbar__drawerContacts}>
              <div className={styles.navbar__drawerContactsTitle}>Контакты:</div>

              <div className={styles.navbar__drawerContact}>+7 (999) 000-00-00</div>
              <div className={styles.navbar__drawerContact}>info@bankrotstvo-ryazan.ru</div>
              <div className={styles.navbar__drawerContact}>г. Рязань, ул. Ленина, д. 10</div>
            </div>

            <div className={styles.navbar__drawerBottom}>
              <a
                href="/privacy-policy"
                className={styles.navbar__drawerMetaLink}
                onClick={closeDrawer}
              >
                Политика конфиденциальности
              </a>

              <a
                href="/cookies"
                className={styles.navbar__drawerMetaLink}
                onClick={closeDrawer}
              >
                Правила cookies
              </a>

              <div className={styles.navbar__drawerTheme}>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}