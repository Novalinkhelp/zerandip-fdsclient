import { Search, EllipsisVerticalIcon } from "lucide-react";
import useModal from "../../hooks/useModal";
import { fetchItems } from "../../utils/mockApi";
import { useEffect, useState } from "react";
import Table from "../../components/table/Table";
import ViewModal from "../../components/modals/ViewModal";
import EditModal from "../../components/modals/EditModal";
import DeleteModal from "../../components/modals/DeleteModal";

// TODO: There is an additional tab "Sales" in the modals that is not implemented yet. It should be implemented in the future.

const ItemStockCardInquiry = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const viewModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchItems(searchQuery);
        const validData = data.filter(
          (item) => item.itemCode && item.itemDescription
        );
        setItems(validData);
        setError(null);
      } catch (error) {
        setError("Failed to fetch items");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const [openDropdownId, setOpenDropdownId] = useState(null);
  const closeAllDropdowns = () => setOpenDropdownId(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEdit = (updatedItem) => {
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    editModal.closeModal();
  };

  const handleDelete = () => {
    setItems(items.filter((item) => item.id !== deleteModal.modalData.id));
    deleteModal.closeModal();
  };

  const columns = [
    {
      key: "itemCode",
      header: "Item Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.itemCode}</span>
      ),
    },
    {
      key: "itemDescription",
      header: "Item Description",
      render: (item) => (
        <span className="text-gray-800">{item.itemDescription}</span>
      ),
    },
    {
      key: "category",
      header: "Category",
      render: (item) => <span className="text-gray-600">{item.category}</span>,
    },
    {
      key: "classification",
      header: "Classification",
      render: (item) => (
        <span className="text-gray-600">{item.classification}</span>
      ),
    },
    {
      key: "retailWholesale",
      header: "R/W Sales",
      render: (item) => (
        <span className="text-gray-600">{item.retailWholesale}</span>
      ),
    },
    {
      key: "campaignItem",
      header: "Campaign Item",
      render: (item) => (
        <span className="text-gray-600">
          {item.campaignItem ? "Yes" : "No"}
        </span>
      ),
    },
    {
      key: "netItem",
      header: "Net Item",
      render: (item) => (
        <span className="text-gray-600">{item.netItem ? "Yes" : "No"}</span>
      ),
    },
    {
      key: "warrantyItem",
      header: "Warranty",
      render: (item) => (
        <span className="text-gray-600">
          {item.warrantyItem ? "Yes" : "No"}
        </span>
      ),
    },
    {
      key: "sellingPrice",
      header: "Selling Price",
      render: (item) => (
        <span className="text-gray-600">{item.sellingPrice}</span>
      ),
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
              className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white py-1.5 shadow-sm border border-gray-200 animate-slideInDown ${
                index >= data.length - 2 ? "bottom-full" : "top-full"
              }`}
            >
              <div className="p-1">
                <button
                  onClick={() => viewModal.openModal(item)}
                  className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-150 cursor-pointer"
                >
                  <span className="flex-1 text-left">View</span>
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
            <div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                Item Stock Card Inquiry
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                View Item Stock Card
              </p>
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
              placeholder="Search items..."
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading items...</p>
          </div>
        ) : error ? (
          <div className="p-8 text-center">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <Table
            data={items}
            columns={columns}
            currentPage={1}
            totalPages={10}
            onPageChange={(page) => console.log(`Page changed to ${page}`)}
          />
        )}
      </div>

      {/* Modals */}
      <ViewModal
        recordType="item"
        isOpen={viewModal.isOpen}
        onClose={viewModal.closeModal}
        data={viewModal.modalData}
        width="max-w-7xl"
      />

      <EditModal
        recordType="item"
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
        recordName="item"
        identifier={deleteModal.modalData?.itemDescription || ""}
        width="max-w-7xl"
      />
    </div>
  );
};

export default ItemStockCardInquiry;
