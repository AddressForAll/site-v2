import Logo from "./logo";
import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <>
      <Logo />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
export default Layout;
