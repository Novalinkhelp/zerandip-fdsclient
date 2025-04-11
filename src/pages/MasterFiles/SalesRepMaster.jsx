import {
  UserRound,
  Download,
  Plus,
  Search,
  EllipsisVerticalIcon,
} from "lucide-react";
import { useState } from "react";
import Table from "../../components/table/Table";

const SalesRepMaster = () => {
  const [salesReps, setSalesReps] = useState([
    {
      id: 1,
      code: "SR001",
      name: "John Kamau",
      accountCode: "ACC-SR-001",
      monthlyTarget: "KES 1,500,000",
      region: "Nairobi Central",
      phone: "+254-722-1234567",
      email: "j.kamau@zerendib.com"
    },
    {
      id: 2,
      code: "SR002",
      name: "Sarah Odhiambo",
      accountCode: "ACC-SR-002",
      monthlyTarget: "KES 1,250,000",
      region: "Nairobi West",
      phone: "+254-733-2345678",
      email: "s.odhiambo@zerendib.com"
    },
    {
      id: 3,
      code: "SR003",
      name: "Daniel Mwangi",
      accountCode: "ACC-SR-003",
      monthlyTarget: "KES 1,800,000",
      region: "Mombasa",
      phone: "+254-722-3456789",
      email: "d.mwangi@zerendib.com"
    },
    {
      id: 4,
      code: "SR004",
      name: "Grace Okello",
      accountCode: "ACC-SR-004",
      monthlyTarget: "UGX 65,000,000",
      region: "Kampala",
      phone: "+256-772-4567890",
      email: "g.okello@zerendib.com"
    },
    {
      id: 5,
      code: "SR005",
      name: "Ibrahim Mwanza",
      accountCode: "ACC-SR-005",
      monthlyTarget: "TZS 45,000,000",
      region: "Dar es Salaam",
      phone: "+255-744-5678901",
      email: "i.mwanza@zerendib.com"
    },
    {
      id: 6,
      code: "SR006",
      name: "Jean-Paul Kagame",
      accountCode: "ACC-SR-006",
      monthlyTarget: "RWF 22,000,000",
      region: "Kigali",
      phone: "+250-788-6789012",
      email: "jp.kagame@zerendib.com"
    },
    {
      id: 7,
      code: "SR007",
      name: "David Otieno",
      accountCode: "ACC-SR-007",
      monthlyTarget: "KES 950,000",
      region: "Kisumu",
      phone: "+254-722-7890123",
      email: "d.otieno@zerendib.com"
    },
    {
      id: 8,
      code: "SR008",
      name: "Amina Hassan",
      accountCode: "ACC-SR-008",
      monthlyTarget: "TZS 35,000,000",
      region: "Arusha",
      phone: "+255-744-8901234",
      email: "a.hassan@zerendib.com"
    }
  ]);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeAllDropdowns = () => setActiveDropdown(null);

  const handleAction = (action, salesRep) => {
    closeAllDropdowns();
    switch (action) {
      case "view":
        console.log("View:", salesRep);
        break;
      case "edit":
        console.log("Edit:", salesRep);
        break;
      case "delete":
        if (window.confirm(`Delete ${salesRep.name}?`)) {
          setSalesReps(salesReps.filter((c) => c.id !== salesRep.id));
        }
        break;
      default:
        break;
    }
  };

  const columns = [
    {
      key: "code",
      header: "Rep Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.code}</span>
      ),
    },
    {
      key: "name",
      header: "Rep Name",
      render: (item) => <span className="text-gray-800">{item.name}</span>,
    },
    {
      key: "account-code",
      header: "Account Code",
      render: (item) => <span className="text-gray-600">{item.accountCode}</span>,
    },
    {
      key: "monthly-target",
      header: "Monthly Target",
      render: (item) => <span className="text-gray-600">{item.monthlyTarget}</span>,
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
              <UserRound className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                Sales Rep Master Files
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Manage Sales rep master data.
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
              Add New Sales Rep
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
            placeholder="Search sales reps..."
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table
          data={salesReps}
          columns={columns}
          currentPage={1}
          totalPages={2}
          onPageChange={(page) => console.log(`Page changed to ${page}`)}
        />
      </div>
    </div>
  );
};

export default SalesRepMaster;
