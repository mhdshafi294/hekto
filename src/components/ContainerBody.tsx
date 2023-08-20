"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerBody: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
      w-[1168px] 
      h-full 
      mx-auto 
      "
    >
      {children}
    </div>
  );
};

export default ContainerBody;
