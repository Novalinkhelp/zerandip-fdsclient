import { useState } from "react";
import { getFormConfig } from "../../../utils/formConfig";
import useAutofill from "../../../hooks/useAutofill";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { Clock, Plus } from "lucide-react";

const ParcelAndInvoicing = () => {
  const { parcelDelivery, invoice } = getFormConfig("deliveryOutward");
  const [deliveryInformation, setDeliveryInformation] = useState({});
  const [invoiceInformation, setInvoiceInformation] = useState({});
  const [deliveries, setDeliveries] = useState([]);

  const deliveryAutoComplete = useAutofill(
    deliveryInformation,
    setDeliveryInformation,
    parcelDelivery
  );

  const invoiceAutoComplete = useAutofill(
    invoiceInformation,
    setInvoiceInformation,
    invoice
  );

  const columns = [
    {
      key: "invoiceNumber",
      header: "Invoice Number",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.invoiceNumber}</span>
      ),
    },
    {
      key: "repCode",
      header: "Rep Code",
      render: (item) => <span className="text-gray-800">{item.repCode}</span>,
    },
    {
      key: "customerCode",
      header: "Customer Code",
      render: (item) => (
        <span className="text-gray-600">{item.customerCode}</span>
      ),
    },
    {
      key: "invoiceDate",
      header: "Invoice Date",
      render: (item) => (
        <span className="text-gray-600">{item.invoiceDate}</span>
      ),
    },
    {
      key: "numberOfParcels",
      header: "Number of Parcels",
      render: (item) => (
        <span className="text-gray-600">{item.numberOfParcels}</span>
      ),
    },
    {
      key: "parcelNumbers",
      header: "Parcel Numbers",
      render: (item) => (
        <span className="text-gray-600">{item.parcelNumbers}</span>
      ),
    },
  ];

  const handleAddDelivery = () => {
    const newDelivery = {
      ...deliveryInformation,
      ...invoiceInformation,
    };
    setDeliveries((prev) => [...prev, newDelivery]);
    handleResetForm();
  };

  const handleResetForm = () => {
    setDeliveryInformation({});
    setInvoiceInformation({});
  };

  return (
    <div className="space-y-8">
      <div className="flex bg-gray-50 flex-col gap-4 p-6">
        <h2 className="font-semibold text-lg text-gray-900">
          Delivery Details
        </h2>
        <DynamicForm
          fields={parcelDelivery.fields}
          values={deliveryInformation}
          onChange={setDeliveryInformation}
          onAutocompleteSelect={deliveryAutoComplete.handleAutocompleteSelect}
        />
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">Invoice Details</h2>
        <DynamicForm
          fields={invoice.fields}
          values={invoiceInformation}
          onChange={setInvoiceInformation}
          onAutocompleteSelect={invoiceAutoComplete.handleAutocompleteSelect}
        />
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
          <button
            onClick={handleAddDelivery}
            className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3 sm:mb-3"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Add Delivery
          </button>
          <button
            onClick={handleResetForm}
            className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer sm:mb-3"
          >
            Cancel
          </button>
        </div>
      </div>

      {deliveries.length > 0 ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table
            data={deliveries}
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
          <p className="text-gray-500">No delivery outwards added yet.</p>
        </div>
      )}
    </div>
  );
};

export default ParcelAndInvoicing;
