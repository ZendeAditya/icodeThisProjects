const profiles = [
  {
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    name: "Andrew Robions",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    name: "Mary Kaye's",
  },
  {
    img: "https://images.unsplash.com/photo-1623057000049-e220f79c7051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGx1c3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Add profile",
  },
];
const profilesCard = document.getElementById("profiles");
const renderUsers = () => {
  const ul = document.createElement("ul");
  console.log(ul);
  profiles.forEach((p) => {
    let liele = document.createElement("li");
    ul.classList = `flex items-center justify-start gap-3 `;
    liele.classList = `border-2 w-40 h-40`;
    liele.innerHTML = `
        <div class="flex flex-col items-center gap-2 p-2">
            <img class="w-20 h-20 rounded-full object-cover cursor-pointer" src=${p.img}/>
            <p class="font-semibold">${p.name}</p>
        </div>
        `;
    ul.appendChild(liele);
  });
  profilesCard.append(ul);
};
document.addEventListener("DOMContentLoaded", (event) => {
  renderUsers();
});
