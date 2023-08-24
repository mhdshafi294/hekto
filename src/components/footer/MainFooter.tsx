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
            <h5 className="text-black text-[22px] font-semibold">Catagories</h5>
            <div></div>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Laptops & Computers
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Cameras & Photography
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Smart Phones & Tablets
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Video Games & Consoles
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Waterproof Headphones
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start gap-[21px]">
            <h5 className="text-black text-[22px] font-semibold">
              Customer Care
            </h5>
            <div></div>
            <Link href="/" className="text-slate-400 text-base font-normal">
              My Account
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Discount
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Returns
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Orders History
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Order Tracking
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start gap-[21px]">
            <h5 className="text-black text-[22px] font-semibold">Pages</h5>
            <div></div>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Blog
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Browse the Shop
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Category
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Pre-Built Pages
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              Visual Composer Elements
            </Link>
            <Link href="/" className="text-slate-400 text-base font-normal">
              WooCommerce Pages
            </Link>
          </div>
        </div>
      </ContainerBody>
    </div>
  );
};

export default MainFooter;
