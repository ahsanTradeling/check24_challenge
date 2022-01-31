import React, {createContext, useState} from 'react';

export const CarouselContext = createContext({});

export const CarouselProvider = ({children}) => {
        const [state,setState]= useState({
            imageIndex: 0,
            width: 0,
            position:0,
            images:[]
        })

        const handlePrevious = ()=>{
            if (state.imageIndex === 0) {
                setState({
                    ...state,
                    imageIndex: state.images.length - 1,
                    position: state.position - (state.width * (state.images.length - 1))
                });
            }
           else{
                setState({
                    ...state,
                    imageIndex: state.imageIndex - 1,
                    position: state.position + state.width
                });
            }
        }
        const handleNext = ()=>{
            if (state.imageIndex === state.images.length - 1) {
                setState({
                    ...state,
                    imageIndex: 0,
                    position: 0
                });
            } else {
                setState({
                    ...state,
                    imageIndex: state.imageIndex + 1,
                    position: state.position - state.width
                });

            }
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
