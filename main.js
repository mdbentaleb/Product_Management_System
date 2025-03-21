document.getElementById("btnaddproduct").addEventListener("click", function() {
	const container = document.getElementById("inputs");
	if (container.style.display === 'none' || container.style.display === '') {
		container.style.display = 'block';
	} else {
		container.style.display = 'none';
	}
});