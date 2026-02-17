function productBtn (){
    fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => AllProductBtn(data))
}

function AllProductBtn(btns){
   console.log(btns)
}

productBtn()
