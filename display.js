displayFlashcard = () => {
  return document.getElementsByClassName('flashcard')[0].innerHTML = flashcard.generate();
};

displayTranslation = () => {
  return document.getElementsByClassName('flashcard')[0].innerHTML = flashcard.translate();
};

let counter = 0;
toggleFlashcardWordAndTranslation = () => {
  counter += 1;

  if(counter %2 ===0) {
    return displayFlashcard();
  } else {
    return displayTranslation();
  }
};