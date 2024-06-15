import { useState } from 'react';

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSideBar} className='self-center w-8 h-8 m-4'>
        <div className='flex flex-col'>
          <div className={`layers diagonal part-1 self-center ${isOpen ? 'open rounded-sm' : 'rounded-sm'}`}></div>
          <div className={`layers horizontal self-center ${isOpen ? 'open rounded-sm' : 'rounded-sm'}`}></div>
          <div className={`layers diagonal part-2 self-center ${isOpen ? 'open rounded-sm' : 'rounded-sm'}`}></div>
        </div>
      </button>
    </>
  );
};

