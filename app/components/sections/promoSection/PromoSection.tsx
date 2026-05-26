import { useRef } from 'react';
import type { ReactNode } from 'react';
import styles from './PromoSection.module.scss';
import { useSyncPromoImageHeight } from './useSyncPromoImageHeight';

type PromoSectionProps = {
  id?: string;
  background?: string;
  sectionClassName?: string;
  wrapperClassName?: string;
  image?: {
    src: string;
    alt: string;
  };
  imagePosition?: 'left' | 'right';
  children: ReactNode;
  bottom?: ReactNode;
};

export default function PromoSection({ id, background, sectionClassName, wrapperClassName, image, imagePosition = 'left', children, bottom }: PromoSectionProps) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useSyncPromoImageHeight({
    imageRef,
    contentRef,
    desktopMin: 400,
    desktopMax: 520,
    mobileHeight: 220,
    mobileBreakpoint: 768,
  });

  const imageBlock = (
    <div className="col-6 col-md-6 col-sm-3">
      <div ref={imageRef} className={`${styles.promoSection__image} ${!image ? styles.promoSection__imagePlaceholder : ''} radius--xl`}>
        {image ? <img src={image.src} alt={image.alt} /> : null}
      </div>
    </div>
  );

  const contentBlock = (
    <div className="col-6 col-md-6 col-sm-3">
      <div ref={contentRef} className={styles.promoSection__content}>
        {children}
      </div>
    </div>
  );

  return (
    <section id={id} className={`${styles.promoSection} ${sectionClassName ?? ''}`}>
      <div className="ears">
        <div className={`${styles.promoSection__wrapper} radius--xxl ${wrapperClassName ?? ''}`} style={background ? { background } : undefined}>
          <div className="container">
            <div className="col">
              <div className="row">
                {imagePosition === 'left' ? (
                  <>
                    {imageBlock}
                    {contentBlock}
                  </>
                ) : (
                  <>
                    {contentBlock}
                    {imageBlock}
                  </>
                )}
              </div>

              {bottom}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
