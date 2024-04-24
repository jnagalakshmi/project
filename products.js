fetch("get_products.php")
  .then((response) => response.json())
  .then((products) => {
    // Store the products in local storage

    localStorage.setItem("products", JSON.stringify(products));
    console.log(products);
  })
  .catch((error) => console.error("Error:", error));



let bundle = [
  {
    id: "Apple-1",
    image: "https://i.imgur.com/vUJ2JKU.png",
    name: "Apple",
    kg: 1,
    priceCents: 100,
  },
  {
    id: "Chilli-2",
    image: "https://i.imgur.com/rFhSMZN.png",
    name: "Chilli",
    kg: 1,
    priceCents: 80,
  },
  {
    id: "Onion-3",
    image: "https://i.imgur.com/sGLggWL.jpg",
    name: "Onion",
    kg: 1,
    priceCents: 60,
  },
  {
    id: "Potato-4",
    image: "https://i.imgur.com/WFjH6ui.png",
    name: "Potato",
    kg: 1,
    priceCents: 30,
  },
  {
    id: "Garlic-5",
    image: "https://i.imgur.com/XVLuy2J.pngg",
    name: "Garlic",
    kg: 1,
    priceCents: 90,
  },
  {
    id: "Tomato-6",
    image: "https://i.imgur.com/8l5hDhS.png",
    name: "Tomato",
    kg: 1,
    priceCents: 50,
  },
];
