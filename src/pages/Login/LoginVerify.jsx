import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { signUp } from "../../api/auth";

const LoginVerify = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const email = window.localStorage.getItem("emailForSignIn");

    if (isSignInWithEmailLink(auth, window.location.href)) {
      signInWithEmailLink(auth, email, window.location.href)
        .then(async () => {
          localStorage.setItem("uid", auth.currentUser.uid)    
          const user = auth.currentUser;
          if (user) {
            // User is already signed in, navigate to your main page
            navigate("/");
          } else {
            await signUp(email, ""); // You might want to add a placeholder password
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Error signing in with email link:", error);
          // Handle error appropriately
        });
    }
  }, [navigate]);

  return <div>Verifying login...</div>;
};

export default LoginVerify;
