let emojis = document.getElementById("emojis");

let emojisArray = [
  { emoji: "😡", name: "Terrible" },
  { emoji: "☹️", name: "Bad" },
  { emoji: "😐", name: "Okay" },
  { emoji: "😆", name: "Good" },
  { emoji: "🤩", name: "Amazing" },
];
let ul = document.createElement("ul");

emojisArray.forEach((emoji) => {
  let li = document.createElement("li");
  li.innerHTML = `<p>${emoji.emoji}</p> <p>${emoji.name}</p>`;
  ul.classList = `p-2 flex items-center justify-evenly text-center flex-wrap [&_li]:border-2 [&_li]:p-4 cursor-pointer`;
  ul.appendChild(li);
  emojis.appendChild(ul);
});
