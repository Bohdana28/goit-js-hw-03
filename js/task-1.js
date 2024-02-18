'use strict'
function slugify(title) {
    const ifslug = title.toLowerCase();
    const titlemas = ifslug.split(" ");
    const slug = titlemas.join("-");
    return slug;
    
}
slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"