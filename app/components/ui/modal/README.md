# Modal

Универсальная модалка с portal-рендером, overlay, внутренним скроллом и блокировкой скролла страницы на планшете и мобиле.

## Путь

```text
components/ui/modal/
```

## Состав файлов

- `Modal.tsx` — логика компонента
- `Modal.module.scss` — стили модалки
- `README.md` — документация

## Props

```ts
type ModalProps = {
  name: string;
  activeModal: string | null;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};
```

### `name`

Уникальное имя модалки.

### `activeModal`

Текущее активное окно на странице.  
Модалка открыта, если `activeModal === name`.

### `onClose`

Колбэк закрытия модалки.  
Вызывается:

- по клику на overlay;
- по клику на кнопку закрытия;
- по нажатию `Escape`.

### `children`

Контент модального окна.

### `className`

Дополнительный класс для `modal__dialog`.

## Поведение

- рендер через `createPortal(..., document.body)`;
- если модалка закрыта, компонент возвращает `null`;
- закрытие по overlay;
- закрытие по `Escape`;
- закрытие по кнопке;
- на `window.innerWidth <= 1024` блокируется скролл `body`;
- после закрытия восстанавливается позиция страницы;
- у модального окна включён внутренний скролл;
- scrollbar скрыт, скролл остаётся рабочим.

## Открытие

```ts
const isOpen = activeModal === name;
```

## Использование

```tsx
const [activeModal, setActiveModal] = useState<string | null>(null);

const openModal = (name: string) => setActiveModal(name);
const closeModal = () => setActiveModal(null);

<Modal name="service-modal" activeModal={activeModal} onClose={closeModal}>
  <div>Контент модалки</div>
</Modal>;
```

## Несколько модалок

Допускается несколько экземпляров `Modal` на странице.  
Одновременно отображается только та модалка, у которой `name === activeModal`.

## Структура разметки

```tsx
<div className={styles.modal} onClick={onClose}>
  <div className={styles.modal__viewport}>
    <div
      className={`${styles.modal__dialog} ${className}`}
      role="dialog"
      aria-modal="true"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="ears">
        <div className={styles.modal__wrapper}>
          <div className="container">
            <div className="col">
              <div className={`row ${styles.faq__inner}`}>{children}</div>
            </div>
          </div>
        </div>
      </div>

      <button ... />
    </div>
  </div>
</div>
```

## Доступность

На контейнер окна выставлены:

```tsx
role="dialog"
aria-modal="true"
```

## Основные CSS-сущности

- `.modal` — корневой слой
- `.modal::before` — overlay с blur
- `.modal__viewport` — контейнер позиционирования
- `.modal__dialog` — окно модалки
- `.modal__wrapper` — внутренний фон и отступы
- `.modal__close` — кнопка закрытия

## Особенности текущей реализации

- scroll lock включается только на планшете и мобиле;
- для scroll lock используется `body.style.position = 'fixed'` с сохранением `scrollY`;
- после закрытия выполняется `window.scrollTo(...)`;
- у `.modal` и `.modal__dialog` используется `overscroll-behavior: contain`;
- у `.modal__dialog` скрыт scrollbar через:
  - `scrollbar-width: none;`
  - `-ms-overflow-style: none;`
  - `::-webkit-scrollbar { display: none; }`

## Ограничения

- `name` должен быть уникальным в пределах страницы;
- содержимое модалки не описывается внутри `Modal.tsx`;
- бизнес-разметка передаётся только через `children`;
- текущая реализация использует `styles.faq__inner` внутри модалки, это зависимость от конкретного style namespace.

## Рекомендуемое использование

- `Modal.tsx` — только оболочка;
- контент модалки — в странице / секции / локальном компоненте;
- стили содержимого — вне `Modal.module.scss`, если они относятся к конкретной модалке.
