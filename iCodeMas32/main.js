const storagePlans = [
  {
    name: "Basic Plan",
    storageLimit: "100GB",
    price: "$5.99/month",
  },
  {
    name: "Standard Plan",
    storageLimit: "500GB",
    price: "$9.99/month",
  },
  {
    name: "Premium Plan",
    storageLimit: "1TB",
    price: "$15.99/month",
  },
];
let cards = document.getElementById("cards");
const showCards = () => {
  storagePlans.forEach((c, id) => {
    setTimeout(() => {
      cards.innerHTML += `
        <div class="bg-white w-96 h-36 m-2 rounded-lg p-4 font-semibold flex items-center justify-evenly relative">
            <h2>${c.storageLimit}</h2>
            <button class="py-2 px-6 bg-black text-white rounded-md">NOK 17.00/month</button>
            <p class="absolute bottom-5 text-sm right-0 p-2">Or prepay anually NOK 170.00/Year</p>
        </div>
    `;
    }, id * 500);
  });
};

document.addEventListener("DOMContentLoaded", showCards);
