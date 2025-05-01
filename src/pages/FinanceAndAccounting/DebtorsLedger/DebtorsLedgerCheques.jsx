import { useState } from "react";
import useAutofill from "../../../hooks/useAutofill";
import { getFormConfig } from "../../../utils/formConfig";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { Plus } from "lucide-react";

const DebtorsLedgerCheques = () => {
  const { receipt, cheque } = getFormConfig("debtorsLedgerCheques");
  const [receiptInformation, setReceiptInformation] = useState({});
  const [chequeInformation, setChequeInformation] = useState({});
  const [cheques, setCheques] = useState([]);

  const chequeAutoSelect = useAutofill(
    chequeInformation,
    setChequeInformation,
    cheque
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
      key: "chequeNumber",
      header: "Cheque Number",
      render: (item) => (
        <span className="text-gray-600">{item.chequeNumber}</span>
      ),
    },
    {
      key: "customerCode",
      header: "Account Number",
      render: (item) => (
        <span className="text-gray-600">{item.customerCode}</span>
      ),
    },
    {
      key: "depositDate",
      header: "Deposit Date",
      render: (item) => (
        <span className="text-gray-600">{item.depositDate}</span>
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

  const handleAddCheques = () => {
    const newCheque = {
      ...receiptInformation,
      ...chequeInformation,
    };

    setCheques((prev) => [...prev, newCheque]);
    handleResetForm();
  };

  const handleResetForm = () => {
    setReceiptInformation({});
    setChequeInformation({});
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
          Data Entry Of Cheques
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Handle data entry for cheques in debtors ledger.
        </p>
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6  rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">Receipt Details</h2>
        <DynamicForm
          fields={receipt.fields}
          values={receiptInformation}
          onChange={setReceiptInformation}
        />
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6  rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">Cheque Details</h2>
        <DynamicForm
          fields={cheque.fields}
          values={chequeInformation}
          onChange={setChequeInformation}
          onAutocompleteSelect={chequeAutoSelect.handleAutocompleteSelect}
        />
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
          <button
            onClick={handleAddCheques}
            className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Add Cheque
          </button>
          <button
            onClick={handleResetForm}
            className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>

      {cheque.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table
            data={cheques}
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

export default DebtorsLedgerCheques;
