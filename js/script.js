// console.log(' im included')
// external memory 
function extraMemoryCost(num){
    const externalMemory = document.getElementById('memory-cost');
    externalMemory.innerText =num;
}
document.getElementById('memory-8gb').addEventListener('click',function(){
   extraMemoryCost(0);    
});
document.getElementById('memory-16gb').addEventListener('click',function(){
    extraMemoryCost(180);   
});
// storage
function extraStorageCost(num){
    const extraStorage = document.getElementById('storage-cost');
    extraStorage.innerText = num;
}
document.getElementById('storage-256gb').addEventListener('click',function(){
    // const extraStorage = document.getElementById('storage-cost');
    // extraStorage.innerText = num;
    extraStorageCost (0);
});
document.getElementById('storage-512gb').addEventListener('click',function(){
    // const extraStorage = document.getElementById('storage-cost');
    // extraStorage.innerText = num;
    extraStorageCost (100);
});
document.getElementById('storage-1TB').addEventListener('click',function(){
    extraStorageCost (180);
});
// delivery cost
function deliveryCharge(num){
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = num;
};

document.getElementById('delivery-free').addEventListener('click',function(){
    // const deliveryCost = document.getElementById('delivery-charge');
    // deliveryCost.innerText = num;
    deliveryCharge(0);
});
document.getElementById('delivery-$20').addEventListener('click',function(){
    deliveryCharge(20);
});


