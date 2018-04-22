import firebase from 'firebase';

export default class storage {
  static addEmail(email) {
    const dataBase = firebase.database();
    return dataBase.ref('emails').push({ email });
  }
}
