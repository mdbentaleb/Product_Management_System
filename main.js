document.getElementById("btnaddproduct").addEventListener("click", function() {
	const container = document.getElementById("inputs");
	if (container.style.display === 'none' || container.style.display === '') {
		container.style.display = 'block';
	} else {
		container.style.display = 'none';
	}
});

const btnAddProduct = document.getElementById('btnaddproduct');
const icon = document.getElementById('icon');

btnAddProduct.addEventListener('click', () => {
    if (icon.src.includes('imgs/down.png')) {
        icon.src = 'imgs/up.png';
    } else {
        icon.src = 'imgs/down.png';
    }
});


let title = document.getElementById("title");
let price = document.getElementById("price");
let tax = document.getElementById("tax");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let totalvar;

// get totale
function getTotal() {
	if (price.value != '')
	{
		totalvar = (parseInt(price.value) + +tax.value + +ads.value) - +discount.value;
	}
}

// creat product
let dataProduct;
if (localStorage.product != null) {
	dataProduct = JSON.parse(localStorage.product);
}
else
	dataProduct = [];

submit.onclick = function() {
	let newProduct = {
		title: title.value,
		price: price.value,
		tax: tax.value,
		ads: ads.value,
		discount: discount.value,
		total: totalvar,
		count: count.value,
		category: category.value,
	}
	dataProduct.push(newProduct);

	localStorage.setItem('product', JSON.stringify(dataProduct));
	console.log(newProduct);
}


// save data input in local storage
// clear data input
// show data
// creat cout product in same time
// delete product or all product
// update product
// search product
// clean data