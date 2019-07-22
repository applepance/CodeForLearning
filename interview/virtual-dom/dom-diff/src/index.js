import { createElement, render, renderDOM } from './element';

let li = createElement('li', { class: 'item' }, ['我只是一个过客']);

let virtualDom = createElement('ul', { class: 'list' }, [li, li, li]);

console.log(virtualDom);
let el = render(virtualDom);
renderDOM(el, document.getElementById('root'));