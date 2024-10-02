'use client'
import Modal from "./modal"
import useUserProgressStore from "@/store/userProgressStore";
import { useState, useEffect } from "react";

export default function SuccessModal(){
    let [isOpen, setIsOpen] = useState(false);
    const { progress, hideSubmitted} = useUserProgressStore();

    function open() {
      setIsOpen(true);
      console.log('checkout also opened')
    }
  
    function close() {
      setIsOpen(false);
      console.log(progress);
    }
  
    useEffect(() => {
      if (progress === "submitted") {
        open();
        console.log('')
      }
      return()=>{
        close()
      }
    }, [progress]);

    return (
        <Modal id={3} isOpen={isOpen} className={"modal"} close={close}>
            <h2>Success!</h2>
            <p>Your Order has been placed successfully.</p>
            <p>We will get back to you within a few minutes.</p>
            <p className="modal-actions">
                <button className="button" onClick={()=>hideSubmitted()}>Okay</button>
            </p>
        </Modal>
    )
}