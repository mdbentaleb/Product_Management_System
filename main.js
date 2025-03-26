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
if (localStorage.Products != null) {
	dataProduct = JSON.parse(localStorage.Products);
}
else
	dataProduct = [];

submit.onclick = function() {
	let newProduct = {
		title: title.value,
		price: price.value + ' $',
		tax: tax.value,
		ads: ads.value,
		discount: discount.value + ' %',
		total: totalvar,
		count: count.value,
		category: category.value,
	}
	dataProduct.push(newProduct);
	
	// save data input in local storage
	localStorage.setItem('Products', JSON.stringify(dataProduct));

	clearData();
	showData();
}

// clear data input
function clearData() {
	title.value = '';
	price.value = '';
	tax.value = '';
	ads.value = '';
	discount.value = '';
	count.value = '';
	category.value = '';
}

// show data
function showData() {
	let table = '';

	for (let i = 0; i < dataProduct.length; i++) {
		table += `
		<tr>
			<td>${i + 1}</td>
			<td>${dataProduct[i].title}</td>
			<td>${dataProduct[i].price}</td>
			<td>${dataProduct[i].tax}</td>
			<td>${dataProduct[i].ads}</td>
			<td>${dataProduct[i].discount}</td>
			<td>${dataProduct[i].total}</td>
			<td>${dataProduct[i].category}</td>
			<td><button id="update">Update</button></td>
			<td><button onclick="deletProduct(${i})" id="delete">Delete</button></td>
		</tr>
		`;
	}
	document.getElementById('tbody').innerHTML = table;
}
showData();

//delet 1 product
function deletProduct(i) {
	dataProduct.splice(i, 1);
	localStorage.Products = JSON.stringify(dataProduct);
	showData();
}


// creat cout product in same time
// delete product or all product
// update product
// search product
// clean data