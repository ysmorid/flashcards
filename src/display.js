displayFlashcard = () => {
  return document.getElementsByClassName('flashcard')[0].innerHTML = flashcard.generate();
};
