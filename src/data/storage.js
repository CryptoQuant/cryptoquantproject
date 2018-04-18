import firebase from 'firebase';

export default class storage {
  static addEmail(email) {
    const dataBase = firebase.database();
    dataBase.ref('emails').push({ email });
  }
}
