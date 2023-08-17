// pages/api/getProduct.js
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    const { productId } = req.query;

    if (!productId) {
        return res.status(400).json({ error: 'ProductId is required.' });
    }

    try {
        const productRef = doc(db, "products", productId);
        const productDoc = await getDoc(productRef);

        if (!productDoc.exists) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        const product = productDoc.data();

        // Fetch associated prices if needed
        const priceSnap = await getDocs(collection(productRef, "prices"));
        const prices = priceSnap.docs.map(priceDoc => priceDoc.data());
        
        return res.status(200).json({ ...product, prices });
        
    } catch (error) {
        console.error("Failed to fetch product:", error);
        res.status(500).json({ error: error.message });
    }
};
