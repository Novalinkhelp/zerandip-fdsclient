import {
  FileCog,
  Download,
  Plus,
  Search,
  EllipsisVerticalIcon,
} from "lucide-react";
import { useState } from "react";
import Table from "../../components/table/Table";

const HSCodeClassificationChange = () => {
  const [hsCodeChanges, setHsCodeChanges] = useState([
    {
      id: 1,
      code: "8708.30.00",
      name: "Brake System Parts",
      description: "Brakes and servo-brakes; parts thereof",
      palRate: "30 → 25",
      ssclRate: "15 → 12",
      eicKgRate: "5.25 → 4.5",
      vat: "16 → 16",
    },
    {
      id: 2,
      code: "8407.34.00",
      name: "Vehicle Engines",
      description: "Spark-ignition reciprocating piston engines, > 1,000 cc",
      palRate: "25 → 20",
      ssclRate: "10 → 8",
      eicKgRate: "4.75 → 4.0",
      vat: "16 → 14",
    },
    {
      id: 3,
      code: "8708.99.00",
      name: "Other Vehicle Parts",
      description: "Other parts and accessories for motor vehicles",
      palRate: "20 → 18",
      ssclRate: "12 → 10",
      eicKgRate: "3.5 → 3.0",
      vat: "16 → 16",
    },
    {
      id: 4,
      code: "8708.40.00",
      name: "Gear Boxes",
      description: "Gear boxes and parts thereof",
      palRate: "25 → 25",
      ssclRate: "12 → 15",
      eicKgRate: "4.25 → 4.5",
      vat: "16 → 16",
    },
    {
      id: 5,
      code: "8708.80.00",
      name: "Suspension Systems",
      description: "Suspension systems and parts thereof",
      palRate: "20 → 22",
      ssclRate: "10 → 12",
      eicKgRate: "3.75 → 4.0",
      vat: "16 → 16",
    },
    {
      id: 6,
      code: "8708.70.00",
      name: "Wheels and Parts",
      description: "Road wheels and parts and accessories thereof",
      palRate: "30 → 25",
      ssclRate: "15 → 12",
      eicKgRate: "4.5 → 4.0",
      vat: "16 → 16",
    },
    {
      id: 7,
      code: "8708.91.00",
      name: "Radiators",
      description: "Radiators and parts thereof",
      palRate: "25 → 22",
      ssclRate: "12 → 10",
      eicKgRate: "3.5 → 3.2",
      vat: "16 → 14",
    },
    {
      id: 8,
      code: "8708.50.00",
      name: "Drive Axles",
      description: "Drive-axles with differential and parts thereof",
      palRate: "25 → 25",
      ssclRate: "15 → 12",
      eicKgRate: "4.0 → 3.8",
      vat: "16 → 16",
    },
  ]);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeAllDropdowns = () => setActiveDropdown(null);

  const handleAction = (action, hsCodeChange) => {
    closeAllDropdowns();
    switch (action) {
      case "view":
        console.log("View:", hsCodeChange);
        break;
      case "edit":
        console.log("Edit:", hsCodeChange);
        break;
      case "delete":
        if (window.confirm(`Delete ${hsCodeChange.name}?`)) {
          setHsCodeChanges(
            hsCodeChanges.filter((c) => c.id !== hsCodeChange.id)
          );
        }
        break;
      default:
        break;
    }
  };

  const columns = [
    {
      key: "code",
      header: "HS Code Number",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.code}</span>
      ),
    },
    {
      key: "name",
      header: "Item",
      render: (item) => <span className="text-gray-800">{item.name}</span>,
    },
    {
      key: "description",
      header: "Description",
      render: (item) => (
        <span className="text-gray-600">{item.description}</span>
      ),
    },
    {
      key: "pal-rate",
      header: "Pal Rate(%)",
      render: (item) => <span className="text-gray-600">{item.palRate}</span>,
    },
    {
      key: "sscl-rate",
      header: "SSCL Rate(%)",
      render: (item) => <span className="text-gray-600">{item.ssclRate}</span>,
    },
    {
      key: "eic-kg-rate",
      header: "EIC/KG Rate(%)",
      render: (item) => <span className="text-gray-600">{item.eicKgRate}</span>,
    },
    {
      key: "vat",
      header: "Vat Percentage(%)",
      render: (item) => <span className="text-gray-600">{item.vat}</span>,
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
              className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white py-1.5 shadow-sm border border-gray-200 animate-slideInDown ${
                index >= data.length - 2 ? "bottom-full" : "top-full"
              }`}
            >
              <div className="p-1">
                <button
                  onClick={() => handleAction("view", item)}
                  className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-150 cursor-pointer"
                >
                  <span className="flex-1 text-left">View</span>
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
              <FileCog className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                HS Code Classification Change
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Manage HS code classification change.
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
              Add New HS Code Classification
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
            placeholder="Search hs code classifications..."
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table
          data={hsCodeChanges}
          columns={columns}
          currentPage={1}
          totalPages={2}
          onPageChange={(page) => console.log(`Page changed to ${page}`)}
        />
      </div>
    </div>
  );
};

export default HSCodeClassificationChange;
