//* Productları çəkmək üçün
// let products = []
// [...document.querySelectorAll(".item-wrapper")].map((a)=>{
//     products.push({
//         image:"https://neal.fun"+a.querySelector("img").getAttribute("src"),
//         price:a.querySelector(".item-cost").textContent.slice(1),
//         name:a.querySelector(".item-name").textContent
//     })
// })

const products = [
  {
    id: 1,
    image: "https://neal.fun/spend/images/big-mac.jpg",
    price: "2",
    name: "Big Mac",
  },
  {
    id: 2,
    image: "https://neal.fun/spend/images/flip-flops.jpg",
    price: "3",
    name: "Flip Flops",
  },
  {
    id: 3,
    image: "https://neal.fun/spend/images/coca-cola-pack.jpg",
    price: "5",
    name: "Coca-Cola Pack",
  },
  {
    id: 4,
    image: "https://neal.fun/spend/images/movie-ticket.jpg",
    price: "12",
    name: "Movie Ticket",
  },
  {
    id: 5,
    image: "https://neal.fun/spend/images/book.jpg",
    price: "15",
    name: "Book",
  },
  {
    id: 6,
    image: "https://neal.fun/spend/images/lobster-dinner.jpg",
    price: "45",
    name: "Lobster Dinner",
  },
  {
    id: 7,
    image: "https://neal.fun/spend/images/video-game.jpg",
    price: "60",
    name: "Video Game",
  },
  {
    id: 8,
    image: "https://neal.fun/spend/images/amazon-echo.jpg",
    price: "99",
    name: "Amazon Echo",
  },
  {
    id: 9,
    image: "https://neal.fun/spend/images/year-of-netflix.jpg",
    price: "100",
    name: "Year of Netflix",
  },
  {
    id: 10,
    image: "https://neal.fun/spend/images/air-jordans.jpg",
    price: "125",
    name: "Air Jordans",
  },
  {
    id: 11,
    image: "https://neal.fun/spend/images/airpods.jpg",
    price: "199",
    name: "Airpods",
  },
  {
    id: 12,
    image: "https://neal.fun/spend/images/gaming-console.jpg",
    price: "299",
    name: "Gaming Console",
  },
  {
    id: 13,
    image: "https://neal.fun/spend/images/drone.jpg",
    price: "350",
    name: "Drone",
  },
  {
    id: 14,
    image: "https://neal.fun/spend/images/smartphone.jpg",
    price: "699",
    name: "Smartphone",
  },
  {
    id: 15,
    image: "https://neal.fun/spend/images/bike.jpg",
    price: "800",
    name: "Bike",
  },
  {
    id: 16,
    image: "https://neal.fun/spend/images/kitten.jpg",
    price: "1,500",
    name: "Kitten",
  },
  {
    id: 17,
    image: "https://neal.fun/spend/images/puppy.jpg",
    price: "1,500",
    name: "Puppy",
  },
  {
    id: 18,
    image: "https://neal.fun/spend/images/auto-rickshaw.jpg",
    price: "2,300",
    name: "Auto Rickshaw",
  },
  {
    id: 19,
    image: "https://neal.fun/spend/images/horse.jpg",
    price: "2,500",
    name: "Horse",
  },
  {
    id: 20,
    image: "https://neal.fun/spend/images/acre-of-farmland.jpg",
    price: "3,000",
    name: "Acre of Farmland",
  },
  {
    id: 21,
    image: "https://neal.fun/spend/images/designer-handbag.jpg",
    price: "5,500",
    name: "Designer Handbag",
  },
  {
    id: 22,
    image: "https://neal.fun/spend/images/hot-tub.jpg",
    price: "6,000",
    name: "Hot Tub",
  },
  {
    id: 23,
    image: "https://neal.fun/spend/images/luxury-wine.jpg",
    price: "7,000",
    name: "Luxury Wine",
  },
  {
    id: 24,
    image: "https://neal.fun/spend/images/diamond-ring.jpg",
    price: "10,000",
    name: "Diamond Ring",
  },
  {
    id: 25,
    image: "https://neal.fun/spend/images/jet-ski.jpg",
    price: "12,000",
    name: "Jet Ski",
  },
  {
    id: 26,
    image: "https://neal.fun/spend/images/rolex.jpg",
    price: "15,000",
    name: "Rolex",
  },
  {
    id: 27,
    image: "https://neal.fun/spend/images/ford-f-150.jpg",
    price: "30,000",
    name: "Ford F-150",
  },
  {
    id: 28,
    image: "https://neal.fun/spend/images/tesla.jpg",
    price: "75,000",
    name: "Tesla",
  },
  {
    id: 29,
    image: "https://neal.fun/spend/images/monster-truck.jpg",
    price: "150,000",
    name: "Monster Truck",
  },
  {
    id: 30,
    image: "https://neal.fun/spend/images/ferrari.jpg",
    price: "250,000",
    name: "Ferrari",
  },
  {
    id: 31,
    image: "https://neal.fun/spend/images/single-family-home.jpg",
    price: "300,000",
    name: "Single Family Home",
  },
  {
    id: 32,
    image: "https://neal.fun/spend/images/gold-bar.jpg",
    price: "700,000",
    name: "Gold Bar",
  },
  {
    id: 33,
    image: "https://neal.fun/spend/images/mcdonalds-franchise.jpg",
    price: "1,500,000",
    name: "McDonalds Franchise",
  },
  {
    id: 34,
    image: "https://neal.fun/spend/images/superbowl-ad.jpg",
    price: "5,250,000",
    name: "Superbowl Ad",
  },
  {
    id: 35,
    image: "https://neal.fun/spend/images/yacht.jpg",
    price: "7,500,000",
    name: "Yacht",
  },
  {
    id: 36,
    image: "https://neal.fun/spend/images/m1-abrams.jpg",
    price: "8,000,000",
    name: "M1 Abrams",
  },
  {
    id: 37,
    image: "https://neal.fun/spend/images/formula-1-car.jpg",
    price: "15,000,000",
    name: "Formula 1 Car",
  },
  {
    id: 38,
    image: "https://neal.fun/spend/images/apache-helicopter.jpg",
    price: "31,000,000",
    name: "Apache Helicopter",
  },
  {
    id: 39,
    image: "https://neal.fun/spend/images/mansion.jpg",
    price: "45,000,000",
    name: "Mansion",
  },
  {
    id: 40,
    image: "https://neal.fun/spend/images/make-a-movie.jpg",
    price: "100,000,000",
    name: "Make a Movie",
  },
  {
    id: 41,
    image: "https://neal.fun/spend/images/boeing-747.jpg",
    price: "148,000,000",
    name: "Boeing 747",
  },
  {
    id: 42,
    image: "https://neal.fun/spend/images/mona-lisa.jpg",
    price: "780,000,000",
    name: "Mona Lisa",
  },
  {
    id: 43,
    image: "https://neal.fun/spend/images/skyscraper.jpg",
    price: "850,000,000",
    name: "Skyscraper",
  },
  {
    id: 44,
    image: "https://neal.fun/spend/images/cruise-ship.jpg",
    price: "930,000,000",
    name: "Cruise Ship",
  },
  {
    id: 45,
    image: "https://neal.fun/spend/images/nba-team.jpg",
    price: "2,120,000,000",
    name: "NBA Team",
  },
];
let basket = [];
const items = document.querySelector(".items");

