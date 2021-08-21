// console.log(' im included')
//function for  extra memory 
function extraMemoryCost(price){
    const externalMemory = document.getElementById('memory-cost');
    externalMemory.innerText = price;  
}
//  function for extra storage
function extraStorageCost(price){
    const extraStorage = document.getElementById('storage-cost');
    extraStorage.innerText = price;
}
//  function for  delivery cost
function deliveryCharge(charge){
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = charge;
};
//  handle extra memory events
document.getElementById('memory-8gb').addEventListener('click',function(){
   extraMemoryCost(0); 
   updatePrice()   
});
document.getElementById('memory-16gb').addEventListener('click',function(){
    extraMemoryCost(180);
    updatePrice()   
});

// extra storage handle events
document.getElementById('storage-256gb').addEventListener('click',function(){
    extraStorageCost (0);
    updatePrice()
});
document.getElementById('storage-512gb').addEventListener('click',function(){
    extraStorageCost (100);
    updatePrice()
});
document.getElementById('storage-1TB').addEventListener('click',function(){
    extraStorageCost (180);
    updatePrice()
});

//  delivery cost handler events
document.getElementById('delivery-free').addEventListener('click',function(){
    // const deliveryCost = document.getElementById('delivery-charge');
    // deliveryCost.innerText = num;
    deliveryCharge(0);
    updatePrice()
});
document.getElementById('delivery-$20').addEventListener('click',function(){
    deliveryCharge(20);
    updatePrice()
});
// function for Updateprice 
function updatePrice() { 
    const curretMemoryPrice =parseFloat(document.getElementById('memory-cost').innerText);
    const currentStoragePrice = parseFloat(document.getElementById('storage-cost').innerText);
    const currentDeliveryCharge = parseFloat(document.getElementById('delivery-charge').innerText);
    document.getElementById('total-price').innerText = totalCalculation(curretMemoryPrice, currentStoragePrice, currentDeliveryCharge);
    document.getElementById('discount-total-price').innerText = totalCalculation(curretMemoryPrice, currentStoragePrice, currentDeliveryCharge);
}
//Calculation
function totalCalculation(memoryPrice, storagePrice, deliveryCharge) {
    const bestPrice = 1299;
    const priceTotal = bestPrice + memoryPrice + storagePrice + deliveryCharge;
    return priceTotal;
};
// apply button
document.getElementById('apply-button').addEventListener('click',function(){
  const  promoCodeField  = document.getElementById('promo-code');
  const promoCode = promoCodeField.value;
  if(promoCodeField == stevekaku){
    document.getElementById('discount-total-price').innerText;
  }
}) 


