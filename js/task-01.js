const numberOfCat = document.querySelectorAll('#categories > li').length;
console.log(`Number of categories:`, numberOfCat);

const catAndElem = document.querySelectorAll('.item > h2');
catAndElem.forEach(element => {
    console.log(`Category:`, element.textContent);
    console.log(`Elements:`, element.nextElementSibling.children.length);
});
