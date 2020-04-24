document.addEventListener("DOMContentLoaded", () => {
  // CATEGORY
  const categoryList = document.querySelector(".category-list");
  categoryList.style.transitionDuration = "2s";
  categoryList.style.left = "0px";
  categoryList.style.opacity = "1";

  // ANIMASI MOVIE ITEM
  const movieItems = document.querySelectorAll(".movie-item");
  const directions = document.querySelectorAll(".direction");
  movieItems.forEach((movieItem, index) => {
    // membuat index dimulai dari angka satu
    index += 1;
    let duration = index;
    let delay = index * 0.5;
    movieItem.style.transitionDuration = duration + "s";
    movieItem.style.transitionDelay = delay + "s";
    movieItem.style.opacity = 1;

    if (index === movieItems.length) {
      directions.forEach((direction) => {
        direction.style.transitionDuration = duration + "s";
        direction.style.transitionDelay = delay + "s";
        direction.style.opacity = 1;
      });
    }
  });

  // ANIMASI ATTRIBUT MOVE LIKE OVERVIEW TITLE
  const movieAttrib = document.querySelector(".container-movie-attrib");
  movieAttrib.style.transitionDuration = "2s";
  movieAttrib.style.transitionDelay = "2s";
  movieAttrib.style.opacity = 1;

  // ANIMASI DETAIL
  const seeDetail = document.querySelector(".direction-down");
  seeDetail.addEventListener("click", () => {
    document.body.style.transition = "3s";
    document.body.style.transform = "translateY(-100vh)";
  });

  const backToTop = document.querySelector(".direction-up");
  backToTop.addEventListener("click", () => {
    document.body.style.transition = "3s";
    document.body.style.transform = "translateY(0vh)";
  });
});
