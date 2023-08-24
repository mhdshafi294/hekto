"use client";

const EnterEmail = () => {
  return (
    <div className="w-[377px] h-11 bg-white rounded-[3px] relative p-[2px] flex justify-between items-center">
      <input
        className=" text-base font-normal pl-5 py-[11px]"
        type="email"
        placeholder="Enter Email Address"
        onChange={() => {}}
      />
      <button className="w-[135px] h-full bg-pink-500 rounded-[3px] flex justify-center items-center text-indigo-50 text-base font-medium" onClick={() => {}}>
        Sign Up
      </button>
    </div>
  );
};

export default EnterEmail;
