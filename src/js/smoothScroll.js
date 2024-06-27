const smoothScroll = ({ targetSection, start }) => {
  targetSection.scrollIntoView({ behavior: 'smooth', block: start ? 'start' : 'center' });
};

export default smoothScroll;
