import React, { useEffect, useState,useContext } from "react";
import * as Icon from "react-feather";
import { GlobalContext } from "../../context/GlobalContext";
import "../style.css";
import {confetti} from "../../congrats";

function Origin() {
  const {testList,setTestList,setSwingAnimation} = useContext(GlobalContext)
  const origin = testList[0].origin
  const [testOriginBoxStyle, setTestOriginBoxStyle] = useState({
    height: "80px",
    background: "rgb(229, 231, 235)",
  });
  const swingStyle = {
    animation: "0.5s linear 0.2s 1 normal swing",
  }
  // Origin输入框被点击时
  const originBoxOnfocus = (e) => {
    setTestOriginBoxStyle({ height: "105px" });
  };
  // tran输入框失去焦点时,由textarea标签中的onblur控制
  const originBoxOnBlur = (e) => {
    const testOrigin = document.getElementById("testOriginText");
    const testOriginValue = testOrigin.value;

    setTimeout((e) => {
      if (testOriginValue.length <= 80) {
        setTestOriginBoxStyle({
          height: "75px",
          background: "rgb(229, 231, 235)",
        });
      }
    }, 100);
  }; 
  //点击完成按钮
  const originBtnClick = () => {
    const testOrigin = document.getElementById("testOriginText");
    const testOriginValue = testOrigin.value;
    //  origin转JSON然后去掉两端的双引号,以下两种方式都可以
    // const originWinhout = JSON.stringify(origin).replace("\"","").replace("\"","")
    const originWinhout = JSON.parse(JSON.stringify(origin));

    console.log(testOriginValue);
    console.log(originWinhout);
    if (testOriginValue == originWinhout) {
      //撒花🎉
      confetti.start()
      setTimeout(() => {
        const result = [...testList]
        result.shift()
        //如果剩余列表不为空，执行setTestList，如果为空，不再清除删除元素。
        if (result.length){
          document.getElementById("testOriginText").value = ""
          setTestList(result)
        }else{
          alert("完成")
        }
        confetti.stop()
    }, 1000);
    
    } else {
      console.log("输入错误")
      //输入错误抖动效果
      setSwingAnimation(swingStyle)
      setTimeout(() => {
        setSwingAnimation({})
      }, 1500);
    }
  };
  return (
    <div className="mt-1 flex flex-col justify-start mb-6">
      <div className=" text-sm textGrassGreen">原文</div>
      <div
        style={testOriginBoxStyle}
        className=" originBox transition-all flex rounded-lg bg-gray-100 w-full flex-col pl-4 p-2 justify-between items-end mt-2"
      >
        <textarea
          onKeyPress={(e) => {
            if (e.key == "Enter" && e.target.value) {
              originBtnClick();
            }
          }}
          onFocus={originBoxOnfocus}
          // onBlur={originBoxOnBlur}
          maxLength="135"
          name=""
          id="testOriginText"
          placeholder="在这里输入英文原文……"
          className=" mt-1  w-full flex-grow none resize-none outline-none bg-gray-100 bg-opacity-0"
        ></textarea>
        <div className="flex justify-end w-full mTop-15 width8">
          {/* <div className="originBack rounded-lg bg-gray-600 flex items-center justify-start ">
            <Icon.ChevronLeft size={17} className="text-gray-500 pl-1" />
          </div> */}
          <div
            onClick={originBtnClick}
            className="originGo rounded-lg bgGrassGreen flex items-center justify-center text-gray-100 select-none"
          >
            →{/* <Icon.ChevronRight size={25} className="text-gray-100" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Origin;
