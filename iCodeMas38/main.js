let designToolsArray = [
    {
        id: 1,
        name: "Figma",
        category: "Prototyping",
        website: "https://www.figma.com/",
        logo: "https://s3-alpha.figma.com/hub/file/2815952264/7a5ebfb0-0508-48ab-be9a-31b36ba53f97-cover.png"
    },
    {
        id: 2,
        name: "Canva",
        category: "Graphic Design",
        website: "https://www.canva.com/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz00Pong1Ck-vRg929ljzuMzD4bMKIhqAS1mTVsrLqUzsI8iHbOc4kxOD7ux0q4md50TM&usqp=CAU"
    },
    {
        id: 3,
        name: "Adobe Photoshop",
        category: "Photo Editing",
        website: "https://www.adobe.com/products/photoshop.html",
        logo: "https://petapixel.com/assets/uploads/2020/06/pslogo.jpg"
    },
    {
        id: 4,
        name: "Sketch",
        category: "Digital Design",
        website: "https://www.sketch.com/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/850px-Sketch_Logo.svg.png"
    },
    {
        id: 5,
        name: "InVision",
        category: "Prototyping",
        website: "https://www.invisionapp.com/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzXo2oynv7LPzPtWvpZe7igDq7xWrSqDjVO2rkpeNAQ&s"
    },
    {
        id: 6,
        name: "Affinity Designer",
        category: "Graphic Design",
        website: "https://affinity.serif.com/en-us/designer/",
        logo: "https://forum.affinity.serif.com/uploads/monthly_2018_03/5a9d8861b8a66_AffinityDesignerLogo.jpg.a73ddc1f7de49154417f4f0580250cc1.jpg"
    },
    {
        id: 7,
        name: "Gravit Designer",
        category: "Vector Design",
        website: "https://www.designer.io/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzaYAeqhmpoxIRrFV4yM4JCKOPPHy-AsEpJtTfEbUfQ&s"
    },
    {
        id: 8,
        name: "PicMonkey",
        category: "Photo Editing",
        website: "https://www.picmonkey.com/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqEA7rPDod19rbw95FA0PS9hPQyUU9-wqDniEZVL4CQ&s"
    },
    {
        id: 9,
        name: "Crello",
        category: "Graphic Design",
        website: "https://crello.com/",
        logo: "https://cdn.dribbble.com/users/1921403/screenshots/3882859/media/b4bd2d2fa3294b15594f9385787a0488.jpg?resize=400x0"
    },
];
document.addEventListener("DOMContentLoaded", function () {
    let documentList = document.getElementById("documentList");
    let searchId = document.getElementById("searchId");

    const appendList = (toolsArray) => {
        documentList.innerHTML = "";
        let ulEle = document.createElement("ul");
        toolsArray.forEach((item) => {
            let liEle = document.createElement("li");
            liEle.innerHTML = `
                <div class="flex items-center justify-start gap-3 border-2 py-4 m-2 ">
                    <img src=${item.logo} alt=${item.name} class="w-10 h-10 object-cover"/>
                    <h2 class="text-lg font-semibold">${item.name}</h2>
                </div>
            `;
            ulEle.appendChild(liEle);
        });
        documentList.appendChild(ulEle);
    };

    const filteredProduct = () => {
        searchId.addEventListener("input", function () {
            const filteredTools = designToolsArray.filter(item =>
                item.name.toLowerCase().includes(searchId.value.toLowerCase())
            );
            appendList(filteredTools);
        });
    };

    appendList(designToolsArray);
    filteredProduct();
});
