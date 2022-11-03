const newCat = {
  id: 8,
  name: "Y",
  img_link:
    "https://avatars.mds.yandex.net/i?id=ade312dd50775021bba3fb86dcbc1aff-5192485-images-thumbs&n=13&exp=1",
  age: 2.5,
  rate: 10,
  description: "best ever",
  favourite: true,
};

const CONFIG_API = {
  url: "http://sb-cats.herokuapp.com/api/2/sam_starikov/",
  headers: {
    "Content-Type": "application/json",
  },
};

class Api {
  //-----Создали класс-----//
  constructor(config) {
    //-----Тут наш арг.------//
    this._url = config.url; //-----Создали поля Объекта с пом. this (_ ниж подчерк - это приватное поле)----//
    this._headers = config.headers;
  }
  //-----Создаем методы(функции)------//

  getAllCats() {
    // fetch("http://sb-cats.herokuapp.com/api/2/sam_starikov/show" это хард код); // сделали запрос на сервер

    fetch(`${this._url}show`); // это через шаблонную строку _url может меняться
    {
      method: "GET"; //----Метот запроса----//
    }
  }

  getArrayCats() {
    fetch(`${this._url}ids`, {
      method: "GET",
    });
  }

  addNewCat(data) {
    fetch(`${this._url}add`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: this._headers,
    });
  }

  getCatById(idCat) {
    fetch(`${this._url}show/${idCat}`);
    {
      method: "GET";
    }
  }

  updaeCatById(idCat, data) {
    fetch(`${this._url}update/${idCat}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: this._headers,
    });
  }

  deleteCatById(idCat) {
    fetch(`${this._url}delete/${idCat}`, {
      method: "DELETE",
    });
  }
}

//---------- Это его ПРОТОТИП. Передали в кач-ве арг. Объект CONFIG_API-------------//

const api = new Api(CONFIG_API);

// --------Вызваем метод класса (функцию)---------//

api.updaeCatById(1, { name: "UpdateCat" });
api.getAllCats();
api.addNewCat(newCat);
api.deleteCatById(6);
api.getCatById(8);
api.getArrayCats();
