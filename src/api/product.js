import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "./firebase";

export async function getProductById(docId) {
  console.log("10");
  const prodCol = collection(db, "Products");
  const q = query(prodCol, where("docId", "==", docId));
  const prodSnapshot = await getDocs(q);

  if (prodSnapshot.empty) {
    console.log("empty");
    return;
  }

  const prodDoc = prodSnapshot.docs[0];
  const prodObject = prodDoc.data();
  return prodObject;
}

export async function getProducts() {
  console.log("11");
  const prodCol = collection(db, "Products");
  const prodSnapshot = await getDocs(prodCol);
  const prodList = prodSnapshot.docs.map((doc) => doc.data());
  return prodList;
}

export async function getOrders() {
  console.log("12");
  const prodCol = collection(db, "Orders");
  const prodSnapshot = await getDocs(prodCol);
  const prodList = prodSnapshot.docs.map((doc) => doc.data());
  return prodList;
}

export async function getProductsByCategory(category) {
  console.log("13");
  const prodCol = collection(db, "Products");
  let prodSnapshot;

  if (category) {
    const q = query(prodCol, where("category", "==", category));
    prodSnapshot = await getDocs(q);
  } else {
    prodSnapshot = await getDocs(prodCol);
  }

  const prodList = prodSnapshot.docs.map((doc) => doc.data());
  return prodList;
}
