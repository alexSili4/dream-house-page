import refs from './refs';

const isHiddenClassName = 'is-hidden';

refs.questionsList.addEventListener('click', toggleShowAnswer);
refs.mobileMenuToggleBtn.forEach((el) => {
  el.addEventListener('click', toggleMobileMenu);
});
refs.registerCodeBtn.forEach((btn) => {
  btn.addEventListener('click', onRegisterCodeBtnClick);
});
refs.registerCodeBackdrop.addEventListener('click', onBackdropClick);
refs.registerCodeCloseBtn.addEventListener('click', onCloseBtnClick);

function onCloseBtnClick(e) {
  refs.registerCodeBackdropWrap.classList.add(isHiddenClassName);
}

function onBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }

  refs.registerCodeBackdropWrap.classList.add(isHiddenClassName);
  window.removeEventListener('keydown', hideProjectModalWin);
}

function onRegisterCodeBtnClick(e) {
  e.currentTarget.blur();

  refs.registerCodeBackdropWrap.classList.remove(isHiddenClassName);
  window.addEventListener('keydown', hideModalWin);
}

function hideModalWin(e) {
  if (e.code !== 'Escape') {
    return;
  }

  refs.registerCodeBackdropWrap.classList.add(isHiddenClassName);
  window.removeEventListener('keydown', hideModalWin);
}

function toggleShowAnswer(e) {
  const targetClassName = 'hidden-desc';
  const isTargetQuestionBtn = e.target.closest('.js-questions-question-btn');

  if (!isTargetQuestionBtn) {
    return;
  }

  const questionContainer = e.target.closest('.js-questions-question-wrap');
  questionContainer.classList.toggle(targetClassName);
}

function toggleMobileMenu() {
  refs.mobileMenu.classList.toggle(isHiddenClassName);
}
