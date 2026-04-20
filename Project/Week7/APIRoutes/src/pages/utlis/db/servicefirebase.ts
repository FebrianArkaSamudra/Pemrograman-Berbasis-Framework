// src/pages/utils/db/servicefirebase.ts
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export type ApiProductData = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

export async function retrieveProducts(collectionName: string): Promise<ApiProductData[]> {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => {
    const d = doc.data();
    return {
      id: doc.id,
      name: d.name as string,
      price: d.price as number,
      size: d.size as string,
      category: d.category as string,
    };
  });
  return data;
}