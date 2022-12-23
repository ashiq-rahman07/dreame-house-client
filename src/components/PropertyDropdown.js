import React, { useContext, useState } from 'react';

//import icons
import {  RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from 'react-icons/ri'

//import headless ui
import { Menu } from '@headlessui/react';

import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  console.log(properties)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left flex justify-between'>
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Select Your Place</div>
        
        </div>
        {
          isOpen ? (
             <RiArrowDownSLine className='dropdown-icon-primary' />
           
          ) : (
              <RiArrowUpSLine className='dropdown-icon-primary' />
          )
        }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {
          properties.map((property, index) => {
            return (
              <Menu.Item
                onClick={() => setProperty(property)}
                className='hover:text-violet-700 transition'
                as='li'
                key={index}
              >{property}</Menu.Item>
            );
          })
        }
      </Menu.Items>

    </Menu>
  );
};

export default PropertyDropdown;
