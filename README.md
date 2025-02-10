# Next.js 15 App Router: Unexpected behavior with getServerSideProps and locales

This repository demonstrates an unexpected behavior in Next.js 15's App Router when using `getServerSideProps` with locale detection.  The issue is that the data fetched by `getServerSideProps` does not seem to be properly passed to the component when locale is involved.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that the data fetched by `getServerSideProps` is not properly displayed in the component.

## Expected Behavior

The component should correctly display the data fetched by `getServerSideProps`, regardless of locale.

## Actual Behavior

The component does not display the data fetched by `getServerSideProps`.  Instead, it either displays `undefined` or an empty object, despite the data being correctly fetched in the `getServerSideProps` function.

## Solution

The solution involves refactoring the `getServerSideProps` function to handle locales correctly within the data fetching process.  The revised code makes sure the locale is incorporated in the data fetching logic so that the data is available for the component.

This issue highlights a potential edge case involving locale handling in Next.js 15's App Router and its `getServerSideProps` function.