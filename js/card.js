class Card {
  constructor(dataCat, selectorTemplate) {
    this._data = dataCat;
    this._selectorTemplate = selectorTemplate;
  }
  _getTemplate() {
    return document
      .querySelector(this._selectorTemplate)
      .content.querySelector(".main__card");
  }

  getElement() {
    this.element = this._getTemplate().cloneNode(true);
    const cardTitle = this.element.querySelector(".card__name");
    const cardImage = this.element.querySelector(".card-image");
    const cardLike = this.element.querySelector(".card__like");

    cardTitle.textContent = this._data.name;
    cardImage.src = this._data.img_link;

    if (!this._data.favourite) {
      cardLike.remove();
    }
    return this.element;
  }
}

// const template = document
//   .querySelector("#card-template")
//   .content.querySelector(".main__card");
