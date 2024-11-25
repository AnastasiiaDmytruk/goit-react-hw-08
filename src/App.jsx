import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { lazy, useEffect } from "react";

import Layout from "./components/Layout/Layout";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { selectUserIsRefreshing } from "./redux/auth/selectors";
import { apiGetCurrentUser } from "./redux/auth/operations";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

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
              <RestrictedRoute
                redirectTo="/constacts"
                component={<ContactsPage />}
              />
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
