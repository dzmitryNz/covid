модуль создания элементов DOM

create(el, classNames, child, parent, ...dataAttr)


const main = documment.querySelector('main');
table = create('table', 'tableclass', [th, tr], main)

child - если добавляется строка производится innerHtml, несколько элементов добавляется массивом
