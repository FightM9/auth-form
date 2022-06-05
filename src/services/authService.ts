import { UserData } from 'types';

const dataBase: UserData[] = [
  { name: 'steve.jobs@example.com', password: 'password' },
  { name: 'admin', password: '1234' },
  { name: 'admin', password: 'admin' },
  { name: 'root', password: '1234' },
  { name: 'root', password: 'root' },
  { name: 'user', password: '1234' },
  { name: 'user', password: 'user' },
];

const getAuthData = (user: UserData) =>
  new Promise((resolve, reject) => {
    const { isRegistered, includeName } = dataBase.reduce(
      (status, data) => {
        if (data.name === user.name && data.password === user.password) {
          status.isRegistered = true;
        }
        if (data.name === user.name) {
          status.includeName = true;
        }
        return status;
      },
      { isRegistered: false, includeName: false }
    );

    if (isRegistered) return setTimeout(() => resolve(true), 2000);
    if (includeName) return setTimeout(() => reject(`Неверный пароль`), 1000);
    return setTimeout(
      () => reject(`Пользователя ${user.name} не существует`),
      1000
    );
  });

const authService = {
  getUser: getAuthData,
};

export default authService;
