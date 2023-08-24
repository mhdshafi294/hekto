import Link from "next/link";

const Subscribe = () => {
  return (
    <div className=" mt-[125px] mb-[96px] w-full h-[462px] flex justify-center items-center bg-[url('/bgFull.jpeg')] bg-no-repeat bg-cover bg-gray-500 bg-center">
      <div className="w-[574px] h-[185px] translate-y-10 relative flex flex-col justify-between items-center gap-[28px]">
        <p className=" text-center text-violet-950 text-[35px] font-bold leading-[54.25px] tracking-wide">
          Get Leatest Update By Subscribe
          <br />
          0ur Newslater
        </p>
        <Link
          href="/subscribe"
          className="w-[173px] h-[49px] bg-pink-500 rounded-sm flex justify-center items-center"
        >
          <p className="text-white text-[17px] font-normal tracking-tight">
            Subscribe
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
