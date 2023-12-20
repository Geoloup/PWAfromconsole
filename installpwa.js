// create blob url
var manifest = ``;

const blob = new Blob([strs]);
const url = URL.createObjectURL(blob);

// create manifest to the html
const link = document.createElement('link');
link.rel = 'manifest';
link.href = url /* custom blob */;
document.head.appendChild(link);
