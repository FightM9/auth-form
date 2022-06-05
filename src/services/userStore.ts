import { UserData } from 'types';

const userStore = {
  key: 'user-data',
  get: function getFromStore() {
    const userData = localStorage.getItem(this.key);
    return userData ? JSON.parse(userData) : null;
  },
  save: function saveToStore(data: UserData) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },
  clear: function () {
    localStorage.clear();
  },
};

export default userStore;
