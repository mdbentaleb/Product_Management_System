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
