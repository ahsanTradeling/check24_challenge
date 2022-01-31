import React, {createContext, useState} from 'react';

export const CarouselContext = createContext({});

export const CarouselProvider = ({children}) => {
        const [state,setState]= useState({
            imageIndex: 0
        })

        const handlePrevious = ()=>{

        }
        const handleNext = ()=>{

        }
        return (
            <CarouselContext.Provider value={{
                ...state,
                setContext : setState,
                handleNext,
                handlePrevious
            }}>
                {children}
            </CarouselContext.Provider>
        );
    }
;

export default CarouselProvider;