// document.querySelectorAll(".item-buy").forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log(e.target);
//   });
// });

const buyProduct = (id) => {
  let existingProduct = basket.find((item) => item.id === id);
  if (existingProduct) {
    existingProduct.count += 1;
  } else {
    basket.push({
      id: id,
      count: 1,
    });
    // [...document.querySelectorAll(".item")].

  }
  console.log(basket);
};
const sellProduct = (id) => {
  let existingProduct = basket.find((item) => item.id === id);
  if (existingProduct) {
    existingProduct.count -= 1;
  } else {
  }
  console.log(basket);
};

products.forEach((product) => {
  const item = document.createElement("div");
  item.classList.add("item");
  const item_name = document.createElement("div");
  item_name.classList.add("item-name");
  item_name.textContent = product.name;
  const item_img = document.createElement("img");
  item_img.classList.add("item-img");
  item_img.setAttribute("src", product.image);
  const item_price = document.createElement("div");
  item_price.classList.add("item-cost");
  item_price.textContent = "$" + product.price;
  const item_wrapper = document.createElement("div");
  item_wrapper.classList.add("item-wrapper");
  const item_controls = document.createElement("div");
  item_controls.classList.add("item-controls");
  const sell_button = document.createElement("button");
  sell_button.classList.add("item-sell");
  sell_button.textContent = "Sell";
  sell_button.disabled = true;
  const buy_button = document.createElement("button");
  buy_button.addEventListener("click", () => buyProduct(product.id));
  buy_button.classList.add("item-buy");
  buy_button.textContent = "Buy";
  const item_input = document.createElement("input");
  item_input.classList.add("item-input");
  //! item_input.setAttribute("pattern", "d*"); !have a problem
  item_input.value = 0;
  item_input.type = "number";
  item_input.pattern = "d*";

  item_wrapper.append(item_img, item_name, item_price, item_controls);
  item_controls.append(sell_button, item_input, buy_button);
  item.append(item_wrapper);
  items.append(item);
});
