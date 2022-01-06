const productContainer = [...document.querySelectorAll(".product-container")];
const nxBtn = [...document.querySelectorAll(".next-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainer.forEach((item, i) => {
  // store card dimensions
  // getBounding return the element dimensions
  let containertDimensions = item.getBoundingClientRect();
  // store container width
  let containerWidth = containertDimensions.width;

  nxBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
