import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link dan useLocation untuk routing

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("/"); // Menyimpan path yang aktif
  const location = useLocation(); // Mendapatkan lokasi path saat ini

  React.useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  return (
    <div className="w-64 h-full bg-white border-r-4 p-5">
      <div className="flex flex-col h-full">
        <p className="text-2xl font-bold mb-8 text-primary">Si Insap</p>

        <nav className="flex-1">
          <ul>
            <li className="mb-4">
              <ButtonSidebar
                link={"/stock"}
                activeMenu={activeMenu}
                name={"Stock"}
                iconPath={
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                }
              />
            </li>
            <li className="mb-4">
              <ButtonSidebar
                link={"/peminjaman"}
                activeMenu={activeMenu}
                name={"Peminjaman"}
                iconPath={
                  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                }
              />
            </li>
            <li className="mb-4">
              <ButtonSidebar
                link={"/status"}
                activeMenu={activeMenu}
                name={"Status"}
                height={24}
                width={24}
                iconPath={
                  <>
                    <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3m0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m2.646 1A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3z" />
                    <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0" />
                  </>
                }
              />
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <ButtonSidebar
            link={"/logout"}
            activeMenu={activeMenu}
            name={"Logout"}
            iconPath={
              <>
                <path
                  fillRule="evenodd"
                  d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// Button sidebar
const ButtonSidebar = ({ link ,activeMenu, name, iconPath, height = 22, width = 22 }) => {
  return (
    <Link
      to={link}
      className={`flex items-center p-3 text-lg font-semibold rounded ${
        activeMenu === link ? "text-primary" : "text-secondary"
      }`}
    >
      <span className="mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={height}
          height={width}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          {iconPath}
        </svg>
      </span>{" "}
      {name}
    </Link>
  );
};
