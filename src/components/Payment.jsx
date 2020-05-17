import React, { Component } from "react";
import { ProductConsumer } from "../components/context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
const { Paynow } = require("paynow");

class Payment extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { paymentOpen, closePayment, cartTotal } = value;
          if (!paymentOpen) {
            return null;
          } else {
            return (
              <PaymentModal>
                <div id="modal" className="container">
                  <div className="row">
                    <div className="col-8 mx-auto col-md-6 col-lg-4 text-center">
                      <h5>Make payment</h5>
                      <h6 className="text-blue">
                        <strong>
                          Amount: <span>$</span>
                          {cartTotal}
                        </strong>
                      </h6>
                      <h7>Please enter your details number below</h7>
                      <div class="input-group mb-3">
                        
                        <div class="input-group-prepend">
                          <button class="btn btn-outline-success" type="button">
                            Pay
                          </button>
                          <input
                            type="tel"
                            class="form-control"
                            placeholder="0771967513"
                            aria-label=""
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>

                      <Link to="/">
                        <ButtonContainer onClick={() => closePayment()}>
                          Store
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closePayment()}>
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </PaymentModal>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Payment;
const PaymentModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  .form-control {
    width: 75%;
  }

  #modal {
    background: var(--mainWhite);
    width: 600px;
    height: 70%;
  }
`;
