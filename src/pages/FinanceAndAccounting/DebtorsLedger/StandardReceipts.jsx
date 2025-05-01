import { useState } from "react";
import useAutofill from "../../../hooks/useAutofill";
import { getFormConfig } from "../../../utils/formConfig";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { ReceiptText } from "lucide-react";

const StandardReceipts = () => {
  const { customer, receipt } = getFormConfig("standardReceipts");
  const [customerInformation, setCustomerInformation] = useState({});
  const [receiptInformation, setReceiptInformation] = useState({});
  const [receipts, setReceipts] = useState([]);

  const customerAutoSelect = useAutofill(
    customerInformation,
    setCustomerInformation,
    customer
  );

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
      key: "receiptNumber",
      header: "Receipt Number",
      render: (item) => (
        <span className="text-gray-800">{item.receiptNumber}</span>
      ),
    },
    {
      key: "customerCode",
      header: "Customer Code",
      render: (item) => (
        <span className="text-gray-600">{item.customerCode}</span>
      ),
    },
    {
      key: "dateOfEntry",
      header: "Date of Entry",
      render: (item) => (
        <span className="text-gray-600">{item.dateOfEntry}</span>
      ),
    },
    {
      key: "modeOfPayment",
      header: "modeOfPayment",
      render: (item) => (
        <span className="text-gray-600">{item.modeOfPayment}</span>
      ),
    },
    {
      key: "amount",
      header: "Amount",
      render: (item) => (
        <span className="font-semibold text-gray-900">{item.amount}</span>
      ),
    },
  ];

  const handleAddReceipt = () => {
    setReceipts((prevReceipts) => [
      ...prevReceipts,
      {
        ...customerInformation,
        ...receiptInformation,
      },
    ]);
  };

  const handleResetForm = () => {
    setCustomerInformation({});
    setReceiptInformation({});
  };
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Data Entry Of Standard Receipts
        </h1>
        <p className="text-gray-600 mt-1">
          Handle the Data Entry of Standard Receipts.
        </p>
      </div>

      <div className="flex flex-col gap-4 bg-gray-50 px-6 py-4 rounded-2xl ">
        <h2 className="font-semibold text-lg text-gray-900">
          Customer Details
        </h2>
        <DynamicForm
          fields={customer.fields}
          values={customerInformation}
          onChange={setCustomerInformation}
          onAutocompleteSelect={customerAutoSelect.handleAutocompleteSelect}
        />
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">Receipt Details</h2>
        <DynamicForm
          fields={receipt.fields}
          values={receiptInformation}
          onChange={setReceiptInformation}
        />
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full gap-3">
          <button
            onClick={handleAddReceipt}
            className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer"
          >
            <ReceiptText className="h-4 w-4 mr-1.5" />
            Add Receipt
          </button>
          <button
            onClick={handleResetForm}
            className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>

      {receipts.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table
            data={receipts}
            columns={columns}
            currentPage={1}
            totalPages={1}
            onPageChange={(page) => {
              console.log(`Page changed to ${page}`);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default StandardReceipts;
