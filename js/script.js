const cardsContainer = document.querySelector('.main');
const btnOpenPopupOpen = document.querySelector('#add');
const formCatAdd = document.querySelector('#popup-form-cat');

function serealizeForm(elements) {
  const formData = {};
  elements.forEach((input) => {
    if (input.type === 'submit') return;

    if (input.type !== 'checkbox') {
      formData[input.name] = input.value;
    }
    if (input.type === 'checkbox') {
      formData[input.name] = input.checked;
    }
  });
  return formData;
}

function handleFormAddCat(e) {
  e.preventDefault();
  const elementsFormCat = [...formCatAdd.elements];
  const dataFromForm = serealizeForm(elementsFormCat);
  const cardInstance = new Card(dataFromForm, '#card-template');
  cardInstance.getElement();
  const newCardElement = cardInstance.getElement();
  cardsContainer.append(newCardElement);
  popupAddCats.close();
}

cats.forEach(function (catData) {
  const cardInstance = new Card(catData, '#card-template');
  cardInstance.getElement();
  const newCardElement = cardInstance.getElement();

  cardsContainer.append(newCardElement);
});

const popupAddCats = new Popup('popup-add-cats');
popupAddCats.setEventListener();

btnOpenPopupOpen.addEventListener('click', () => popupAddCats.open());
formCatAdd.addEventListener('submit', handleFormAddCat);
