import React, { createContext, useState } from "react";
export const contextApi = createContext();
import homePages from "../../assets/images/asset"; 
import toast from "react-hot-toast";
export default function Context({ children }) {
  const home = homePages.filter((pro) => pro.type === "home");
  const[userInfo,setUserInfo]=useState([])
  const[authUser,setAuthUser]=useState([])
  console.log(userInfo)
     const office = homePages.filter((pro) => pro.type === "office");
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState(home);
  const [addCart, setAddToCart] = useState({});
  const hasProdcut = Object.values(addCart).some((pro) => pro > 0);
  const [add, setAdd] = useState(0);

  const handelAddToCart = (index) => {
    
    setAddToCart((addCart) => {
      let addtoCartItem = { ...addCart, [index]: (addCart[index] || 0) + 1 };
      const hasProdcut = Object.values(addtoCartItem).some((pro) => pro > 0);
      if (hasProdcut) {
        setAdd((prev) => prev  + 1);
        toast.success('Added')
      }
      console.log(addtoCartItem)
      return addtoCartItem;
    });
  };

  const removeCart = (index) => {
    setAddToCart((addCart) => ({ ...addCart, [index]: addCart[index] - 1 }));
    setAdd((prev) => Math.max(prev - 1, 0));
  };
  const homes = () => {
    setProducts(home);
    setOpen((prev) => !prev);
  };
  const offices = () => {
 
    setProducts(office);
    setOpen((prev) => !prev);
  
  };

  const total = () => {
    // let sum=0;

    for (let x in addCart) {
      if (addCart[x] > 0) {
        let itmes = homePages.find((pro) => pro.id === x);
        // console.log(itmes)
        //         sum+=(itmes.price) *addCart[x]
        //       }
      }
    }
    //  return sum;
  };


  const contextValues = {
    open,
    products,
    setProducts,
    setOpen,
    homes,
    offices,
    homePages,
    addCart,
    setAddToCart,
    handelAddToCart,
    removeCart,
    total,
    hasProdcut,
    add,
    setAdd,
    userInfo,
    setUserInfo,
    authUser,
    setAuthUser,

  };
  return (
    <div>
      <contextApi.Provider value={contextValues}>
        {children}
      </contextApi.Provider>
    </div>
  );
}
