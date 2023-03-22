import React from 'react'

const AccordionItem = ({ question, answer, onClick, isActive }) => {
  return (
    <div className="border-b text-tex ">
      <button
        className="w-full py-3 px-4 flex justify-between items-center"
        onClick={onClick}
      >
        <h3 className=' font-semibold text-left'>{question}</h3>
        <span>{isActive ? "-" : "+"}</span>
      </button>
      <div
        className={`${
          isActive ? "max-h-[15rem]" : "max-h-0"
        } overflow-hidden transition-all duration-500`}
      >
        <p className="p-4 font-light text-left">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem