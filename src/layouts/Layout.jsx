import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "~/components/Navbar/Navbar";
import Container from "~/container/Container";

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <Toaster />
    </Container>
  );
};

export default Layout;
