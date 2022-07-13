import _ from 'lodash';
import './style.css';
import Icon from './1.jpg'
import json from './dataset.json';

console.log(json.page_meta); // output `JSON5 Example`
//console.log(json.owner.name); // output `Tom Preston-Werner`


function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

 // Add the image to our existing div.
 const myIcon = new Image();
 myIcon.src = Icon;

 element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());