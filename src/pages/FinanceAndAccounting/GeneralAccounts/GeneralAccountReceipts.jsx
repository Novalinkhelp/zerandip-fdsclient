import { useState } from "react";
import useAutofill from "../../../hooks/useAutofill";
import { getFormConfig } from "../../../utils/formConfig";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { ReceiptText } from "lucide-react";

const GeneralAccountReceipts = () => {
  const { cash, normalCheque, settleCheque, returnCheque } = getFormConfig(
    "generalAccountReceipts"
  );
  const [receiptField, setReceiptFields] = useState(cash.fields);
  const [receiptInformation, setReceiptInformation] = useState({});
  const [receipts, setReceipts] = useState([]);

  const currentConfig = {
    fields: receiptField,
    useTabs: false,
  };

  const receiptAutoSelect = useAutofill(
    receiptInformation,
    setReceiptInformation,
    currentConfig
  );

  const columns = [
    {
      key: "receiptType",
      header: "Receipt Type",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.receiptType}</span>
      ),
    },
    {
      key: "receiptVoucherNumber",
      header: "Receipt Voucher No",
      render: (item) => (
        <span className="text-gray-800">{item.receiptVoucherNumber}</span>
      ),
    },
    {
      key: "customerCode",
      header: "Account Code",
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
      header: "modeOfPayment (%)",
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

  const handleReceiptInformationChange = (formData) => {
    switch (formData.receiptType) {
      case "S":
        setReceiptFields(settleCheque.fields);
        break;
      case "R":
        setReceiptFields(returnCheque.fields);
        break;
      default:
        setReceiptFields(cash.fields);
        break;
    }

    if (formData.modeOfPayment === "Q" && formData.receiptType === "N") {
      setReceiptFields(normalCheque.fields);
    }

    setReceiptInformation(formData);
  };

  const handleAddReceipt = () => {
    setReceipts((prevReceipts) => [...prevReceipts, receiptInformation]);
  };

  const handleResetForm = () => {
    setReceiptInformation({});
    setReceiptFields(cash.fields);
  };

  return (
    <div className="min-h-screen ">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            General Accounts - Data Entry Of Receipts
          </h1>
          <p className="text-gray-600 mt-1">
            Handle the Data Entry of Receipts in General Accounts
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-gray-50 px-6 py-4 rounded-lg ">
            <h2 className="font-semibold text-lg text-gray-900 mb-4">
              Invoice Items
            </h2>
            <DynamicForm
              fields={receiptField}
              values={receiptInformation}
              onChange={handleReceiptInformationChange}
              onAutocompleteSelect={receiptAutoSelect.handleAutocompleteSelect}
            />
            <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full mt-6">
              <button
                onClick={handleAddReceipt}
                className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3"
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

export default GeneralAccountReceipts;
