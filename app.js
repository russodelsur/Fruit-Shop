// const fruits = ["Banana","Apple", "Pear", "Watermelon", "Orange"]

// const fruits = {
//     name: ["Pear","Banana","Mango"]
// };

// const mango = {
//     name:"Mango",
//     quantity: ""
// }

// const fruits = {
//     name: ["Pear","Banana","Mango"]
// };

// const fruits = {mango, banana, pear}


function fruitsShop(name, quantity, image) {
    this.name = name;
    this.quantity = quantity;
    this.image = image;
}

const fruits = new fruitsShop();

fruits.name = ["Banana", "Apple", "Pear", "Watermelon", "Orange"]
fruits.image = [
    "https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2021/10/GRT-bananas-spiral-circle-1296x728-header.jpg?w=1155&h=1528",
    "https://assets.epicurious.com/photos/560d459cf3a00aeb2f1c31c4/master/pass/apples.jpg",
    "https://www.dole.com/-/media/project/dole/produce-images/fruit/pears_cut_web.png?rev=10de6975e8374745b30330750d6ffd18&hash=F239896D0E476330BB48B16B82D0118D",
    "https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F01%2F03%2FGettyImages-1205638014-2000.jpg&q=60",
]



let fruitName = "";
for (let i = 0; i < fruits.name.length; i++) {
    fruitName += fruits.name[i] + "<br>";
}

let fruitImage = "";
for (let i = 0; i < fruits.image.length; i++) {
     fruitImage += '<div><img src="' + fruits.image[i] + '"/></div>';
}

// '<div><img src="'+fruitImage+'"/></div>').appendTo(('#msgDiv'));

console.log(fruits)
console.log(fruits.image)
console.log(fruitsShop)
console.log(fruitName)
console.log(fruitImage)

document.getElementById("image").innerHTML = fruitImage
document.getElementById("fruitName").innerHTML = fruitName




