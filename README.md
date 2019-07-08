# nextjs

- minimalistic framework
- react server-side rendering
- automatic routing (upload pages to pages/ )
- automatic code splitting
- styled JSX (built in css support)
- hot reload functionality
- easy deployment
- Link module '<Link href="path">' wrapper of '<a>' or '<button>' DOM element

## installation

```
npm init
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
