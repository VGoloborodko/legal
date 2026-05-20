import { useEffect } from 'react';

type UseSyncPromoImageHeightParams = {
  imageRef: React.RefObject<HTMLDivElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  desktopMin?: number;
  desktopMax?: number;
  mobileHeight?: number;
  mobileBreakpoint?: number;
};

export function useSyncPromoImageHeight({ imageRef, contentRef, desktopMin = 400, desktopMax = 520, mobileHeight = 220, mobileBreakpoint = 768 }: UseSyncPromoImageHeightParams) {
  useEffect(() => {
    const imageEl = imageRef.current;
    const contentEl = contentRef.current;

    if (!imageEl || !contentEl) return;

    let frameId = 0;
    let expectedHeight = -1;

    const syncHeight = () => {
      const image = imageRef.current;
      const content = contentRef.current;

      if (!image || !content) return;

      const nextHeight = window.innerWidth < mobileBreakpoint ? mobileHeight : Math.min(desktopMax, Math.max(desktopMin, content.offsetHeight));

      if (nextHeight === expectedHeight) return;

      expectedHeight = nextHeight;
      image.style.height = `${nextHeight}px`;
    };

    const requestSync = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(syncHeight);
    };

    requestSync();

    const observer = new ResizeObserver(() => {
      requestSync();
    });

    observer.observe(contentEl);
    window.addEventListener('resize', requestSync);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('resize', requestSync);
    };
  }, [imageRef, contentRef, desktopMin, desktopMax, mobileHeight, mobileBreakpoint]);
}
