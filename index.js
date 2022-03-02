const dirTree = require('directory-tree');
const fs = require('fs');
const fileName = 'file-index.json';
const minified = true;

function dirCallback (item) {
  delete item.path // remove 'path' key from all directory objects
}

const tree = dirTree('plants', { attributes: ['type'] }, null, dirCallback)

fs.appendFile(fileName, JSON.stringify(tree, null, minified ? 0 : 2), function (err) {
  if (err) {
    throw err
  }
  console.log(`Saved to ${fileName}`)
})
