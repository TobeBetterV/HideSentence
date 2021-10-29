import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import * as Icon from "react-feather";
import "./style.css";
import Todo from "./Todo";
import { RightContext } from "../context/RightContext";

function Left({ setShowTest }) {
  const { todoList,saveDataFile, setTestList,selectTodo} =
    useContext(GlobalContext);
  const {setRightIsHidden,setBottomIsHidden} = useContext(RightContext)
  //开始测试
  const startTest = () => {
    //展开bottom，滚动到底部
    setBottomIsHidden(false)
    //筛选Testlist
    selectTodo()
    // console.log("clickbtn:testList");
    // console.log(testList);
  };

  return (
    <div className="left bg-gray-300 shadow-2xl rounded p-2">
      <div className="flex hMax400px flex-col items-center overflow-auto">
        {todoList.map(({ tag, state }, i) => (
          //index：每次刷新得到的序列,delHandler:用于传参数给子组件，子组件才可以操作removeTode。这种参数名一般为xxxHandler
          // key={i}：如果不加会报一个错，但似乎没啥影响
          <Todo
            key={i}
            tag={tag}
            index={i}
            isCompleted={state}
          ></Todo>
        ))}
      </div>
      <div className="flex w-584px mt-2 h-12 py-px">
      <div
        onClick={startTest}
        className="flex justify-center bgGrassGreen  w-full transition-all hover:bg-green-700 text-white p-2 rounded text-center items-center cursor-pointer"
      >
        开始练习
      </div>
      <div
        onClick={()=>{setRightIsHidden(false)}}
        className="flex justify-center bg-gray-500 ml-2 w-1/5 transition-all hover:bg-gray-700 text-white p-2 rounded text-center items-center cursor-pointer"
      >
        <Icon.PlusSquare size={20}></Icon.PlusSquare>
      </div>
      </div>
      {/* <div
        onClick={startTest}
        className="flex justify-center w-384px bgGrassGreen mt-2 h-12 transition-all hover:bg-green-700 text-white p-2 rounded text-center items-center cursor-pointer"
      >
        开始练习
      </div> */}
    </div>
  );
}
export default Left;
