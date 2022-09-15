import React, { useState, useContext, useEffect } from "react";
import * as Icon from "react-feather";
import { GlobalContext } from "../../context/GlobalContext";
import { RightContext } from "../../context/RightContext";
import "../style.css";

function WordBlock() {
  const { isChecked, setIsChecked } = useContext(RightContext);
  const { userAnswer, testList, testTips, setTestTips } =
    useContext(GlobalContext);
  // 这里加空格是为了多识别一次，让tips显示下一个单词
  const userAnswerList = (userAnswer + " ").split(" ");
  const Answer = testList[0].origin;
  const answerList = Answer.split(" ");
  let errorOccor = false;

  return (
    <div
      id="tranInclude"
      className="flex flex-wrap flex-row w-full flex-grow none content-start bg-opacity-0M"
    >
      {userAnswerList.map((v, i) => {
        console.log(answerList[i]);
        if (v == answerList[i]) {
          return <div className="answerRight">{v}</div>;
        } 
        // else if (answerList[i]) {
        //   if (
        //     v.slice(0, -1) == answerList[i].slice(0, -1) ||
        //     (v == answerList[i].slice(0, -1) &&
        //       ["?", ",", "."].includes(answerList[i][-1]))
        //   ) {
        //     return <div className="answerRight">{v}</div>;
        //   }
        // }
         else if (errorOccor) {
          return <div className="answerWarning">{v}</div>;
        } else {
          setTestTips(answerList[i]);
          errorOccor = true;
          return <div className="answerFalse">{v}</div>;
        }
      })}
    </div>
  );
}
export default WordBlock;
