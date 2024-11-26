import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <AppBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
