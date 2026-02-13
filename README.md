# Дом на изкуството 🎨

Платформа за представяне на творчеството на талантливи деца. Този проект е създаден с Next.js и Tailwind CSS.

## Описание

Това е уеб приложение, което позволява представяне на творческите постижения на деца. Всяко дете има своя собствена секция, където можете да видите:
- Кратко представяне и биография
- Видео представяне (опционално)
- Галерия с творби и произведения

## Структура на проекта

- `src/app/page.js` - Начална страница с обяснение на проекта
- `src/app/children/[name]/page.js` - Динамични страници за всяко дете
- `src/data/children.js` - Данни за децата (тук добавяте информация)
- `src/components/` - Компоненти за показване на деца, творби и видеа

## Как да добавите дете

1. Отворете файла `src/data/children.js`
2. Добавете нов обект в масива `children`:

```javascript
{
  id: 2,
  name: "Име на детето",
  slug: "ime-na-deteto", // използва се в URL-а
  age: 10,
  bio: "Пълно описание на детето...",
  shortBio: "Кратко описание за карточката",
  avatar: "/path/to/avatar.jpg", // опционално
  videoUrl: "https://youtube.com/watch?v=...", // опционално
  artworks: [
    {
      id: 1,
      title: "Заглавие на творба",
      image: "/path/to/artwork.jpg",
      description: "Описание",
      year: 2024
    }
  ]
}
```

## Добавяне на изображения и видеа

### Изображения
Поставете изображенията в папката `public/` и използвайте пътя от корена:
- `public/artworks/artwork1.jpg` → `/artworks/artwork1.jpg`

### Видеа
Поддържат се:
- YouTube: `https://www.youtube.com/watch?v=VIDEO_ID` или `https://youtu.be/VIDEO_ID`
- Vimeo: `https://vimeo.com/VIDEO_ID`
- Директни видео файлове: поставете в `public/videos/` и използвайте пътя

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
