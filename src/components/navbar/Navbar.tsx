import UpperNavbar from "./UpperNavbar";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  return (
    <div className="mb-[22px]">
      <UpperNavbar email="mhhasanul@gmail.com" phone="(12345)67890" />
      <BottomNavbar />
    </div>
  );
};

export default Navbar;
