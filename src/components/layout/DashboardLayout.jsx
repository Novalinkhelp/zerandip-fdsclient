import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Breadcrumb from "./Breadcrumb";

const DashboardLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-white relative">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="xl:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}

      <div className="flex-1 flex flex-col overflow-y-auto">
        <Breadcrumb />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 xl:p-10">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
