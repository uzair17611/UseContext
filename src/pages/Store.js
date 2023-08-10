import React from 'react'
import { useContext } from 'react'
import Begincontext from '../context/Begincontext'
import Exportcontext from '../context/Exportcontext'

const Store = () => {
  const storeCtx = useContext(Begincontext)
  console.log(storeCtx.Product);
  return (
  //   <Exportcontext.Consumer>
  //     {(ctx)=>{
  //       {
  //         ctx.map(get => (
  //            <div className="col-10 col-md-4  mt-5">
  //            <div className="card" style={{ width: "18rem" }}>
  //              <div>
  //                <img
  //                  className="card-img-top"
  //                  src={get.url}
  //                  alt="Card image cap"
  //                />
  //              </div>
  //              <div className="card-body">
  //                <h5 className="card-title">{get.title}</h5>
  //                <p className="card-text">{get.desc}</p>
  //                <h5 className="card-title">{get.catagory}</h5>
  //                <h5 className="card-title">{get.price}</h5>
  //                <button className="btn btn-danger">bomb</button>
  //              </div>
  //            </div>
  //          </div>
  //         ))}

  //     }}
   
  //  </Exportcontext.Consumer>
  <h1>hello</h1>
  
  )
}

export default Store