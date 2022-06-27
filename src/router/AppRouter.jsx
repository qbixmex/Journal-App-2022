import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthRoutes } from "../auth";
import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";

import { JournalRoutes } from "../journal";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {

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
  
  if ( status === 'checking' ) return <CheckingAuth />;

  return (
    <Routes>

      {
        status === 'authenticated'
          ? <Route path="*" element={ <JournalRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

      <Route path="*" element={ <Navigate to='/auth/login' /> } />

    </Routes>
  );
};
