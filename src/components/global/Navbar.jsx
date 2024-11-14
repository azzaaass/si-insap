import React from "react";

const Navbar = () => {
  return (
    <header className="w-full py-4 flex justify-end items-center gap-4 pr-8">
      <p className="text-base">Hello Mr. Parman!</p>
      <AvatarWithBorder image={"https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2418"}/>
    </header>
  );
};

const AvatarWithBorder = ({image}) => {
  return (
    <img
      className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300"
      src={image}
      alt="Bordered avatar"
    />
  );
};

export default Navbar;
