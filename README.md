This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Notes

- This is an unfinished assignment
- Although the assignment is incomplete, I would like to list solutions for what I wasn't able to do:
  - Font details page: Use Next.js App Router
  - Sidebar: Save all the selected styles to the global store, which I created with `zustand`
  - Fitlers in URL params: Create another slice for URL params and rework the filters, queries can then be executed when the URL params change
  - Improve list performance: Use a solution to render only the on-screen components, `react-window` for example
- The only problem I didn't find a solution for is how to load the fonts on-the-fly so they can be previewed
- Tools I chose:
  - Next.js so I don't need to bother setting up routing, bundler, development environment and deployment
  - Zustand for global store
  - Jest and Testing Library for unit testing
  - Material-UI
  - ESList and Prettier with Standard style guide
  - husky and lint-staged
  - Vercel for deployment
- Types of implemented unit tests:
  - `components/FontList/__tests__/FontList.test.tsx` - Component without user actions
  - `components/Toolbar/components/CategoryFilter/__tests__/CategoryFilter.test.tsx` - Component with user actions
  - `hooks/useGetFontsQuery/__tests__/useGetFontsQuery.test.ts` - React Hook
