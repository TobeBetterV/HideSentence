import React, { useEffect, useState } from "react";
import Page from "./Page";
import "./style.css";
import ReactMarkdown from "react-markdown";
import * as Icon from "react-feather";
import { renderToString } from "react-dom/server";
import GlobalContextProvider from "../context/GlobalContext";
import RightContextProvider from "../context/RightContext";

function App() {
  //显示测试界面
  const [showTest, setShowTest] = useState({
    overflow: "hidden",
  });

  return (
    <div style={showTest} className="bg-gray-100 h-screen flex items-center justify-center">
      <GlobalContextProvider>
        <RightContextProvider>
          <Page></Page>
        </RightContextProvider>
      </GlobalContextProvider>
    </div>
  );
}
export default App;
