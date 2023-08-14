import { query, where, getDocs, collection } from "firebase/firestore";

const productsQuery = query(collection(db, "products"), where("active", "==", true));
const querySnapshot = await getDocs(productsQuery);
for (const doc of querySnapshot.docs) {
  console.log(doc.id, " => ", doc.data());
  const priceSnap = await getDocs(collection(doc.ref, "prices"));
  for (const priceDoc of priceSnap.docs) {
    console.log(priceDoc.id, " => ", priceDoc.data());
  }
}