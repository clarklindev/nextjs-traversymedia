# nextjs

## github https://github.com/zeit/next.js/

- minimalistic framework
- react server-side rendering
- automatic routing (upload pages to pages/ )
- automatic code splitting
- styled JSX (built in css support)
- hot reload functionality
- easy deployment
- Link module '<Link href="path">' wrapper of '<a>' or '<button>' DOM element, the styling goes on the DOM element.
- to use Link: import Link from 'next/link';
- to use styling inside component `<style jsx>{put css here}</style>`
- create Layout.js and import Head from 'next/head';
- anything put in the `<Head></Head>` will go in the head

## installation

```
npm init (creates package.json)
npm install next react react-dom
```

```json
{
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	}
}
```

## CREATING A PAGE

- place files in pages/
- if pages/about.js, can be accessed via router like: 'pages/about'

```js
// pages/index.js
export default () => <div>Hello World</div>;
```

## start the app

```
npm run dev
```

- this starts the server and opens up the output in the browser
- index.js is the root so you will access it via localhost:3000
