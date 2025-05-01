import { useState } from "react";
import useAutofill from "../../../hooks/useAutofill";
import { getFormConfig } from "../../../utils/formConfig";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { ArrowLeftRight } from "lucide-react";

const LocationTransfer = () => {
  const { transaction, item } = getFormConfig("locationTransfer");
  const [transactionInformation, setTransactionInformation] = useState({});
  const [itemInformation, setItemInformation] = useState({});
  const [transfers, setTransfers] = useState([]);

  const itemAutoSelect = useAutofill(itemInformation, setItemInformation, item);

  const columns = [
    {
      key: "referenceNumber",
      header: "Reference Number",
      render: (item) => (
        <span className="font-medium text-gray-900">
          {item.referenceNumber}
        </span>
      ),
    },
    {
      key: "dateOfEntry",
      header: "Date of Entry",
      render: (item) => (
        <span className="text-gray-800">{item.dateOfEntry}</span>
      ),
    },
    {
      key: "locationFrom",
      header: "Location From",
      render: (item) => (
        <span className="text-gray-600">{item.locationFrom}</span>
      ),
    },
    {
      key: "locationTo",
      header: "Location To",
      render: (item) => (
        <span className="text-gray-600">{item.locationTo}</span>
      ),
    },
    {
      key: "itemCode",
      header: "Item Code",
      render: (item) => <span className="text-gray-600">{item.itemCode}</span>,
    },
    {
      key: "itemDescription",
      header: "Item Description",
      render: (item) => (
        <span className="text-gray-600">{item.itemDescription}</span>
      ),
    },
    {
      key: "quantity",
      header: "Quantity",
      render: (item) => <span className="text-gray-600">{item.quantity}</span>,
    },
  ];

  const handleAddItem = () => {
    const newPurchase = {
      ...transactionInformation,
      ...itemInformation,
    };

    setTransfers((prev) => [...prev, newPurchase]);
    handleResetForm();
  };

  const handleResetForm = () => {
    setTransactionInformation({});
    setItemInformation({});
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
          Transfer Goods
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Transfer goods between locations.
        </p>
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">
          Supplier Details
        </h2>
        <DynamicForm
          fields={transaction.fields}
          values={transactionInformation}
          onChange={setTransactionInformation}
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
            <ArrowLeftRight className="h-4 w-4 mr-1.5" />
            Transfer Goods
          </button>
          <button
            onClick={handleResetForm}
            className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>

      {transfers.length > 0 ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table
            data={transfers}
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
          <p className="text-gray-500">No transfers added yet.</p>
        </div>
      )}
    </div>
  );
};

export default LocationTransfer;
