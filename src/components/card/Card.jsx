import React, { useState } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { FcSimCardChip } from "react-icons/fc";
import { useSelector } from "react-redux";
import {BiLogoVisa} from "react-icons/bi"
import pattern from "../../assets/images/pattern.png"
import cvcPatern from "../../assets/images/cvc-patern.jpg"
const Card = () => {
  const name = useSelector((state) => state.inputValues.nameValue);
  const surname = useSelector((state) => state.inputValues.surnameValue);
  const code = useSelector((state) => state.inputValues.senderCardCode);
  const month = useSelector((state) => state.inputValues.month);
  const year = useSelector((state) => state.inputValues.year);
  const cvc = useSelector(state => state.inputValues.cvc)
  return (
    <div className="card">
      <div className="card-inner">
        <div className="front">
          <div className="pattern">
            <img src={pattern} alt="" />
            <img src={pattern} alt="" />
          </div>
          <div className="card-info">
            <h2>Visa Gold</h2>
            <span className="card-contact">
              <FcSimCardChip />
              <AiOutlineWifi />
            </span>
            <span className="code">{code}</span>
            <span className="date">{month}{month && "/"}{month && year}</span>
            <span className="person">
              <span>{name}</span>
              <span style={{ marginLeft: "10px" }}>{surname}</span>
            </span>
          </div>
          <span className="visa-logo">
            <BiLogoVisa />
            <span className="gold">Gold</span>
          </span>
        </div>
        <div className="back">
          <div className="bar"></div>
          <div className="card-cvc">
            <div>
              <img src={cvcPatern} alt="" />
            </div>
            <p>{cvc}</p>
          </div>
          <div className="card-text">
            <p>This is a virtual card design built using React and Sass. You can also design something like this </p>
          </div>
          <div className="signature">
            <p>CUSTOMER SIGNATURE</p>
            <BiLogoVisa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
// && code.match(/.{1,4}/g).join(' ')