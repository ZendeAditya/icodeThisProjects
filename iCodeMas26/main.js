let homePage = document.getElementById("HomePage");


let url = " https://dev.to/api/articles?username=pradumnasaraf";

const arrayBlog = [];
const showBlog = (data) => {
    console.log(data.length);
    let sectionEl = document.createElement("section");
    for (let i = 0; i < data.length; i++){
        console.log(data[i].title);
        let divEl = document.createElement("div");
        sectionEl.classList =  `flex flex-row items-center   
        justify-evenly gap-2 flex-wrap`
        divEl.innerHTML = `
            <div class="w-80 h-80 rounded-md bg-white p-4 border-2 m-2 shadow-md hover:scale-110 duration-300 ease-in ">
                <img src= "${data[i].cover_image}"/>
                <h2 class="font-semibold cursor-pointer">
                <a href="${data[i].url}">${data[i].title}</a>
                </h2>
                <div class="text-sm p-2">
                   <p class="border-2 inline p-1 border-red-800 rounded-md"> #${data[i].tag_list[1]}</p>
                   <p class="border-2 inline p-1 border-yellow-600 rounded-md"> #${data[i].tag_list[1]}</p>
                   <p class="border-2 inline p-1 border-green-600 rounded-md"> #${data[i].tag_list[3]}</p>
                </div>
                <div class="p-3 font-bold">
                <p>Reading Time : ${data[i].reading_time_minutes} Min</p>
                </div>
            </div>
        `;
        sectionEl.appendChild(divEl);
    }
    homePage.appendChild(sectionEl);
}

const blogpost = async () => {
    let res = await fetch(url);
    const data = await res.json();

    showBlog(data);
    
}

blogpost()