import refs from './refs';
import smoothScroll from './smoothScroll';

const isHiddenClassName = 'is-hidden';

refs.mainNavigation.forEach((el) => {
  el.addEventListener('click', onMainNavigationLinkClick);
});

function onMainNavigationLinkClick(e) {
  const isMobileMenuLink = e.currentTarget.closest('.js-mobile-menu');
  const isNavLink = e.target.classList.contains('js-main-navigation-link');

  if (isMobileMenuLink) {
    refs.mobileMenu.classList.add(isHiddenClassName);
  }

  if (isNavLink) {
    e.preventDefault();
    const sectionId = e.target.attributes.href.value;
    const targetSection = document.querySelector(sectionId);
    smoothScroll(targetSection);
  }
}
