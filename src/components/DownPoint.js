import React, {useContext } from 'react'
import * as Icon from "react-feather";
import { GlobalContext } from '../context/GlobalContext';
import "./style.css";

function DownPont() {
    const { saveDataFile} =
    useContext(GlobalContext);
    return(
        <div onClick={saveDataFile} className="flex w-6 h-6 p-1 justify-center items-center rounded-full bg-gray-500 cursor-pointer text-gray-100 hover:bg-gray-800">
        <Icon.ArrowDown></Icon.ArrowDown>
      </div>
    )
}
export default DownPont