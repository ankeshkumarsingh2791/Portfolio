import React from "react";

const Container = ({ children, bgColor }) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="max-w-[100rem] w-full px-6 sm:px-10"
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
