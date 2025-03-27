const container = document.getElementById("inputs");
const btnAddProduct = document.getElementById('btnaddproduct');
const icon = document.getElementById('icon');

btnAddProduct.addEventListener("click", (event) => {
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block';
        icon.src = 'imgs/up.png';
    } else {
        container.style.display = 'none';
        icon.src = 'imgs/down.png';
    }

    event.stopPropagation();
});

document.addEventListener("click", (event) => {
    if (!container.contains(event.target) && !btnAddProduct.contains(event.target)) {
        container.style.display = 'none';
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
	if (title.value !== '' && price.value !== '' && category.value !== '') {
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

		showMessage('Product added successfully!', '#d4edda', '#155724', '#c3e6cb');
		clearData();
		showData();
	} else {
        showMessage('Please fill in the Title, Price, and Category fields!', '#f8d7da', '#721c24', '#f5c6cb');
    }
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

	//widget product count
	document.getElementById("productCount").innerHTML = dataProduct.length;
}
showData();

//delet 1 product
function deletProduct(i) {
	dataProduct.splice(i, 1);
	localStorage.Products = JSON.stringify(dataProduct);
	showData();
	showMessage('Product deleted successfully!', '#d4edda', '#155724', '#c3e6cb');
}


// creat cout product in same time
// delete product or all product
// update product
// search product
// clean data

// notification
function showMessage(message, bgColor, textColor, borderColor) {
    const messageBox = document.getElementById('message');
    messageBox.innerText = message;
    messageBox.style.backgroundColor = bgColor;
    messageBox.style.color = textColor;
    messageBox.style.borderColor = borderColor;
    messageBox.style.display = 'block';

    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}