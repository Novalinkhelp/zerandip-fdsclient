import {
  BadgePercent,
  Download,
  Plus,
  Search,
  EllipsisVerticalIcon,
} from "lucide-react";
import useModal from "../../hooks/useModal";
import { fetchCustomerDiscountSlabs } from "../../utils/mockApi";
import { useEffect, useState } from "react";
import Table from "../../components/table/Table";
import AddModal from "../../components/modals/AddModal";
import ViewModal from "../../components/modals/ViewModal";
import EditModal from "../../components/modals/EditModal";
import DeleteModal from "../../components/modals/DeleteModal";

const CustomerDiscountSlabs = () => {
  const [customerDiscountSlabs, setCustomerDiscountSlabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const addModal = useModal();
  const viewModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCustomerDiscountSlabs(searchQuery);
        const validData = data.filter(
          (disc) => disc.customerCode && disc.customerName
        );
        setCustomerDiscountSlabs(validData);
        setError(null);
      } catch (error) {
        setError("Failed to fetch customer discount slabs");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [searchQuery]);

  const [openDropdownId, setOpenDropdownId] = useState(null);
  const closeAllDropdowns = () => setOpenDropdownId(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleAdd = (newSlab) => {
    setCustomerDiscountSlabs([...customerDiscountSlabs, { ...newSlab, id: Date.now() }]);
    addModal.closeModal();
  }

  const handleEdit = (updatedSlab) => {
    setCustomerDiscountSlabs(
      customerDiscountSlabs.map((slab) =>
        slab.id === updatedSlab.id ? updatedSlab : slab
      )
    );
    editModal.closeModal();
  }

  const handleDelete = () => {
    setCustomerDiscountSlabs(
      customerDiscountSlabs.filter((slab) => slab.id !== deleteModal.modalData.id)
    );
    deleteModal.closeModal();
  }

  const columns = [
    {
      key: "customerCode",
      header: "Customer Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.customerCode}</span>
      ),
    },
    {
      key: "customerName",
      header: "Customer Name",
      render: (item) => <span className="text-gray-800">{item.customerName}</span>,
    },
    {
      key: "active",
      header: "Status",
      render: (item) => <span className="text-gray-600">{item.active}</span>,
    },
    {
      key: "actions",
      header: "Actions",
      render: (item, index, data) => (
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdownId(openDropdownId === item.id ? null : item.id);
            }}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" />
          </button>

          {openDropdownId === item.id && (
            <div
              className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white py-1.5 shadow-sm border border-gray-200 animate-slideInDown ${index >= data.length - 2 ? "bottom-full" : "top-full"
                }`}
            >
              <div className="p-1">
                <button
                  onClick={() => viewModal.openModal(item)}
                  className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-150 cursor-pointer"
                >
                  <span className="flex-1 text-left">View Details</span>
                </button>
                <button
                  onClick={() => editModal.openModal(item)}
                  className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-150 cursor-pointer"
                >
                  <span className="flex-1 text-left">Edit</span>
                </button>
                <div className="my-1 border-t border-gray-100"></div>
                <button
                  onClick={() => deleteModal.openModal(item)}
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
              <BadgePercent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                Customer Discount Slabs
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Manage Customer discount slabs.
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
              onClick={() => addModal.openModal()}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Slab
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
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search customer discount slabs..."
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading customer discount slabs...</p>
          </div>
        ) : error ? (
          <div className="p-8 text-center">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <Table
            data={customerDiscountSlabs}
            columns={columns}
            currentPage={1}
            totalPages={10}
            onPageChange={(page) => console.log(`Page changed to ${page}`)}
          />
        )}
      </div>

      {/* Modals */}
      <AddModal
        recordType="customerDiscountSlabs"
        isOpen={addModal.isOpen}
        onClose={addModal.closeModal}
        onSubmit={handleAdd}
        width="max-w-7xl"
      />

      <ViewModal
        recordType="customerDiscountSlabs"
        isOpen={viewModal.isOpen}
        onClose={viewModal.closeModal}
        data={viewModal.modalData}
        width="max-w-7xl"
      />

      <EditModal
        recordType="customerDiscountSlabs"
        isOpen={editModal.isOpen}
        onClose={editModal.closeModal}
        data={editModal.modalData}
        onSubmit={handleEdit}
        width="max-w-7xl"
      />

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.closeModal}
        onDelete={handleDelete}
        recordName="customerDiscountSlabs"
        identifier={deleteModal.modalData?.customerName || ""}
        width="max-w-7xl"
      />
    </div>
  );
};

export default CustomerDiscountSlabs;
