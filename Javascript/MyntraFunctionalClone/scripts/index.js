// let items = {
//   itemImage : 'images/1.jpg',
//   rating : {
//     stars : 4.5 ,
//     reviews : 1400,
//   },
//   company : 'Carlton London',
//   item_name : 'Rhodium-Plated CZ Floral Studs',
//   currentPrice : 'Rs 606',
//   originalPrice : 'Rs 1450',
//   discount : '42%',
// };

let bagItems;
onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr):[];
  displayItemsOnHomepage();
  displayBagItemCount();
}


function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagItemCount();
  
}

function displayBagItemCount(){
  
  let bagItemElement = document.querySelector('.bag-item-count')
  if(bagItems.length > 0){
    bagItemElement.style.visibility = 'visible';
    bagItemElement.innerText = bagItems.length;
  }
  else{
    bagItemElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomepage(){

let itemsContainerElement = document.querySelector('.items-container');
if(!itemsContainerElement){
  return;
}

  let innerHTML ='';
  items.forEach(item =>{
  innerHTML += `
  <div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>`
}); 
itemsContainerElement.innerHTML = innerHTML;
}