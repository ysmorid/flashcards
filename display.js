displayFlashcard = () => {
  return document.getElementsByClassName('flashcard')[0].innerHTML = flashcard.generate();
};

displayTranslation = () => {
  return document.getElementsByClassName('flashcard')[0].innerHTML = flashcard.translate();
};