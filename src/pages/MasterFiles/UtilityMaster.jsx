import {
  Wrench,
  Download,
  Plus,
  Search,
  EllipsisVerticalIcon,
} from "lucide-react";
import { useState } from "react";
import Table from "../../components/table/Table";
import Modal from "../../components/shared/Modal";
import { utilityMasterConfig } from "../../config/formFieldsConfig";

const UtilityMaster = () => {
  const [utilities, setUtilities] = useState([
    {
      id: 1,
      code: "UTIL001",
      reference: "EL-2025-001",
      description: "Electricity Bill - Main Office",
      period: "Jan 2025",
      amount: "KES 75,000"
    },
    {
      id: 2,
      code: "UTIL002",
      reference: "WT-2025-003",
      description: "Water Utilities - Nairobi Branch",
      period: "Jan 2025",
      amount: "KES 12,500"
    },
    {
      id: 3,
      code: "UTIL003",
      reference: "IN-2025-007",
      description: "Internet Services - All Branches",
      period: "Jan 2025",
      amount: "KES 45,000"
    },
    {
      id: 4,
      code: "UTIL004",
      reference: "EL-2025-010",
      description: "Electricity Bill - Mombasa Branch",
      period: "Jan 2025",
      amount: "KES 28,000"
    },
    {
      id: 5,
      code: "UTIL005",
      reference: "PH-2025-015",
      description: "Phone Services - Corporate",
      period: "Jan 2025",
      amount: "KES 18,500"
    },
    {
      id: 6,
      code: "UTIL006",
      reference: "SE-2025-018",
      description: "Security Services - All Locations",
      period: "Jan 2025",
      amount: "KES 120,000"
    },
    {
      id: 7,
      code: "UTIL007",
      reference: "WT-2025-020",
      description: "Water Utilities - Kampala Office",
      period: "Jan 2025",
      amount: "UGX 1,200,000"
    },
    {
      id: 8,
      code: "UTIL008",
      reference: "GN-2025-025",
      description: "Generator Fuel - Dar es Salaam",
      period: "Jan 2025",
      amount: "TZS 850,000"
    }
  ]);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: "create",
    data: {}
  });

  const closeAllDropdowns = () => setActiveDropdown(null);

  const handleCreate = () => {
    closeAllDropdowns();
    setModalState({
      isOpen: true,
      mode: "create",
      data: {}
    });
  }

  const handleView = (utility) => {
    closeAllDropdowns();
    setModalState({
      isOpen: true,
      mode: "view",
      data: utility
    });
  }

  const handleEdit = (utility) => {
    closeAllDropdowns();
    setModalState({
      isOpen: true,
      mode: "edit",
      data: utility
    })
  }

  const handleDelete = (utility) => {
    closeAllDropdowns();
    if (window.confirm(`Delete ${utility.code} - ${utility.description}?`)) {
      setUtilities(utilities.filter((u) => u.id !== utility.id));
    }
  }

  const handleSubmit = (formData) => {
    closeAllDropdowns();
    if (modalState.mode === "create") {
      setUtilities([...utilities, { ...formData, id: Date.now() }])
    } else {
      setUtilities(
        utilities.map((utility) =>
          utility.id === modalState.data.id ? { ...utility, ...formData } : utility)
      );
    }
  }

  const columns = [
    {
      key: "code",
      header: "Expenses Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.code}</span>
      ),
    },
    {
      key: "reference",
      header: "Expense Reference No",
      render: (item) => <span className="text-gray-800">{item.reference}</span>,
    },
    {
      key: "description",
      header: "Description",
      render: (item) => <span className="text-gray-600">{item.description}</span>,
    },
    {
      key: "period",
      header: "Period",
      render: (item) => <span className="text-gray-600">{item.period}</span>,
    },
    {
      key: "amount",
      header: "Amount",
      render: (item) => <span className="text-gray-600">{item.amount}</span>,
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
                  onClick={() => handleView(item)}
                  className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-150 cursor-pointer"
                >
                  <span className="flex-1 text-left">View Details</span>
                </button>
                <button
                  onClick={() => handleEdit(item)}
                  className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-150 cursor-pointer"
                >
                  <span className="flex-1 text-left">Edit</span>
                </button>
                <div className="my-1 border-t border-gray-100"></div>
                <button
                  onClick={() => handleDelete(item)}
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
              <Wrench className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                Utility Master Files
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Manage Utility master data.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-col xs:flex-row items-start xs:items-center max-xs:w-full">
            <button className="flex items- justify-center max-xs:w-full px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-colors cursor-pointer">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button
              className="flex items-center justify-center max-xs:w-full px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors cursor-pointer"
              onClick={handleCreate}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Utility
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
            placeholder="Search utility..."
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table
          data={utilities}
          columns={columns}
          currentPage={1}
          totalPages={2}
          onPageChange={(page) => console.log(`Page changed to ${page}`)}
        />
      </div>

      <Modal
        title={utilityMasterConfig.title}
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        mode={modalState.mode}
        initialData={modalState.data}
        tabs={utilityMasterConfig.tabs}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default UtilityMaster;
