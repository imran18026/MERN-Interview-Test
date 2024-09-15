import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="mx-auto my-2 py-2 bg-blue-500">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        <h1 className="text-white text-2xl font-bold text-center">
          <Link href="/">M E R N Drawing App</Link>
        </h1>
        <nav>
          <ul className="flex justify-center gap-5">
            <li className="text-2xl text-center bg-green-300 rounded px-2 hover:bg-green-500 hover:cursor-pointer hover:text-white font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-2xl text-center bg-green-300 rounded px-2 hover:bg-green-500 hover:cursor-pointer hover:text-white font-bold">
              <Link href="/drawing/create">Create Drawing</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
