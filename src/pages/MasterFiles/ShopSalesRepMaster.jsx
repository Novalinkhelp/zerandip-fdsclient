import {
  ShoppingCart,
  Download,
  Plus,
  Search,
  EllipsisVerticalIcon,
} from "lucide-react";
import { useState } from "react";
import Table from "../../components/table/Table";

const ShopSalesRepMaster = () => {
  const [shopReps, setShopReps] = useState([
    {
      id: 1,
      code: "SHOP001",
      repCode: "SR001",
      name: "James Kimani",
      location: "Nairobi CBD Branch",
      contactNo: "+254-711-1122334",
      email: "j.kimani@zerendib.com"
    },
    {
      id: 2,
      code: "SHOP002",
      repCode: "SR002",
      name: "Mary Wangui",
      location: "Westlands Mall Shop",
      contactNo: "+254-722-2233445",
      email: "m.wangui@zerendib.com"
    },
    {
      id: 3,
      code: "SHOP003",
      repCode: "SR003",
      name: "Robert Ouko",
      location: "Mombasa Road Outlet",
      contactNo: "+254-733-3344556",
      email: "r.ouko@zerendib.com"
    },
    {
      id: 4,
      code: "SHOP004",
      repCode: "SR004",
      name: "Patricia Nambi",
      location: "Kampala City Centre",
      contactNo: "+256-772-4455667",
      email: "p.nambi@zerendib.com"
    },
    {
      id: 5,
      code: "SHOP005",
      repCode: "SR005",
      name: "Ahmed Hussein",
      location: "Dar es Salaam Plaza",
      contactNo: "+255-744-5566778",
      email: "a.hussein@zerendib.com"
    },
    {
      id: 6,
      code: "SHOP006",
      repCode: "SR006",
      name: "Claudette Uwase",
      location: "Kigali Trade Center",
      contactNo: "+250-788-6677889",
      email: "c.uwase@zerendib.com"
    },
    {
      id: 7,
      code: "SHOP007",
      repCode: "SR007",
      name: "Michael Okoth",
      location: "Kisumu Lakeside Mall",
      contactNo: "+254-722-7788990",
      email: "m.okoth@zerendib.com"
    },
    {
      id: 8,
      code: "SHOP008",
      repCode: "SR008",
      name: "Grace Mwangi",
      location: "Arusha Shopping Center",
      contactNo: "+255-744-8899001",
      email: "g.mwangi@zerendib.com"
    }
  ]);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeAllDropdowns = () => setActiveDropdown(null);

  const handleAction = (action, shopRep) => {
    closeAllDropdowns();
    switch (action) {
      case "view":
        console.log("View:", shopRep);
        break;
      case "edit":
        console.log("Edit:", shopRep);
        break;
      case "delete":
        if (window.confirm(`Delete ${shopRep.name}?`)) {
          setShopReps(shopReps.filter((c) => c.id !== shopRep.id));
        }
        break;
      default:
        break;
    }
  };

  const columns = [
    {
      key: "code",
      header: "Shop Rep Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.code}</span>
      ),
    },
    {
      key: "rep-code",
      header: "Rep Code",
      render: (item) => <span className="text-gray-800">{item.repCode}</span>,
    },
    {
      key: "name",
      header: "Shop Rep Name",
      render: (item) => <span className="text-gray-600">{item.name}</span>,
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
              <ShoppingCart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                Shop Sales Rep Master Files
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Manage Shop sales rep master data.
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
              Add New Shop Sales Rep
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
            placeholder="Search shop sales rep..."
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table
          data={shopReps}
          columns={columns}
          currentPage={1}
          totalPages={2}
          onPageChange={(page) => console.log(`Page changed to ${page}`)}
        />
      </div>
    </div>
  );
};

export default ShopSalesRepMaster;
