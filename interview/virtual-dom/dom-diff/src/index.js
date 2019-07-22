import { createElement, render, renderDOM } from './element';
import diff from './diff';
import patch from './patch';

let virtualDOM2 = createElement('ul', {
  class: 'list-group'
}, [
    createElement('li', { class: 'item' }, ['1']),
    createElement('li', { class: 'item' }, ['b']),
    createElement('p', { class: 'page' }, [createElement('a', { class: 'link', href: "https://www.so.com/", target: "_blank" }, ['so'])]),
    createElement('li', { class: 'item current' }, ['wkk'])
  ])

let virtualDOM = createElement('ul', {
  class: 'list-group'
}, [
    createElement('li', { class: 'item' }, ['a']),
    createElement('li', { class: 'item' }, ['b']),
    createElement('li', { class: 'item' }, ['c'])
  ])

let el = render(virtualDOM);
renderDOM(el, document.getElementById('root'));

let patches = diff(virtualDOM, virtualDOM2);
console.log(patches);
patch(el, patches);