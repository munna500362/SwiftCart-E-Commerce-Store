// Active Status

function SetActiveBtn (id){
    const removeBtn = document.querySelectorAll(".btn-category")
    removeBtn.forEach((Btn) =>{
            Btn.classList.remove('active');

    })

    const activebtn = document.getElementById(id);
    if(activebtn){
        activebtn.classList.add("active")
    }
}

// Product button start

function productBtn  (){
    fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => productBtnDefined(data))
}


function productBtnDefined(data){

    data.forEach((item) => {

        const productBtnID = document.getElementById('product-btn');
        const button = document.createElement('button');

        button.innerText = item;
        button.id = item;
        button.className = "btn btn-category hover:border-[#422AD5] hover:bg-[#422AD5] hover:text-white";

        button.addEventListener("click", () => {
            CategoryCard(item);
        });

        productBtnID.appendChild(button);
    });
}

// Product button end

// All Category card start
function productAllCategory (){
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
        SetActiveBtn("button")
        
        productAllCategoryCard(data)
    })
}



function productAllCategoryCard (categorys){
        const categoryCards = document.getElementById('category-card');
             categoryCards.innerHTML = "";

        
            

        categorys.forEach ((category) =>{
        
           

        let categoryCardDetails = document.createElement('div');
            categoryCardDetails.classList.add('gap-3');
            categoryCardDetails.innerHTML = 
        `
            <div class="card bg-base-100 shadow-sm">
                        <figure class="px-5 md:px-10 py-5 md:py-10 bg-gray-500">
                            <img class="rounded-xl w-1/2 h-40 object-contain"
                            src="${category.image}"
                            alt="Shoes"
                             />
                        </figure>
                        <div class="text-start p-3 md:p-5 space-y-3 md:space-y-5">
                            <div class="flex justify-between"> 
                                <button class="rounded-full px-2 py-1 text-[#4F46E5] bg-gray-300 "> ${category.category}</button>
                                <p><i class="fa-solid fa-star text-orange-300 bg-orange-300"></i> <span> ${category.rating.rate} (${category.rating.count})</span></p>
                            </div>
                        
                            <div class="space-y-2">
                                <h3 class="text-xl font-semibold truncate w-full"> ${category.title}</h3>
                                <p class = "text-xl font-bold">$${category.price}</p>
                            </div>
                            <div class="flex justify-between gap-5">
                                    <button onclick = "singleBtnShowModel(${category.id})" class="btn">
                                    <i class="fa-regular fa-eye"></i>
                                    Buy Now</button>
                                    <button class="btn btn-primary">Add to Card</button>
                            </div>
                            
                            </div>
                        </div>
            </div>
        `
        categoryCards.appendChild(categoryCardDetails)
    })
}

// All Category card end



// Category card Start

function CategoryCard (id){

    // console.log(id)
    const url = `https://fakestoreapi.com/products/category/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        SetActiveBtn(id)
        CategoryCardDetails(data)
    
})
}



function CategoryCardDetails (categorys){
    // console.log(categorys)

    const categoryCards = document.getElementById('category-card');
        categoryCards.innerHTML = ""
    categorys.forEach ((category) =>{
        
        CardDetails = document.createElement('div');
       
        CardDetails.classList.add('gap-3');
        CardDetails.innerHTML = 
        `
            <div class="card bg-base-100 shadow-sm">
                        <figure class="px-5 md:px-10 py-5 md:py-10 bg-gray-500">
                            <img class="rounded-xl w-1/2 h-40 object-contain"
                            src="${category.image}"
                            alt="Shoes"
                             />
                        </figure>
                        <div class="text-start p-3 md:p-5 space-y-3 md:space-y-5">
                            <div class="flex justify-between"> 
                                <button class="rounded-full px-2 py-1 text-[#4F46E5] bg-gray-300 "> ${category.category}</button>
                                <p><i class="fa-solid fa-star text-orange-300"></i> <span> ${category.rating.rate} (${category.rating.count})</span></p>
                            </div>
                        
                            <div class="space-y-2">
                                <h3 class="text-xl font-semibold truncate w-full">${category.title}</h3>
                                <p class = "text-xl font-bold">$${category.price}</p>
                            </div>
                            <div class="flex justify-between gap-5">
                                    <button onclick = "singleBtnShowModel(${category.id})" class="btn">
                                    <i class="fa-regular fa-eye"></i>
                                    Buy Now</button>
                                    <button class="btn btn-primary">Add to Card</button>
                            </div>
                            
                            </div>
                        </div>
            </div>
        `
        categoryCards.appendChild(CardDetails)
    })
}


function singleBtnShowModel (id) {

    const url = `https://fakestoreapi.com/products/${id}`
    fetch (url)
    .then((res) => res.json())
    .then((data) => singleBtnShowModelCard(data))

}

