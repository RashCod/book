import React from "react";
import HTMLFlipBook from "react-pageflip";
// import styles from './Modal.module.css'
import shekspir from '../shekspir.json'




export const ModalShekspir = ({ modalActive, setModalActive }) => {



  return (
    <div className={modalActive ? "active modal" : "modal"}>
      <button className="close" onClick={() => setModalActive(false)}>
        Закрыть
      </button>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalContentBock">
          <HTMLFlipBook width={300} height={500}>
          <div className="demoPage page1"> </div>
            {
                shekspir.map((list,index) =><div key={index} className="demoPage"> <img src={list.img} alt="list" /></div>)
            }
            <div className="demoPage"></div>
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
};
