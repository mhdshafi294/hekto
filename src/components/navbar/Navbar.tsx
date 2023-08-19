import UpperNavbar from "./UpperNavbar";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  return (
    <div>
      <UpperNavbar email="mhhasanul@gmail.com" phone="(12345)67890" />
      <BottomNavbar />
    </div>
  );
};

export default Navbar;
