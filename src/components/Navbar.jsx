import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-2 pt-[13px]">
      <div>
        <button className="text-xl font-[600] text-[#F65858] mt-1">
          SocietalServe☀️
        </button>
      </div>
      <div className="flex text-xl gap-5 login">
        <button className="hidden md:block ">Register your NGO</button>
        <button className="hover:text-[#576CBC]">login</button>
        <button className="bg-[#576CBC] p-1 px-2 rounded-xl text-white">
          signup
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
