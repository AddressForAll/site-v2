import Logo from "./logo";

function MapLayout(props) {
  return (
    <>
      <Logo />
      <main>{props.children}</main>
    </>
  );
}
export default MapLayout;
