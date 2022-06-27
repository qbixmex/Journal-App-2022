import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {

  const { status } = useSelector(({ auth }) => auth );

  if ( status === 'checking' ) {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      <Route path="/auth/*" element={ <AuthRoutes /> } />
      <Route path="*" element={ <JournalRoutes /> } />
    </Routes>
  );
};
