import React from 'react';

const CardContent = ({children}) => {
  return (
    <div className='w-full max-w-[614px] flex flex-col items-center mt-3 p-3 justify-between gap-y-8'>
      {children}
    </div>
  );
}

export default CardContent;
