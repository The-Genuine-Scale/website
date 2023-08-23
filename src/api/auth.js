import { createUserWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from "./firebase";

export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const usersCollection = collection(db, "Users");
    localStorage.setItem("uid", user.uid)
    const userData = {
      userId: user.uid,
      name: "",
      email: email,
      dob: "",
      gender: "",
      mobileNumber: "",
      cart: [],
      wishlist: [],
      orderHistory: [],
      following: 0,
      address: [],
    };
    await addDoc(usersCollection, userData);
    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}
