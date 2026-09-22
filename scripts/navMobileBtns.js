export default function navMobile() {
    document.addEventListener('DOMContentLoaded', () => {
        const mobileBtn = document.querySelector('.nav-mobile-btn');
        const navList = document.querySelector('.menu__list');
        const menuSearch = document.querySelector('.menu__search')
        const searchBtn = document.querySelector('.header__search-btn')
        const overlay = document.querySelector('.overlay');
        const body = document.body;

        function openMenu() {
            mobileBtn.classList.add('active');
            navList.classList.add('--open');
            overlay.classList.add('--visible');
            body.classList.add('--menu-open');
        }

        function closeMenu() {
            mobileBtn.classList.remove('active');
            navList.classList.remove('--open');
            overlay.classList.remove('--visible');
            body.classList.remove('--menu-open');
        }

        if (mobileBtn && navList) {
            mobileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (navList.classList.contains('--open')) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            overlay.addEventListener('click', closeMenu);

            navList.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', closeMenu);
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1024) {
                    closeMenu();
                }
            });
        }


        if (menuSearch && searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                menuSearch.classList.toggle('--open')
            })
        };
    })
}