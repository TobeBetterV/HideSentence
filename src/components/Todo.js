import React ,{useContext}from "react";
import * as Icon from "react-feather";
import { GlobalContext } from "../context/GlobalContext";
import "./style.css";

function Todo({ tag, index, isCompleted }) {
  const{removeTodo,checkTodo} = useContext(GlobalContext)
  // const stateStyle = {
  //   // 完成后划线
  //   TextDecoration: isCompleted ? "line-through white" : "",
  //   backgroundColor: isCompleted ? "#434B60" : "",
  // };
  return (
    <div className="flex h16 items-center justify-between rounded mb-1 p-4 w-full bg-gray-200">
      <div className="flex cursor-pointer">
        <div onClick={() => checkTodo(index)} className="state mr-3">
          {isCompleted ? (
            <Icon.CheckCircle size={25} className="text-green-700" />
          ) : (
            <Icon.Circle size={25} className="text-gray-500" />
          )}
        </div>

        <div className="content font-thin text-xs">
          <div className="tag select-none text-gray-900 font-bold text-sm">
            {tag}
          </div>
        </div>
      </div>
      {/* 函数名后面加括号，代表是函数运行的结果，需要包一层变成函数 */}
      <Icon.Trash2
        onClick={() => removeTodo(index)}
        size={15}
        className="cursor-pointer text-gray-600"
      />
    </div>
  );
}
export default Todo;
