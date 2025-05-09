import {
  Tags,
  Download,
  Plus,
  Search,
  EllipsisVerticalIcon,
} from "lucide-react";
import useModal from "../../hooks/useModal";
import { useEffect, useState } from "react";
import { fetchClassifications } from "../../utils/mockApi";
import Table from "../../components/table/Table";
import AddModal from "../../components/modals/AddModal";
import ViewModal from "../../components/modals/ViewModal";
import EditModal from "../../components/modals/EditModal";
import DeleteModal from "../../components/modals/DeleteModal";

const ClassificationMaster = () => {
  const [classifications, setClassifications] = useState([]);
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
        const data = await fetchClassifications(searchQuery);
        const validData = data.filter(
          (classification) =>
            classification.classificationCode &&
            classification.classificationDescription
        );
        setClassifications(validData);
        setError(null);
      } catch (error) {
        setError("Failed to fetch classifications");
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

  const handleAdd = (newClassification) => {
    setClassifications([
      ...classifications,
      { ...newClassification, id: Date.now() },
    ]);
    addModal.closeModal();
  };

  const handleEdit = (updatedClassification) => {
    setClassifications(
      classifications.map((classification) =>
        classification.id === updatedClassification.id
          ? updatedClassification
          : classification
      )
    );
    editModal.closeModal();
  };

  const handleDelete = () => {
    setClassifications(
      classifications.filter(
        (classification) => classification.id !== deleteModal.modalData.id
      )
    );
    deleteModal.closeModal();
  };

  const columns = [
    {
      key: "classificationCode",
      header: "Classification Code",
      render: (item) => (
        <span className="font-medium text-gray-900">
          {item.classificationCode}
        </span>
      ),
    },
    {
      key: "classificationDescription",
      header: "Classification Description",
      render: (item) => (
        <span className="text-gray-800">{item.classificationDescription}</span>
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
            <div className="mb-4 sm:mb-0 mr-0 sm:mr-4 md:mr-5 p-2.5 sm:p-3 md:p-3.5 bg-blue-50 rounded-xl text-blue-600 shadow-sm">
              <Tags className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                Classification Master Files
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Manage Classification master data.
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
              Add New Classification
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
            placeholder="Search classifications..."
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading classifications...</p>
          </div>
        ) : error ? (
          <div className="p-8 text-center">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <Table
            data={classifications}
            columns={columns}
            currentPage={1}
            totalPages={10}
            onPageChange={(page) => console.log(`Page changed to ${page}`)}
          />
        )}
      </div>

      {/* Modals */}
      <AddModal
        recordType="classification"
        isOpen={addModal.isOpen}
        onClose={addModal.closeModal}
        onSubmit={handleAdd}
      />

      <ViewModal
        recordType="classification"
        isOpen={viewModal.isOpen}
        onClose={viewModal.closeModal}
        data={viewModal.modalData}
      />

      <EditModal
        recordType="classification"
        isOpen={editModal.isOpen}
        onClose={editModal.closeModal}
        data={editModal.modalData}
        onSubmit={handleEdit}
      />

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.closeModal}
        onDelete={handleDelete}
        recordName="classification"
        identifier={deleteModal.modalData?.classificationDescription || ""}
      />
    </div>
  );
};

export default ClassificationMaster;
