import {
  Truck,
  Download,
  Plus,
  Search,
  EllipsisVerticalIcon,
} from "lucide-react";
import { useState } from "react";
import Table from "../../components/table/Table";

const TransportAgentMaster = () => {
  const [transportAgents, setTransportAgents] = useState([
    {
      id: 1,
      code: "TA001",
      name: "Swift Logistics Ltd",
      address: "123 Transport Road, Nairobi, Kenya",
      contactName: "John Kamau",
    },
    {
      id: 2,
      code: "TA002",
      name: "East Africa Freighters",
      address: "456 Cargo Street, Mombasa, Kenya",
      contactName: "Sarah Odhiambo",
    },
    {
      id: 3,
      code: "TA003",
      name: "Serengeti Transport",
      address: "789 Delivery Lane, Dar es Salaam, Tanzania",
      contactName: "Ibrahim Mwanza",
    },
    {
      id: 4,
      code: "TA004",
      name: "Pearl Cargo Movers",
      address: "234 Shipping Road, Kampala, Uganda",
      contactName: "Grace Okello",
    },
    {
      id: 5,
      code: "TA005",
      name: "Kigali Express Services",
      address: "567 Logistics Avenue, Kigali, Rwanda",
      contactName: "Jean-Paul Kagame",
    },
    {
      id: 6,
      code: "TA006",
      name: "Mountain Transporters",
      address: "890 Freight Street, Arusha, Tanzania",
      contactName: "Amina Hassan",
    },
    {
      id: 7,
      code: "TA007",
      name: "Lake Region Movers",
      address: "123 Shipping Lane, Kisumu, Kenya",
      contactName: "David Otieno",
    },
    {
      id: 8,
      code: "TA008",
      name: "Safari Freight Services",
      address: "456 Transport Park, Nakuru, Kenya",
      contactName: "Elizabeth Wanjiku",
    }
  ]);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeAllDropdowns = () => setActiveDropdown(null);

  const handleAction = (action, transportAgent) => {
    closeAllDropdowns();
    switch (action) {
      case "view":
        console.log("View:", transportAgent);
        break;
      case "edit":
        console.log("Edit:", transportAgent);
        break;
      case "delete":
        if (window.confirm(`Delete ${transportAgent.name}?`)) {
          setTransportAgents(transportAgents.filter((c) => c.id !== transportAgent.id));
        }
        break;
      default:
        break;
    }
  };

  const columns = [
    {
      key: "code",
      header: "Agent Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.code}</span>
      ),
    },
    {
      key: "name",
      header: "Agent Name",
      render: (item) => <span className="text-gray-800">{item.name}</span>,
    },
    {
      key: "address",
      header: "Address",
      render: (item) => <span className="text-gray-600">{item.address}</span>,
    },
    {
      key: "contact-name",
      header: "Contact Name",
      render: (item) => <span className="text-gray-600">{item.contactName}</span>,
    },
    {
      key: "actions",
      header: "",
      render: (item, index, data) => (
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveDropdown(activeDropdown === item.id ? null : item.id);
            }}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" />
          </button>

          {activeDropdown === item.id && (
            <div
              className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white py-1.5 shadow-sm border border-gray-200 animate-slideInDown ${index >= data.length - 2 ? "bottom-full" : "top-full"
                }`}
            >
              <div className="p-1">
                <button
                  onClick={() => handleAction("view", item)}
                  className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-150 cursor-pointer"
                >
                  <span className="flex-1 text-left">View Details</span>
                </button>
                <button
                  onClick={() => handleAction("edit", item)}
                  className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-150 cursor-pointer"
                >
                  <span className="flex-1 text-left">Edit</span>
                </button>
                <div className="my-1 border-t border-gray-100"></div>
                <button
                  onClick={() => handleAction("delete", item)}
                  className="flex w-full items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-150 cursor-pointer"
                >
                  <span className="flex-1 text-left">Delete</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div onClick={closeAllDropdowns}>
      {/* Page Header */}
      <div className="mb-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="mb-4 sm:mb-0 mr-0 sm:mr-4 md:mr-5 p-2.5 sm:p-3 md:p-3.5 bg-blue-50 rounded-xl text-blue-600 shadow-sm">
              <Truck className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                Transport Agent Master Files
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Manage Transport agent master data.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-col xs:flex-row items-start xs:items-center max-xs:w-full">
            <button className="flex items- justify-center max-xs:w-full px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-colors cursor-pointer">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center justify-center max-xs:w-full px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors cursor-pointer">
              <Plus className="h-4 w-4 mr-2" />
              Add New Transport Agent
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="relative w-full sm:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search transport agents..."
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table
          data={transportAgents}
          columns={columns}
          currentPage={1}
          totalPages={2}
          onPageChange={(page) => console.log(`Page changed to ${page}`)}
        />
      </div>
    </div>
  );
};

export default TransportAgentMaster;
