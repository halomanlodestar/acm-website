import React from "react";

interface MyComponentProps {
  children: React.ReactNode;
}
const GridTitle: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <>
      <div className="inline-block">
        <div className="heading_border_r_l h-[20px] mx-[20px]"></div>
        <div className="heading_border_t_b px-[20px]">
          <div className="heading_border_r_l py-[10px] px-[20px]">
            {children}
          </div>
        </div>
        <div className="heading_border_r_l h-[20px] mx-[20px]"></div>
      </div>
    </>
  );
};

export default GridTitle;
