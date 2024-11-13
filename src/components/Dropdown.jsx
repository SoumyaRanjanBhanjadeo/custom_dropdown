import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select an item');

  const items = ['First Item', 'Second Item', 'Third Item', 'Fourth Item', 'Fifth Item'];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:border-blue-500 flex items-center justify-between"
      >
        {selectedItem}
        <RiArrowDropDownLine className={`w-7 h-7 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}/>
      </div>
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-black rounded-md shadow-lg">
          {items.map((item) => (
            <li
              key={item}
              onClick={() => handleItemClick(item)}
              className="px-4 py-2 cursor-pointer border border-black hover:bg-blue-500 hover:text-white"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
