import {
  Receipt,
  Download,
  Plus,
  Search,
  EllipsisVerticalIcon,
} from "lucide-react";
import { useState } from "react";
import Table from "../../components/table/Table";

const InvoiceMaster = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      code: "INV-2025-0001",
      name: "Simba Auto Parts Ltd",
      repName: "John Kamau",
      date: "2025-04-01",
      time: "09:15 AM",
      invTotal: "KES 124,500"
    },
    {
      id: 2,
      code: "INV-2025-0002",
      name: "Motorway Garage",
      repName: "Sarah Odhiambo",
      date: "2025-04-02",
      time: "10:30 AM",
      invTotal: "KES 78,200"
    },
    {
      id: 3,
      code: "INV-2025-0003",
      name: "Safari Fleet Services",
      repName: "Daniel Mwangi",
      date: "2025-04-02",
      time: "02:45 PM",
      invTotal: "KES 253,000"
    },
    {
      id: 4,
      code: "INV-2025-0004",
      name: "Pearl Auto Centre",
      repName: "Grace Okello",
      date: "2025-04-03",
      time: "11:20 AM",
      invTotal: "UGX 4,250,000"
    },
    {
      id: 5,
      code: "INV-2025-0005",
      name: "Kigali Auto Spares",
      repName: "Jean-Paul Kagame",
      date: "2025-04-04",
      time: "09:00 AM",
      invTotal: "RWF 875,000"
    },
    {
      id: 6,
      code: "INV-2025-0006",
      name: "Mountain Motors Ltd",
      repName: "Amina Hassan",
      date: "2025-04-05",
      time: "03:15 PM",
      invTotal: "TZS 5,450,000"
    },
    {
      id: 7,
      code: "INV-2025-0007",
      name: "Lakeside Motors",
      repName: "David Otieno",
      date: "2025-04-06",
      time: "10:45 AM",
      invTotal: "KES 94,300"
    },
    {
      id: 8,
      code: "INV-2025-0008",
      name: "Mwananchi Mechanics",
      repName: "Ibrahim Mwanza",
      date: "2025-04-07",
      time: "01:30 PM",
      invTotal: "TZS 2,750,000"
    }
  ]);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeAllDropdowns = () => setActiveDropdown(null);

  const handleAction = (action, invoice) => {
    closeAllDropdowns();
    switch (action) {
      case "view":
        console.log("View:", invoice);
        break;
      case "edit":
        console.log("Edit:", invoice);
        break;
      case "delete":
        if (window.confirm(`Delete ${invoice.name}?`)) {
          setInvoices(invoices.filter((c) => c.id !== invoice.id));
        }
        break;
      default:
        break;
    }
  };

  const columns = [
    {
      key: "code",
      header: "Invoice Number",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.code}</span>
      ),
    },
    {
      key: "name",
      header: "Customer Name",
      render: (item) => <span className="text-gray-800">{item.name}</span>,
    },
    {
      key: "rep-name",
      header: "Rep Name",
      render: (item) => <span className="text-gray-600">{item.repName}</span>,
    },
    {
      key: "date",
      header: "Date",
      render: (item) => <span className="text-gray-600">{item.date}</span>,
    },
    {
      key: "time",
      header: "Time",
      render: (item) => <span className="text-gray-600">{item.time}</span>,
    },
    {
      key: "inv-total",
      header: "Invoice Total",
      render: (item) => <span className="text-gray-600">{item.invTotal}</span>,
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
              <Receipt className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                Invoice Master Files
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Manage invoice master data.
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
              Add New Invoice
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
            placeholder="Search invoices..."
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table
          data={invoices}
          columns={columns}
          currentPage={1}
          totalPages={2}
          onPageChange={(page) => console.log(`Page changed to ${page}`)}
        />
      </div>
    </div>
  );
};

export default InvoiceMaster;
