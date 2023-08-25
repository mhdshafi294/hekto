import ContainerBody from "../ContainerBody";
import Link from "next/link";
import EnterEmail from "../EnterEmail";

const MainFooter = () => {
  return (
    <div className="w-full h-[479px] bg-indigo-50 py-[95px]">
      <ContainerBody>
        <div className="flex justify-start items-start gap-[71px]">
          <div className="flex flex-col justify-start items-start">
            <Link href="/" className="mb-[34px]">
              <h1 className="text-black text-[38px] font-bold">Hekto</h1>
            </Link>
            <EnterEmail />
            <div className="text-slate-400 text-base font-normal mt-[25px]">
              Contact Info
            </div>
            <div className="text-slate-400 text-base font-normal">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-[21px]">
            <h5 className="text-black text-[18px] font-semibold">Catagories</h5>
            <div></div>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Laptops & Computers
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Cameras & Photography
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Smart Phones & Tablets
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Video Games & Consoles
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Waterproof Headphones
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start gap-[21px]">
            <h5 className="text-black text-[18px] font-semibold">
              Customer Care
            </h5>
            <div></div>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              My Account
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Discount
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Returns
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Orders History
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Order Tracking
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start gap-[21px]">
            <h5 className="text-black text-[18px] font-semibold">Pages</h5>
            <div></div>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Browse the Shop
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Category
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Pre-Built Pages
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              Visual Composer Elements
            </Link>
            <Link
              href="/"
              className="text-slate-400 text-base font-normal hover:text-slate-500"
            >
              WooCommerce Pages
            </Link>
          </div>
        </div>
      </ContainerBody>
    </div>
  );
};

export default MainFooter;
