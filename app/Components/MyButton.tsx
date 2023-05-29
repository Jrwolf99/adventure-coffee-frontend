import React from 'react';

export default function MyButton({ onClick, children }) {
  return (
    <div
      className="cursor-pointer hover:bg-green-100 text-green-500 py-2 px-4 rounded w-[100%] text-sm text-center font-bold bg-white shadow-md"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
