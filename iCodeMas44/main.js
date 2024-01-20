const pricesCard = [
  {
    id: 1,
    name: "Starter",
    sublabel: "Free",
    perks: ["Unlimited Files", "Unlimeted editors", "Unlimeted Cloud Storage"],
    btn: "Choose Starter",
    color: "blue",
  },
  {
    id: 2,
    name: "Professional",
    sublabel: "$12 per member",
    perks: ["Unlimited Projects", "Private Projects", "Team Libraries"],
    btn: "Choose Professional",
    color: "pink",
    bg: "pink",
  },
];

let cards = document.getElementById("cards");

const renderCard = () => {
  pricesCard.forEach((c) => {
    let divEle = document.createElement("div");
    divEle.classList = `relative overflow-hidden cursor-pointer z-40 
        before:content-[''] before:absolute 
        before:backdrop-blur-md before:z-40 before:bg-${c.color}-300/40 before:top-0 before:duration-500 before:ease-in before:left-0 before:w-5 before:h-5 before:rounded-md hover:before:w-[16rem] hover:before:h-96  hover:before:rounded hover:before:p-0 hover:before:-z-40
        bg-white w-[16rem] h-96 rounded-xl m-2 border-[7px] border-${c.color}-300 p-5 shadow-xl shadow-${c.color}-200`;
    divEle.innerHTML = `
        <h2 class="font-medium text-2xl text-${c.color}-400">${c.name}</h2> 
        <p class="px-2">${c.sublabel}</p>
        <ul class="p-3 pt-14 flex items-start justify-between flex-col gap-5 [&_li]:before:content-['✅'] ">
            <li>${c.perks[0]}</li>
            <li>${c.perks[1]}</li>
            <li>${c.perks[1]}</li>
        </ul>

        <div class="flex items-center justify-center ">
            <button class="py-3 shadow-lg shadow-${c.color}-200 px-8 rounde-lg border-2 text-xs text-center mt-9 border-${c.color}-400 border-2 bg-${c.bg}-500">${c.btn}</button>
        </div>
    
    `;
    cards.appendChild(divEle);
  });
};

renderCard();
