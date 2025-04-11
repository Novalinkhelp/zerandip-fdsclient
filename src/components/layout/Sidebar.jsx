import {
  Home,
  Menu,
  X,
  FileTextIcon,
  ShoppingCart,
  DollarSign,
  Package,
  BarChart2Icon,
  Settings2,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router";
import { useEffect, useRef } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { path: "/", name: "Dashboard", icon: <Home size={20} /> },
    {
      path: "/master-data",
      name: "Master Data",
      icon: <FileTextIcon size={20} />,
    },
    {
      path: "/sales-transactions",
      name: "Sales & Transactions",
      icon: <ShoppingCart size={20} />,
    },
    {
      path: "/finance-accounting",
      name: "Finance & Accounting",
      icon: <DollarSign size={20} />,
    },
    {
      path: "/inventory-stock",
      name: "Inventory & Stock",
      icon: <Package size={20} />,
    },
    {
      path: "/reports-analytics",
      name: "Reports & Analytics",
      icon: <BarChart2Icon size={20} />,
    },
    {
      path: "/user-system-management",
      name: "User & System Management",
      icon: <Settings2 size={20} />,
    },
  ];

  const user = {
    name: "John Doe",
    role: "Admin",
    avatar: "https://picsum.photos/40",
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        if (window.innerWidth < 1280 && isOpen) {
          toggleSidebar();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <>
      {/* Mobile toggle button (only visible on mobile) */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="xl:hidden fixed left-0 top-1/2 transform -translate-y-1/2 z-30 bg-blue-600 text-white py-4 px-1 rounded-r-lg shadow-lg transition-all duration-300 hover:bg-blue-700 hover:px-1.5"
          aria-label="Open sidebar"
        >
          <ChevronRight size={18} />
        </button>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`
          ${isOpen ? "w-80" : "w-0 xl:w-20"}
          xl:relative fixed xl:top-0 top-0 left-0 z-40
          transition-all duration-300 h-full flex flex-col bg-blue-600 text-white overflow-hidden
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6">
          {isOpen && (
            <h1 className="text-2xl font-bold" aria-label="Application Name">
              Zerendib
            </h1>
          )}

          {isOpen ? (
            <button
              onClick={toggleSidebar}
              className="p-3 rounded-lg hover:bg-white/20 transition-colors duration-200 cursor-pointer focus:outline-none"
              aria-label="Toggle Sidebar"
            >
              <X
                size={20}
                className="text-blue-200 transform transition-transform duration-300 hover:rotate-90 hover:text-white "
              />
            </button>
          ) : (
            <button
              onClick={toggleSidebar}
              className="w-full flex items-center justify-center py-1.5 rounded-lg hover:bg-white/20 transition-colors duration-200 cursor-pointer focus:outline-none"
              aria-label="Toggle Sidebar"
            >
              <Menu
                size={20}
                className="text-white transform transition-transform duration-300 hover:scale-110 "
              />
            </button>
          )}
        </div>

        {/* Menu Label */}
        {isOpen && (
          <div className="px-6 py-2">
            <p className="text-sm">Main Menu</p>
          </div>
        )}

        <ul className="flex-1 space-y-2.5 px-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center justify-center py-3 px-3 rounded-r cursor-pointer transition-all duration-200 hover:bg-blue-500 hover:pl-5 ${
                    isActive ? "bg-blue-500 border-l-2 border-white" : ""
                  }`
                }
                aria-label={item.name}
                onClick={() => {
                  if (window.innerWidth < 1280) {
                    toggleSidebar();
                  }
                }}
              >
                <div className="transform transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </div>
                {isOpen && (
                  <span className="ml-4 transition-opacity duration-300">
                    {item.name}
                  </span>
                )}
                {isOpen && (
                  <ChevronRight
                    size={20}
                    className="ml-auto transition-transform duration-200 group-hover:translate-x-1"
                  />
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* User Section */}
        <div className="mt-auto border-t border-blue-500 px-3 py-2">
          <div
            className="px-3 py-3 rounded flex items-center transition-all duration-200 hover:bg-blue-500 hover:pl-5 cursor-pointer group"
            onClick={() => console.log("Viewing profile...")}
            aria-label="User Profile"
          >
            <img
              src={user.avatar}
              alt={`${user.name}'s profile`}
              className={`rounded-full object-cover transition-all duration-200 ${
                isOpen ? "w-10 h-10" : "w-5 h-5"
              } group-hover:scale-110`}
            />
            {isOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-blue-200">{user.role}</p>
              </div>
            )}
            {isOpen && (
              <ChevronRight
                size={20}
                className="ml-auto transition-transform duration-200 group-hover:translate-x-1"
              />
            )}
          </div>
          <button
            onClick={() => console.log("Logging out...")}
            className="w-full flex items-center p-4 cursor-pointer transition-all duration-200 hover:bg-blue-500 hover:pl-6 rounded group"
            aria-label="Logout"
          >
            <LogOut
              size={20}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            {isOpen && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
