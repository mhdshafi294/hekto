"use client";

interface ContainerNavProps {
  children: React.ReactNode;
}

const ContainerNav: React.FC<ContainerNavProps> = ({ children }) => {
  return (
    <div
      className="
      w-[1137px] 
      h-full 
      mx-auto 
      xl:px-20
      md:px-10
      sm:px-2
      px-4"
    >
      {children}
    </div>
  );
};

export default ContainerNav;
