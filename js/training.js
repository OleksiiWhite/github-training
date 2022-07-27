// function slugify(title) {
//   // Change code below this line
//   let slug;
//   slug = title.split(' ');
//   slug = slug.join('-');
//   slug = slug.toLowerCase();
//   console.log(slug);
//   return slug;

//   // Change code above this line
// }
// slugify('How to become a JUNIOR developer in TWO WEEKS');

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let allArray = firstArray.concat(secondArray);
  const longArray = allArray.length;
  if (longArray > maxLength) {
    return allArray.slice(0, maxLength);
  }
  return allArray;
  // Change code above this line
}
makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
