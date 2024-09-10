import React from 'react';
import help from "../assets/help.svg";
import layout from "../assets/layout.svg";

const SidePanel = () => {
  return (
    <div className="flex flex-col justify-between h-fit gap-y-8 pt-5 px-3 md:gap-y-[105px] md:pt-5 md:px-3 self-start">
      <img src={help} alt="Help Icon" width="24" height="24" className='cursor-pointer'/>
      <img src={layout} alt="layout Icon" width="24" height="30" className='cursor-pointer'/>
    </div>
  );
}

export default SidePanel;
