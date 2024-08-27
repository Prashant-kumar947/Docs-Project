import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data,reference }) => {
  return (
    <motion.div drag 
    dragConstraints={reference}  
    whileDrag={{ scale: 1.2 }}
    dragElastic={0.1}
    dragTransition={{bounceStiffness:100,bounceDamping:30}}




    className=" relative w-60 h-72 rounded-[50px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden m-2">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full  left-0   ">
        <div className="flex items-center justify-between px-5 py-3 mb-2">
          <h5>{data.size}</h5>
          <span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.Close == true ? (
              <IoIosCloseCircleOutline color="#fff" size="1.3em" />
            ) : (
              <LuDownload />
            )}
          </span>
        </div>
        {data.FooterTag.isOpen == true ? (
          <div className={`card-footer w-full flex items-center justify-center ${data.FooterTag.Color == "blue" ?" bg-blue-600":"bg-green-600"} p-2`}>
            {data.FooterTag.tagDesc}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Card;
