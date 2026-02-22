// Product button start

function productBtn  (){
    fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => productBtnDefined(data))
}


function productBtnDefined(data){

    data.forEach((item) => {

        const productBtnID = document.getElementById('product-btn');
            productBtnID.innerHTML = ''
        const button = document.createElement('button');

        button.innerText = item;
        button.className = "btn hover:border-[#422AD5] hover:bg-[#422AD5] hover:text-white";

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
    .then((data) => productAllCategoryCard(data))
}



function productAllCategoryCard (categorys){
    console.log(categorys)
    categorys.forEach ((category) =>{
        const categoryCard = document.getElementById('category-card');

        categoryCardDetails = document.createElement('div');
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
                                <h3 class="text-xl font-semibold truncate w-full">${category.title}</h3>
                                <p class = "text-xl font-bold">$${category.price}</p>
                            </div>
                            <div class="flex justify-between gap-5">
                                    <button class="btn">
                                    <i class="fa-regular fa-eye"></i>
                                    Buy Now</button>
                                    <button class="btn btn-primary">Add to Card</button>
                            </div>
                            
                            </div>
                        </div>
            </div>
        `
        categoryCard.appendChild(categoryCardDetails)
    })
}

// All Category card end



// Category card Start

function CategoryCard (id){

    // console.log(id)
    const url = `https://fakestoreapi.com/products/category/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => CategoryCardDetails(data))
}



function CategoryCardDetails (categorys){
    // console.log(categorys)
    categorys.forEach ((category) =>{
        const categoryCards = document.getElementById('category-card');
        
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
                                <p><i class="fa-solid fa-star text-orange-300 bg-orange-300"></i> <span> ${category.rating.rate} (${category.rating.count})</span></p>
                            </div>
                        
                            <div class="space-y-2">
                                <h3 class="text-xl font-semibold truncate w-full">${category.title}</h3>
                                <p class = "text-xl font-bold">$${category.price}</p>
                            </div>
                            <div class="flex justify-between gap-5">
                                    <button class="btn">
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




productBtn()


// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"


// "rating": {
// "rate": 3.9,
// "count": 120
// }