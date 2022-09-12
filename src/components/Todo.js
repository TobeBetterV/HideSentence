import React, { useContext } from "react";
import * as Icon from "react-feather";
import { GlobalContext } from "../context/GlobalContext";
import "./style.css";

function Todo({ tag, index, isCompleted, origin }) {
  const { removeTodo, checkTodo } = useContext(GlobalContext);
  // const stateStyle = {
  //   // 完成后划线
  //   TextDecoration: isCompleted ? "line-through white" : "",
  //   backgroundColor: isCompleted ? "#434B60" : "",
  // };

  return (
    <div
      className={`${
        isCompleted ? "bg-gray-light" : "bg-gray-200"
      } flex h16 items-center justify-between rounded mb-2 p-4 pb-2 w-full`}
    >
      <div className={`flex cursor-pointer`} onClick={() => checkTodo(index)}>
        <div className="content">
          <div className="origin select-none font-medium text-lg w-max-30rem truncate">
            {origin}
          </div>
          <div className="flex select-none font-normal w-max-30rem overflow-hidden">
            {tag.map((v, i) => {
              //加上下一个之后的长度
              const testLen = tag.slice(0,i+1).toString().length
              const totalLen = (testLen - i)*11 + (i+1) * 41.33
              //之前的长度
              const testLastLen = tag.slice(0,i).toString().length
              const totalLastLen = (testLastLen - i - 1)*11 + (i) * 41.33
              if (totalLen<440){
              return (
                <div
                key={i}
                  className={`left-tag ${
                    isCompleted ? "bg-gray-200" : "bg-gray-light"
                  } flex h-full rounded-full px-3 py-1 mr-1 mt-1`}
                >
                  <div className=" mr-1 text-gray-400 select-none">#</div>
                  {v}
                </div>
              );}else if(totalLastLen<480){
                return(
                <div
                key={i}
                  className={`left-tag ${
                    isCompleted ? "bg-gray-200" : "bg-gray-light"
                  } flex h-full rounded-full px-3 py-1 mr-1 mt-1`}
                >
                  <div className="text-gray-600 select-none">···</div>
                </div>)
              }
            })}
          </div>
        </div>
      </div>
      {/* 函数名后面加括号，代表是函数运行的结果，需要包一层变成函数 */}
      <Icon.Trash2
        onClick={() => removeTodo(index)}
        size={24}
        className="cursor-pointer text-gray-600 mr-2"
      />
    </div>
  );
}
export default Todo;
