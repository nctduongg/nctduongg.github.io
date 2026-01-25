// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fridge Modal Functions
function openFridgeModal(event) {
    event.preventDefault();
    const modal = document.getElementById('fridgeModal');
    const flipContainer = document.getElementById('flipContainer');
    modal.classList.add('show');
    flipContainer.classList.remove('flipped');
    document.body.style.overflow = 'hidden';
}

function closeFridgeModal() {
    const modal = document.getElementById('fridgeModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function flipImage() {
    const flipContainer = document.getElementById('flipContainer');
    flipContainer.classList.toggle('flipped');
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('fridgeModal');
    if (modal) {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeFridgeModal();
            }
        });
    }
});

// Keyboard support - ESC to close modal
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('fridgeModal');
        if (modal && modal.classList.contains('show')) {
            closeFridgeModal();
        }
    }
});