function singleBtnShowModelCard(data){
            // console.log(data)

            // console.log(detail)
        const BtnShowModel = document.getElementById("singleBtnShowModel").showModal()

        const BtnModelValue = document.getElementById("BtnModelValue");
        BtnModelValue.innerHTML = "";


        const ModelValue = document.createElement("div");
        ModelValue.classList.add("space-y-5", "text-start")

        ModelValue.innerHTML =
            `
                <h1 class = " text-xl md:text-2xl font-bold text-start">${data.title}</h1>
                <p class = "text-gray-500 text-start">${data.description}</p>
                <div class = " flex gap-5 ">
                    <p class = " font-semibold text-start rounded-full px-2 border border-gray-200 bg-gray-300">$${data.price} </p>
                    <p class = " font-semibold text-start rounded-full px-2 border border-gray-200 bg-gray-300"><i class="fa-solid fa-star text-orange-300"></i>${data.rating.rate} </p>
                </div>
                
                <button class="btn bg-[#4F46E5] text-white text-start">Buy Now</button>
            `
        BtnModelValue.appendChild(ModelValue)

    }

   




    function topRatedCard (){
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
        // SetActiveBtn("button")
        
        topRatedCardValue(data)
    })
}



function topRatedCardValue (categorys){
        const categoryCards = document.getElementById('category-card');
            //  categoryCards.innerHTML = "";
        // const topRatedCardModel = document.getElementById("topCardShowModel").showModal()
    //    console.log(categorys)
         const topRated = categorys
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 3); 

        // console.log(topRated)
        // console.log(slice)

        topRated.forEach((ratedValue) =>{
            const trandingProduct = document.getElementById("tranding-product");
            const threeSingleValues = document.createElement('div');
            threeSingleValues.innerHTML = 
            `
                   <div class="card bg-base-100 shadow-sm">
                        <figure class="px-5 md:px-10 py-5 md:py-10 bg-gray-500">
                            <img class="rounded-xl w-1/2 h-40 object-contain"
                            src="${ratedValue.image}"
                            alt="Shoes"
                             />
                        </figure>
                        <div class="text-start p-3 md:p-5 space-y-3 md:space-y-5">
                            <div class="flex justify-between"> 
                                <button class="rounded-full px-2 py-1 text-[#4F46E5] bg-gray-300 "> ${ratedValue.category}</button>
                                <p><i class="fa-solid fa-star text-orange-300 bg-orange-300"></i> <span> ${ratedValue.rating.rate} (${ratedValue.rating.count})</span></p>
                            </div>
                        
                            <div class="space-y-2">
                                <h3 class="text-xl font-semibold truncate w-full"> ${ratedValue.title}</h3>
                                <p class = "text-xl font-bold">$${ratedValue.price}</p>
                            </div>
                            <div class="flex justify-between gap-5">
                                    <button onclick = "singleBtnShowModel(${ratedValue.id})" class="btn">
                                    <i class="fa-regular fa-eye"></i>
                                    Buy Now</button>
                                    <button class="btn btn-primary">Add to Card</button>
                            </div>
                            
                            </div>
                        </div>
            </div>
            `

            trandingProduct.appendChild(threeSingleValues)
        })
    }


productBtn()
productAllCategory()
topRatedCard ()


