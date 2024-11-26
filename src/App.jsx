import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";

import { selectUserIsRefreshing } from "./redux/auth/selectors";
import { apiGetCurrentUser } from "./redux/auth/operations";

import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const Layout = lazy(() => import("./components/Layout/Layout"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserIsRefreshing);

  useEffect(() => {
    dispatch(apiGetCurrentUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Is Refreshing...</div>;
  }
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/constacts"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/constacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/constacts"
                  component={<ContactsPage />}
                />
              }
            />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
