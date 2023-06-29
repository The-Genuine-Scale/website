import { db } from "./firebase";

export async function addToOrderHistory(userId, item) {
  console.log("8");
  const userRef = db.collection("Users").doc(userId);
  await userRef.update({
    orderHistory: [...item, ...userRef.orderHistory],
  });
}
export async function removeFromOrderHistory(userId, orderId) {
  console.log("9");
  const userRef = db.collection("Users").doc(userId);
  await userRef.update({
    orderHistory: userRef.orderHistory.filter(
      (item) => item.orderId !== orderId
    ),
  });
}
