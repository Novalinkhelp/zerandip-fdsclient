import { useEffect, useState } from "react";
import useAutofill from "../../../hooks/useAutofill";
import { getFormConfig } from "../../../utils/formConfig";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { Plus } from "lucide-react";

const GeneralAccountPayments = () => {
  const { bankDepositCash, bankDepositCheque, normalPayment, normalChequePayment } = getFormConfig(
    "generalAccountsPayments"
  );
  const [paymentField, setPaymentFields] = useState(bankDepositCash.fields);
  const [paymentInformation, setPaymentInformation] = useState({});
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    setPaymentInformation((prev) => ({
      ...prev,
      paymentType: "N",
      modeOfPayment: "C"
    }))
  }, []);

  const currentConfig = {
    fields: paymentField,
    useTabs: false,
  };

  const paymentAutoSelect = useAutofill(
    paymentInformation,
    setPaymentInformation,
    currentConfig
  );

  const columns = [
    {
      key: "paymentType",
      header: "Payment Type",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.paymentType}</span>
      ),
    },
    {
      key: "customerCode",
      header: "Account Code",
      render: (item) => (
        <span className="text-gray-800">{item.customerCode}</span>
      ),
    },
    {
      key: "modeOfPayment",
      header: "Mode of Payment",
      render: (item) => (
        <span className="text-gray-600">{item.modeOfPayment}</span>
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
      key: "repCode",
      header: "Rep",
      render: (item) => <span className="text-gray-600">{item.repCode}</span>,
    },
    {
      key: "amount",
      header: "Amount",
      render: (item) => (
        <span className="font-semibold text-gray-900">{item.amount}</span>
      ),
    },
  ];

  const handlePaymentInformationChange = (formData) => {
    if (formData.paymentType === "N") {
      if (formData.modeOfPayment === "C") {
        setPaymentFields(normalPayment.fields);
      } else {
        setPaymentFields(normalChequePayment.fields);
      }
    }

    if (formData.modeOfPayment === "Q" && formData.paymentType === "B") {
      setPaymentFields(bankDepositCheque.fields);
    } else if (formData.modeOfPayment === "C" && formData.paymentType === "B") {
      setPaymentFields(bankDepositCash.fields);
    }

    setPaymentInformation(formData);
  };

  const handleAddPayments = () => {
    setPayments((prevPayments) => [...prevPayments, paymentInformation]);
  };

  const handleResetForm = () => {
    setPaymentInformation({});
    setPaymentFields(bankDepositCash.fields);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
          General Accounts - Data Entry Of Payments
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Handle data entry for payments in general accounts, including bank
          deposits and cheque payments.
        </p>
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-lg">
        <h2 className="font-semibold text-lg text-gray-900">Payment Details</h2>
        <DynamicForm
          fields={paymentField}
          values={paymentInformation}
          onChange={handlePaymentInformationChange}
          onAutocompleteSelect={paymentAutoSelect.handleAutocompleteSelect}
        />
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
          <button
            onClick={handleAddPayments}
            className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Add Payment
          </button>
          <button
            onClick={handleResetForm}
            className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>

      {payments.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table
            data={payments}
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

export default GeneralAccountPayments;
