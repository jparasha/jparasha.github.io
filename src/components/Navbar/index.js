import { lazy } from "react";
import RenderComponent from "../../utils";
const LazyNavbar = lazy(() => import("./Navbar"));

export default function Navbar(props) {
  return (
    // Displays <Spinner> until OtherComponent loads
    <RenderComponent Component={LazyNavbar} {...props} />
  );
}
