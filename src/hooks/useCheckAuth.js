import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {
  const { status } = useSelector(({ auth }) => auth );
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async ( user ) => {

      if (!user) return dispatch( logout() );

      dispatch(
        login({
          user: {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }
        })
      );

    });
  }, []);

  return status;
};
