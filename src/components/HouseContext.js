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
  //loading
  setLoading(true);

    //create a function that checkes if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    }

    //get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]); 

    //get second value of price and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);
  
    // eslint-disable-next-line array-callback-return
    const newHouse = housesData.filter((house)=>{

      const housePrice = parseInt(house.price);

      //if all values are selected
      if(
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ){
        return house
      }

      //if country wasnot default
      if(isDefault(country) && isDefault(property) && isDefault(price)){
        return house;
      }

      if(!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country === country;
      }

      //if property was not default
      if (!isDefault(property) &&  isDefault(country)  && isDefault(price)){
        return house.type === property;
      }

      //if price was not default was not default
      if (isDefault(property) &&  isDefault(country)  && !isDefault(price)){
        if (housePrice >= minPrice && housePrice <= maxPrice){
          return house;
        }
      }

      //if country and property was not default 
      if (!isDefault(country) &&  !isDefault(property)  && isDefault(price)){
        return house.country === country && house.type === property;
      }

      //if country and price was not default 
      if (!isDefault(country) &&  isDefault(property)  && !isDefault(price)){
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      //if property and price was not default 
      if (isDefault(country) &&  !isDefault(property)  && !isDefault(price)){
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

    })
 
    setTimeout(()=>{
      return newHouse.length < 1 ? setHouses([]) : setHouses(newHouse);
      setLoading(false);
    },1000);
  };
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
