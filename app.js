const cooperationBtn = document.querySelector('.project-btn-wrapper');
const contactsSection = document.querySelector('.contacts-section');

cooperationBtn.addEventListener('click', function () {
	window.scrollTo({
		top: contactsSection.getBoundingClientRect().top + window.scrollY,
		behavior: 'smooth',
	});
});
