"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerBody: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
      max-w-[1168px] 
      mx-auto
      md:px-0
      sm:px-2
      "
    >
      {children}
    </div>
  );
};

export default ContainerBody;
