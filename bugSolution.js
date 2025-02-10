```javascript
// pages/index.js

export async function getServerSideProps(context) {
  const locale = context.locale; // Access the locale from the context
  console.log('Locale:', locale)
  const res = await fetch(`https://api.example.com/data?locale=${locale}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
```