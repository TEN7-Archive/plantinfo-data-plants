# plantinfo-data-plants
This repo contains the plants data for plantinfo.org.

*To create an index file:*

Run

```sh
   npm install
```

To create **file-index.json**, run:

```javascript
   node index
```

In `index.js`, settings available to edit:

```javascript
const fileName = 'file-index.json'
const minified = true
```