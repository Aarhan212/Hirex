import firebase from "firebase";

export const addBook = () => {
    firebase.firestore()
    .collection('books')
    .add({
        title: book.title,
        author: book.author,
        createdAt : firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error));
}