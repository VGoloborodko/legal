'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

type ModalProps = {
  name: string;
  activeModal: string | null;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({ name, activeModal, onClose, children, className = '' }: ModalProps) {
  const isOpen = activeModal === name;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const isMobileOrTablet = window.innerWidth <= 1024;
    const scrollY = window.scrollY;

    document.addEventListener('keydown', handleKeyDown);

    if (isMobileOrTablet) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);

      if (isMobileOrTablet) {
        const savedTop = document.body.style.top;

        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';

        window.scrollTo(0, Math.abs(parseInt(savedTop || '0', 10)));
      }
    };
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modal__viewport}>
        <div className={`${styles.modal__dialog} ${className}`} role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
          <div className="ears">
            <div className={styles.modal__wrapper}>
              <div className="container">
                <div className="col">
                  <div className={`row ${styles.faq__inner}`}>{children}</div>
                </div>
              </div>
            </div>
          </div>

          <button type="button" className={styles.modal__close} aria-label="Закрыть модальное окно" onClick={onClose}>
            <span />
            <span />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
