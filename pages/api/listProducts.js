import {  collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const products = [];
    const productsQuery = query(collection(db, "products"), where("active", "==", true));
    const querySnapshot = await getDocs(productsQuery);
    for (const doc of querySnapshot.docs) {
      const product = doc.data();
      const priceSnap = await getDocs(collection(doc.ref, "prices"));
      const prices = priceSnap.docs.map(priceDoc => priceDoc.data());
      products.push({ ...product, prices });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
