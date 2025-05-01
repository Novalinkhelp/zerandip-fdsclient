import { useState } from "react";
import useAutofill from "../../../hooks/useAutofill";
import { getFormConfig } from "../../../utils/formConfig";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { Plus } from "lucide-react";

const LocalPurchases = () => {
  const { supplier, item } = getFormConfig("localPurchases");
  const [supplierInformation, setSupplierInformation] = useState({});
  const [itemInformation, setItemInformation] = useState({});
  const [purchases, setPurchases] = useState([]);

  const supplierAutoSelect = useAutofill(
    supplierInformation,
    setSupplierInformation,
    supplier
  );

  const itemAutoSelect = useAutofill(itemInformation, setItemInformation, item);

  const columns = [
    {
      key: "itemCode",
      header: "Item Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.itemCode}</span>
      ),
    },
    {
      key: "supplierCode",
      header: "Supplier Code",
      render: (item) => (
        <span className="text-gray-800">{item.supplierCode}</span>
      ),
    },
    {
      key: "quantityInHand",
      header: "Quantity In Hand",
      render: (item) => (
        <span className="text-gray-600">{item.quantityInHand}</span>
      ),
    },
    {
      key: "quantityPurchased",
      header: "quantityPurchased",
      render: (item) => (
        <span className="text-gray-600">{item.quantityPurchased}</span>
      ),
    },
    {
      key: "netItem",
      header: "Net Item",
      render: (item) => (
        <span className="text-gray-600">
          {item.netItem === true ? "Yes" : "No"}
        </span>
      ),
    },
    {
      key: "unitPrice",
      header: "Unit Price",
      render: (item) => <span className="text-gray-600">{item.unitPrice}</span>,
    },
    {
      key: "sellingPrice",
      header: "Selling Price",
      render: (item) => (
        <span className="text-gray-600">{item.sellingPrice}</span>
      ),
    },
    {
      key: "netValue",
      header: "Net Value",
      render: (item) => (
        <span className="font-semibold text-gray-900">{item.netValue}</span>
      ),
    },
  ];

  const handleAddItem = () => {
    const newPurchase = {
      ...supplierInformation,
      ...itemInformation,
    };

    setPurchases((prev) => [...prev, newPurchase]);
    handleResetForm();
  };

  const handleResetForm = () => {
    setSupplierInformation({});
    setItemInformation({});
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
          Data Entry Of Local Purchases
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Handle data entry for local purchases.
        </p>
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">
          Supplier Details
        </h2>
        <DynamicForm
          fields={supplier.fields}
          values={supplierInformation}
          onChange={setSupplierInformation}
          onAutocompleteSelect={supplierAutoSelect.handleAutocompleteSelect}
        />
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">Item Details</h2>
        <DynamicForm
          fields={item.fields}
          values={itemInformation}
          onChange={setItemInformation}
          onAutocompleteSelect={itemAutoSelect.handleAutocompleteSelect}
        />
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
          <button
            onClick={handleAddItem}
            className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Add Item
          </button>
          <button
            onClick={handleResetForm}
            className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>

      {purchases.length > 0 ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table
            data={purchases}
            columns={columns}
            currentPage={1}
            totalPages={1}
            onPageChange={(page) => {
              console.log(`Page changed to ${page}`);
            }}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">No purchases added yet.</p>
        </div>
      )}
    </div>
  );
};

export default LocalPurchases;
