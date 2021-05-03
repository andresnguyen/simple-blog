const icon = document.getElementById('mobile-icon');
const header = document.getElementsByClassName('header')[0];

icon.addEventListener('click', () => {
	if (icon.classList.contains('fa-bars')) {
		icon.classList.add('fa-times');
		icon.classList.remove('fa-bars');
		header.classList.add('sticky');
		return;
	}
	icon.classList.add('fa-bars');
	icon.classList.remove('fa-times');
	header.classList.remove('sticky');
});
