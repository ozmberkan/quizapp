import Container from "~/container/Container";
import Navbar from "~/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
