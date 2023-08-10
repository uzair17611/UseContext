import {Children, useEffect,useState} from "react"
import Begincontext from "./Begincontext"


const Exportcontext = (props) => {
  const [products,setproduct]=useState([])

  useEffect(()=>{
    fetch( ' https://fakestoreapi.com/products')
    .then((response)=>{
       return response.json()
    })
    .then((data)=>{
        setproduct(data)

    })

  },[])
  console.log(products)
   const getProduct={
    products:products

   }
    
  return (
  <Begincontext.Provider  value={getProduct}>
    {props.Children}
  </Begincontext.Provider>
  )
}

export default Exportcontext

