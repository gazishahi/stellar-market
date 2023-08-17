import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../lib/firebase";

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { priceId, mode, allowPromotionCodes, collectShippingAddress, taxRates } = req.body;

  try {
    const checkoutSessionsCollection = collection(db, "customers", req.user.uid, "checkout_sessions");
    const docRef = await addDoc(checkoutSessionsCollection, {
      mode: mode || "payment",
      price: priceId,
      allow_promotion_codes: allowPromotionCodes || false,
      collect_shipping_address: collectShippingAddress || false,
      tax_rates: taxRates || [],
      success_url: req.headers.origin,
      cancel_url: req.headers.origin,
    });
    res.status(200).json({ sessionId: docRef.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
