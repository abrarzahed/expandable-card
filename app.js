const accordionDiv = document.querySelector(".accordion");
console.log(accordionDiv);
const images = [
  "./images/planet-01.png",
  "./images/planet-02.png",
  "./images/planet-03.png",
  "./images/planet-04.png",
  "./images/planet-05.png",
];
images.forEach((image) => {
  const html = `<div class="accordion_card" style="background-image: url(${image});">
    <div class="accordion_card--content">
      <p>ENTER METAVERSE</p>
      <h3>The Hogwarts</h3>
    </div>
  </div>`;
  accordionDiv?.insertAdjacentHTML("afterbegin", html);
});
const cards = document.querySelectorAll(".accordion_card");

const removeActiveClass = () => {
  cards.forEach((c) => {
    c.classList.remove("active");
  });
};
cards.forEach((card, i) => {
  card.addEventListener("click", function (e) {
    const parent = e.target.closest(".accordion_card");
    if (
      e.target.classList.contains("accordion_card") ||
      parent.classList.contains("accordion_card")
    ) {
      removeActiveClass();
      card.classList.add("active");
    }
  });
});
