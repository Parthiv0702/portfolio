This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Folder Structure

```text
my-next-app/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── app_logo.jpg
│   │   │   ├── no_image.png
│   │   │   └── parthiv.jpeg
│   │   └── favicon.ico
│   └── cv/
│       └── parthiv_jogadiya_resume.pdf
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   ├── components/
│   │   │   │   └── AboutPageContent.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CVSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── SkillsSection.tsx
│   │   ├── projects/
│   │   │   ├── components/
│   │   │   │   └── ProjectsPageContent.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AppIcon.tsx
│   │   │   ├── AppImage.tsx
│   │   │   ├── AppLogo.tsx
│   │   │   └── ProfileImageFrame.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── data/
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   └── styles/
│       ├── index.css
│       └── tailwind.css
├── .env
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
