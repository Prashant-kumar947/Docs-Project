import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {

const ref=useRef(null);

  const data =[ {
    desc: "hey i am learning object creation.",
    size: ".9mb",
    Close: false,
    FooterTag: {
      isOpen:true,
      tagDesc: "Download Now",
      Color: "blue",
    }
  },
  {
    desc: "Hey i Created this Docs project successfully.",
    size: ".4mb",
    Close: true  ,
    FooterTag: {
      isOpen:true,
      tagDesc: "Upload ",
      Color: "green",
    }
  },
  
   {
    desc: "UI project is complete. now i am going to implement drag functions using framer. ",
    size: ".9mb",
    Close: false,
    FooterTag: {
      isOpen:false,
      tagDesc: "Upload",
      Color: "green",
    }
  }];
  return (
    <div  ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full  flex flex-wrap">
      {data.map((item, index) => (
        <Card  data={item} reference={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
