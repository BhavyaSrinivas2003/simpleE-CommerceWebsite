function addToCart(){
    let cartCount=document.getElementById("cartCount").textContent;
    cartCount=Number(cartCount);
    cartCount+=1;
    document.getElementById('cartCount').innerHTML = cartCount;
}
function buyNow(){
    let cartCount=document.getElementById("cartCount").textContent;
    cartCount=Number(cartCount);
    if(cartCount===0){
        alert("Your cart is empty. Please add items to your cart before buying");
    }else{
        alert("Your order got placed successfully.Thank you for shopping with us!");
        cartCount=0;
        document.getElementById("cartCount").innerHTML=cartCount;
    }
}