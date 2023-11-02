import { createContext, useState } from "react";

export const ProductContext =createContext(null)

export default function Product({children}){
    const [postDetails,setPostDetails]=useState()
    return(
        <ProductContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </ProductContext.Provider>
    )
}