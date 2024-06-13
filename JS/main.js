document.addEventListener('DOMContentLoaded', () => {
    // Function to update header height and parallax height
    const updateHeights = () => {
        const header = document.querySelector('header');
        const parallax = document.querySelector('.parallax');
        const contentItems = document.querySelectorAll('.content-item');
        const headerHeight = header.offsetHeight;
        const screenHeight = window.innerHeight;
        const newHeight = screenHeight - (2 * headerHeight);

        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
        parallax.style.height = `${newHeight}px`;
        contentItems.forEach(item => {
            item.style.height = `${newHeight}px`;
        });
    };

    // Initial update of the heights
    updateHeights();

    // Update the heights on window resize
    window.addEventListener('resize', updateHeights);

    // Toggle dropdown menu
    const navToggle = document.querySelector('.nav-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Ensure initial state
    dropdownMenu.style.opacity = '0';
    dropdownMenu.style.display = 'none';

    navToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.style.opacity = '0';
            setTimeout(() => {
                dropdownMenu.classList.remove('show');
                dropdownMenu.style.display = 'none';
            }, 500);
        } else {
            dropdownMenu.style.display = 'block';
            setTimeout(() => {
                dropdownMenu.style.opacity = '1';
            }, 10);
            dropdownMenu.classList.add('show');
        }
    });

    // Hide dropdown on scroll
    window.addEventListener('scroll', () => {
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.style.opacity = '0';
            setTimeout(() => {
                dropdownMenu.classList.remove('show');
                dropdownMenu.style.display = 'none';
            }, 500);
        }
    });

    // Hide dropdown on click outside
    document.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target) && !navToggle.contains(event.target)) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.style.opacity = '0';
                setTimeout(() => {
                    dropdownMenu.classList.remove('show');
                    dropdownMenu.style.display = 'none';
                }, 500);
            }
        }
    });
});
