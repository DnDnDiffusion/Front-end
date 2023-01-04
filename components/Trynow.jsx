import React from "react";

const Trynow = () => {
  return (
    <button
      href="#create"
      onClick={(e) => (e.target.className = "hidden")}
      className="
                fixed bottom-20 right-40 left-40 z-10
                rounded-full bg-[#EF4444] text-black font-bold p-4
                border-2 border-black text-2xl hover:bg-[#F87171] hover:text-white transition-all duration-500"
    >
      TRY NOW
    </button>
  );
};

export default Trynow;
