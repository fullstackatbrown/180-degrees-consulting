import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebaseConfig";

export const getFirebase: (
  collection: string,
  document: string,
  field: string
) => Promise<any[]> = async function fetchData(
  collection: string,
  document: string,
  field: string
) {
  const docRef: DocumentReference = doc(firestore, collection, document);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.get(field));
    return docSnap.get(field);
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return [];
  }
};