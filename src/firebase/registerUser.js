import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/app';
import { setUser } from './authSlice';
import store from './store';

const registerUser = (email, password) => {
  const auth = getAuth(firebase);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Kullanıcı başarıyla kaydedildi
      const user = userCredential.user;
      console.log('Kullanıcı kaydedildi:', user);

      // Kullanıcı bilgilerini Redux Store'a ekleyelim
      store.dispatch(setUser(user));
    })
    .catch((error) => {
      // Hata durumunda
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Kullanıcı kaydedilemedi:', errorCode, errorMessage);
    });
};
