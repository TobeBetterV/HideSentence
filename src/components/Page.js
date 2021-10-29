import React, { useEffect, useState,useContext } from "react";
import * as Icon from "react-feather";
import Bottom from './Bottom'
import Left from "./Left";
import Right from "./Right";
import InputPoint from './InputPoint'

function Page({ setShowTest }) {
  return (
    <div className="page overflow-hidden shadow-lg rounded flex flex-col flex-start">
      <div className="top flex flex-start overflow-hidden flex-none">
      <Left setShowTest={setShowTest}></Left>
      <Right></Right>
      </div>
      <Bottom></Bottom>
      <InputPoint></InputPoint>
    </div>
  );
}
export default Page;
