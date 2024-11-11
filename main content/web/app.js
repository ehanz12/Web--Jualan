const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 999,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 999,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 999,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 999,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      }
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 999,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
    ],
  },
];

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});