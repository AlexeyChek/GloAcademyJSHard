'use strict';

const userName = document.getElementById('username'),
  register = document.getElementById('register'),
  login = document.getElementById('login'),
  list = document.getElementById('list');

const getLocalStorage = () => {
  if (localStorage.register) {
    return JSON.parse(localStorage.register);
  }
};

const userList = getLocalStorage() || [];

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

const setLocalStorage = () => {
  localStorage.register = JSON.stringify(userList);
};

const updateList = () => {
  setLocalStorage();
  list.textContent = '';
  userList.forEach((item, i) => {
    list.insertAdjacentHTML('beforeend', `
      <li>
        <button class="del" id="${i}"></button>
        Имя: ${item.firstName}, фамилия: ${item.lastName}, зарегистрирован: ${item.regDate}
      </li>
    `);
  });
};

const checkList = (login, password = false) => {
  let regName = false;
  if (userList.length === 0) return false;
  userList.forEach((item) => {
    if (item.login === login && item.password === password || item.login === login && !password) {
      regName=item.firstName;
      return;
    }
  });
  return regName;
};

const registerNewUser = () => {
  const userName = prompt('Введите имя и фамилию через пробел').split(/ +/);
  if (userName.length !== 2) {
    alert('Введено некоректное значение');
    return;
  }
  const login = prompt('Введите логин');
  if (checkList(login)) {
    alert('Пользователь с таким именем уже существует');
    return;
  }
  const password = prompt('Введите ппароль');
  userList.push({
    firstName: userName[0],
    lastName: userName[1],
    login,
    password,
    regDate: (new Date()).toLocaleString('ru', options),
  });
  updateList();
};

const setUserName = (regName) => {
  userName.textContent = regName;
};

const loginUser = () => {
  const login = prompt('Введите логин');  
  const password = prompt('Введите ппароль');
  const regName = checkList(login, password);
  if (regName) {
    setUserName(regName);
  } else {
    alert('Пользователь с таким логином и паролем не найден.');
  }
};

const deleteUser = (id) => {
  userList.splice(id, 1);
  updateList();
}

register.addEventListener('click', registerNewUser);

login.addEventListener('click', loginUser);

list.addEventListener('click', (e) => {
  const target = e.target;
  if (target.matches('button')) {
    deleteUser(target.id);
  }
});

updateList();