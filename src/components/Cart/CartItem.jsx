import React from "react";

export default function CartItem({ item, value }) {



  
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          className="img-fluid"
          style={{ width: "5rem", height: "5rem" }}
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn btn-black max-1" onClick={() => decrement(id)}>
            -
          </span>
          <span>{count}</span>
          <span className="btn btn-black max-1" onClick={() => increment(id)}>
            +
          </span>
        </div>
      </div>
      {/* column close */}
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : $ {total}</strong>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className='cart-icon' onClick={()=> removeItem(id)}>
            < i className='fas fa-trash'></i>
        </div>
      </div>


    </div>
  );
}
