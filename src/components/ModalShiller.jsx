import React from "react";
import HTMLFlipBook from "react-pageflip";
// import styles from './Modal.module.css'
import shiller from '../shiller.json'




export const ModalShiller = ({ ShillerActive, setShillerActive }) => {



  return (
    <div className={ShillerActive ? "active modal" : "modal"}>
      <button className="close" onClick={() => setShillerActive(false)}>
        Закрыть
      </button>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalContentBock">
          <HTMLFlipBook width={300} height={500}>
          <div className="demoPage page1"> </div>
            {
                shiller.map((list,index) =><div key={index} className="demoPage"> <img src={list.img} alt="list" /></div>)
            }
            <div className="demoPage"></div>
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
};
