import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './Navbar.module.scss';
import Button from '../../ui/button/Button';
import ThemeToggle from '../../ui/theme-toggle/ThemeToggle';
import Icon from '../../ui/icon/Icon';

export type NavbarLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: NavbarLink[];
};

export default function Navbar({ links }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

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

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let lastScrollY = window.scrollY;

    const showHeader = () => {
      gsap.to(header, {
        yPercent: 0,
        duration: 1,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    const hideHeader = () => {
      gsap.to(header, {
        yPercent: -120,
        duration: 1,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleScroll = () => {
      if (!headerRef.current) return;

      if (isDrawerOpen) {
        showHeader();
        lastScrollY = window.scrollY;
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        showHeader();
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY) {
        hideHeader();
      } else if (currentScrollY < lastScrollY) {
        showHeader();
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header ref={headerRef} className={`${styles.navbar} sp-t-mint`}>
        <div className="ears">
          <div className={`${styles.navbar__wrapper} bg--surface radius--xl`}>
            <div className="container">
              <div className="col">
                <div className={styles.navbar__inner}>
                  <div className={styles.navbar__brand}>
                    <a href="/" className={`${styles.navbar__logo} font-s color--primary f-w-bold`} aria-label="VERUM LAW — перейти на главную" onClick={closeDrawer}>
                      VERUM <span className="color--brand">LAW</span>
                    </a>
                  </div>

                  <nav className={styles.navbar__nav} aria-label="Основная навигация">
                    <ul className={styles.navbar__list}>
                      {links.map((link) => (
                        <li key={link.href} className={styles.navbar__item}>
                          <a href={link.href} className={`${styles.navbar__link} font-t-s f-w-bold color--secondary`}>
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

                    <button type="button" className={styles.navbar__menuButton} aria-label={isDrawerOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={isDrawerOpen} aria-controls="navbar-drawer" onClick={openDrawer}>
                      <Icon name="dash" size={16} stroke="var(--color-text-primary)" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={styles['navbar-offset']} />

      <div className={`${styles.navbar__overlay} ${isDrawerOpen ? styles['navbar__overlay--open'] : ''}`} onClick={closeDrawer} aria-hidden={!isDrawerOpen}>
        <aside id="navbar-drawer" className={`${styles.navbar__drawer} ${isDrawerOpen ? styles['navbar__drawer--open'] : ''}`} role="dialog" aria-modal="true" aria-label="Мобильное меню" onClick={(event) => event.stopPropagation()}>
          <div className={styles.navbar__drawerInner}>
            <div className={styles.navbar__drawerTop}>
              <a href="/" className={`${styles.navbar__logo} font-s color--primary f-w-bold`} aria-label="VERUM LAW — перейти на главную" onClick={closeDrawer}>
                VERUM <span className="color--brand">LAW</span>
              </a>

              <button type="button" className={styles.navbar__closeButton} aria-label="Закрыть меню" onClick={closeDrawer}>
                <span className={styles.navbar__closeLine} />
                <span className={styles.navbar__closeLine} />
              </button>
            </div>

            <nav className={`${styles.navbar__drawerNav} sp-t-mint`} aria-label="Мобильная навигация">
              <ul className={styles.navbar__drawerList}>
                {links.map((link) => (
                  <li key={link.href} className={styles.navbar__drawerItem}>
                    <a href={link.href} className={`${styles.navbar__drawerLink} font-t-m f-w-bold color--secondary`} onClick={closeDrawer}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={`${styles.navbar__buttons} sp-t-burgundy`}>
              <Button
                variant="brand"
                size="md"
                shape="default"
                fullWidthMobile
                icon={{
                  name: 'arrowUpRight',
                }}
                iconPosition="right"
              >
                Оставить заявку
              </Button>

              <Button variant="dark" size="md" shape="default" fullWidthMobile iconPosition="right">
                Консультация
              </Button>
            </div>

            <div className="sp-t-burgundy">
              <div className={`${styles.navbar__contact} sp-v-blue`}>
                <p className="font-t-l f-w-bold color--primary">Контакты:</p>

                <div className={`${styles.navbar__contactItem} sp-t-darkpurple`}>
                  <Icon name="phone" stroke="var(--color-text-brand)" />
                  <a className="font-t-l" href="tel:+79990000000">
                    +7 (999) 000-00-00
                  </a>
                </div>

                <div className={`${styles.navbar__contactItem} sp-t-darkpurple`}>
                  <Icon name="globe" stroke="var(--color-text-brand)" />
                  <a className="font-t-l" href="mailto:info@bankrotstvo-ryazan.ru">
                    info@bankrotstvo-ryazan.ru
                  </a>
                </div>

                <div className={`${styles.navbar__contactItem} sp-t-darkpurple`}>
                  <Icon name="mapPin" stroke="var(--color-text-brand)" />
                  <p className="font-t-l">г. Рязань, ул. Ленина, д. 10</p>
                </div>
              </div>
            </div>

            {/* <div className={styles.navbar__drawerBottom}>
              <a href="/privacy-policy" onClick={closeDrawer}>
                Политика конфиденциальности
              </a>

              <a href="/cookies" onClick={closeDrawer}>
                Правила cookies
              </a>
            </div> */}
          </div>
        </aside>
      </div>
    </>
  );
}
