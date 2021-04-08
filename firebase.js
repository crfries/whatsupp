import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBqFlluKn6XmVd-Jzoy1QPmATzXCFBR0V0',
  authDomain: 'whatsupp-4d8af.firebaseapp.com',
  projectId: 'whatsupp-4d8af',
  storageBucket: 'whatsupp-4d8af.appspot.com',
  messagingSenderId: '152891917923',
  appId: '1:152891917923:web:3c931b6e6b28664ebb1a56',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
