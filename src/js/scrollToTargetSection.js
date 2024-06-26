import refs from './refs';
import smoothScroll from './smoothScroll';

const isHiddenClassName = 'is-hidden';

refs.mainNavigation.forEach((el) => {
  el.addEventListener('click', onMainNavigationLinkClick);
});

function onMainNavigationLinkClick(e) {
  const isMobileMenuLink = e.currentTarget.closest('.js-mobile-menu');
  const navLink = e.target.closest('.js-main-navigation-link');

  if (!navLink) {
    return;
  }

  if (isMobileMenuLink) {
    refs.mobileMenu.classList.add(isHiddenClassName);
  }

  e.preventDefault();
  const sectionId = navLink.attributes.href.value;
  const targetSection = document.querySelector(sectionId);
  smoothScroll(targetSection);
}
