# Modal

Универсальная модалка для страницы, где может быть несколько окон одновременно по логике, но открыто только одно за раз.

## Что умеет

- Открытие по уникальному имени модалки
- Закрытие по крестику
- Закрытие по клику на overlay
- Закрытие по клавише Escape
- Blur и затемнение заднего фона
- Блокировка скролла body при открытии
- Рендер через portal в document.body

## Важно для SEO

Контент модалки будет лучше читаться роботами, если он:

- рендерится сразу в DOM страницы;
- не подгружается только после клика через fetch/lazy import;
- является частью JSX страницы при первом рендере.

Если контент важен для SEO, лучше:

1. либо держать его прямо на странице;
2. либо рендерить его внутри Modal сразу, а модалкой только скрывать/показывать.

Если контент второстепенный (форма, политика, вспомогательный блок), можно не переживать.

## Где использовать

Сам компонент лежит в:
`components/ui/modal/`

А содержимое каждой модалки лучше писать там, где оно реально используется:

- в page.tsx
- в конкретной section
- в компоненте страницы

То есть Modal — это оболочка, а внутренний контент — локальный.

## Базовое использование

```tsx
'use client';

import { useState } from 'react';
import Modal from '@/components/ui/modal/Modal';

export default function ExamplePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (name: string) => setActiveModal(name);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <button onClick={() => openModal('service-modal')}>Открыть модалку</button>

      <Modal name="service-modal" activeModal={activeModal} onClose={closeModal}>
        <div>Здесь любая ручная верстка модалки</div>
      </Modal>
    </>
  );
}
```

## Несколько модалок на странице

```tsx
<>
  <button onClick={() => openModal('first-modal')}>Первая</button>
  <button onClick={() => openModal('second-modal')}>Вторая</button>

  <Modal name="first-modal" activeModal={activeModal} onClose={closeModal}>
    <div>Контент первой модалки</div>
  </Modal>

  <Modal name="second-modal" activeModal={activeModal} onClose={closeModal}>
    <div>Контент второй модалки</div>
  </Modal>
</>
```

## Правило именования

Для каждой модалки используй уникальное имя:

- `service-modal`
- `review-modal`
- `policy-modal`

Не используй одинаковые имена на одной странице.
