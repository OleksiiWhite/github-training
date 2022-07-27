function slugify(title) {
  // Change code below this line
  let slug;
  slug = title.split(' ');
  slug = slug.join('-');
  slug = slug.toLowerCase();
  console.log(slug);
  return slug;

  // Change code above this line
}
slugify('How to become a JUNIOR developer in TWO WEEKS');
