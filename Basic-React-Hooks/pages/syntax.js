import React, { useEffect, useState } from "react";

const Syntax = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  useEffect(() => {
    console.log("in useEffect");
    return () => {
      console.log("In useEffect Cleanup");
    };
  }, []);

  return <div></div>;
};

export default Syntax;
