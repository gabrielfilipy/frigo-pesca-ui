function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'block') {
         mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}

document.querySelectorAll('.mobile-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        document.getElementById('mobileMenu').style.display = 'none';
    });
});


function toggleSubmenu(event) {
    event.stopPropagation();

    const submenu = event.target.closest('.menu-item').querySelector('.submenu');

    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}

document.addEventListener('click', function() {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(function(submenu) {
        submenu.style.display = 'none';
    });
});

