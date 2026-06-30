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

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
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
