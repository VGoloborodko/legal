# Icon

`Icon` — общий компонент для рендера локальных SVG-иконок по имени.

Он нужен, чтобы использовать единый API для иконок в разных частях проекта: в секциях, кнопках, карточках, списках, CTA и других UI-элементах.

## Задачи компонента

- рендерить иконку по имени из общей карты `icons`;
- поддерживать стандартные SVG-пропсы;
- позволять управлять размером, цветом заливки и цветом обводки;
- давать единый способ использования иконок по всему проекту.

## Структура

```text
app/components/ui/icon/
  Icon.tsx
  icon.types.ts
  icons.ts
```

### Файлы

- `Icon.tsx` — общий компонент-обёртка.
- `icon.types.ts` — базовый тип пропсов для SVG-иконок.
- `icons.ts` — объект с доступными иконками.

## API

### Props

#### `name`
- Тип: `IconName`
- По умолчанию: —
- Описание: имя иконки из `icons.ts`.

#### `size`
- Тип: `number | string`
- По умолчанию: —
- Описание: общий размер иконки. Используется как `width` и `height`, если они не переданы отдельно.

#### `width`
- Тип: `number | string`
- По умолчанию: —
- Описание: ширина иконки.

#### `height`
- Тип: `number | string`
- По умолчанию: —
- Описание: высота иконки.

#### `fill`
- Тип: `string`
- По умолчанию: —
- Описание: цвет заливки SVG.

#### `stroke`
- Тип: `string`
- По умолчанию: —
- Описание: цвет обводки SVG.

#### `className`
- Тип: `string`
- По умолчанию: `''`
- Описание: дополнительный CSS-класс.

#### `...props`
- Тип: `SVGProps<SVGSVGElement>`
- По умолчанию: —
- Описание: остальные стандартные SVG-пропсы.

`name` типизируется автоматически на основе ключей из объекта `icons`, поэтому при добавлении новой иконки она сразу становится доступна в автокомплите.

## Базовое использование

```tsx
import Icon from './Icon';

<Icon name="shield" />
```

## Размер

```tsx
<Icon name="shield" size={18} />
<Icon name="shield" width={20} height={20} />
```

Если передан `size`, он используется как значение по умолчанию для `width` и `height`.

## Цвет

Для иконок нужно использовать цветовые токены, а не фоновые.

### Через `fill`

```tsx
<Icon name="arrowUpRight" size={18} fill="var(--color-text-brand)" />
```

`fill` подходит для иконок, у которых цвет задаётся через заливку.

### Через `stroke`

```tsx
<Icon name="shield" size={18} stroke="var(--color-text-primary)" />
```

`stroke` подходит для иконок, у которых цвет задаётся через линии и обводку.

### Допустимые цветовые токены

Примеры корректных значений для иконок:

```tsx
<Icon name="shield" stroke="var(--color-text-primary)" />
<Icon name="shield" stroke="var(--color-text-secondary)" />
<Icon name="shield" stroke="var(--color-text-brand)" />
<Icon name="shield" stroke="var(--color-text-error)" />
```

Для fill-иконок можно использовать те же текстовые токены:

```tsx
<Icon name="arrowUpRight" fill="var(--color-text-primary)" />
<Icon name="arrowUpRight" fill="var(--color-text-secondary)" />
<Icon name="arrowUpRight" fill="var(--color-text-brand)" />
<Icon name="arrowUpRight" fill="var(--color-text-error)" />
```

Фоновые переменные вида `--color-bg-*` не используются как основной цвет самой иконки. Они нужны для фона элементов и контейнеров.

## currentColor

Если иконка должна наследовать цвет текста родителя, можно использовать `currentColor`.

```tsx
<Icon name="shield" size={18} stroke="currentColor" />
```

или

```tsx
<Icon name="arrowUpRight" size={18} fill="currentColor" />
```

Это удобно, когда цвет задаётся не прямо в пропсе иконки, а через текстовый цвет родителя.

Пример:

```tsx
<span style={{ color: 'var(--color-text-brand)' }}>
  <Icon name="shield" size={18} stroke="currentColor" />
</span>
```

В таком случае иконка автоматически возьмёт цвет из `color` родителя.

## Использование в компонентах

### Напрямую в JSX

```tsx
<Icon name="shield" size={18} stroke="var(--color-text-primary)" />
```

### Через проп-конфиг

```tsx
<Hero
  icon={{
    name: 'shield',
    size: 18,
    stroke: 'var(--color-text-primary)',
  }}
/>
```

Внутри компонента:

```tsx
{icon && <Icon {...icon} />}
```

Такой способ удобен для секций и переиспользуемых компонентов, где иконка задаётся снаружи.

## Прямое использование SVG-компонента

Кроме общего `Icon`, конкретную иконку можно использовать напрямую:

```tsx
<ShieldIcon size={18} stroke="var(--color-text-primary)" />
```

Это допустимо для частных случаев, но базовым способом в проекте считается использование общего `Icon`.

## Добавление новой иконки

1. Создать новый SVG-компонент, например `PhoneIcon.tsx`.
2. Подключить его в `icons.ts`.
3. Добавить в объект `icons`.

Пример:

```tsx
import PhoneIcon from './PhoneIcon';

export const icons = {
  arrowRight: ArrowRightIcon,
  arrowUpRight: ArrowUpRightIcon,
  shield: ShieldIcon,
  phone: PhoneIcon,
};
```

После этого новая иконка станет доступна так:

```tsx
<Icon name="phone" />
```

## Рекомендации

- Использовать `Icon` как основной способ работы с иконками в проекте.
- Использовать прямые SVG-компоненты только в редких специальных случаях.
- В переиспользуемых компонентах передавать иконку через объект-конфиг, совместимый с `Icon`.
- Для цвета иконок использовать текстовые токены `--color-text-*` или `currentColor`.
- Не использовать `--color-bg-*` как основной цвет иконки.
- Не смешивать разные способы использования без необходимости.