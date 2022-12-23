import React, { createContext, useEffect, useState } from 'react';

import { housesData } from '../data'

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  //return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    //remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    //set countries state
    setCountries(uniqueCountries);
  }, []);


  //return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    //remove duplicates
    const uniqueProperties = ['Properties (any)', ...new Set(allProperties)];

    //set countries state
    setProperties(uniqueProperties);
  }, [])

  const handleClick = () => {
  

    //create a function that checkes if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    }
    //get first value of price and parse it to number
    const minNumber = parseInt(price.split(' ')[0]);
    //get second value of price and parse it to number
    const maxNumber = parseInt(price.split(' ')[2]);
  
    const newHouse = housesData.filter((house)=>{
      console.log(house.price)
    })
    return newHouse;
  }
  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick

    }}>{children}</HouseContext.Provider>
  );
};

export default HouseContextProvider;
