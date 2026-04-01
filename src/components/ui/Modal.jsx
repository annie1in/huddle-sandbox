import React from "react";
import Button from "../../components/ui/Button";

export default function Modal({children}) {
  return (
    <div className="fixed inset-0 bg-black opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-150">
          <div className="bg-white rounded-sm p-3 flex flex-col gap-2 text-black">
            {children}
            <button className="w-32 bg-blue-400 rounded-2xl">Back to Home</button>
          </div>
        </div>
    </div>
  );  


}