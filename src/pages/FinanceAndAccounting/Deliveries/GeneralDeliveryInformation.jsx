import { useState } from "react";
import { getFormConfig } from "../../../utils/formConfig";
import useAutofill from "../../../hooks/useAutofill";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { Clock, Plus } from "lucide-react";

const GeneralDeliveryInformation = () => {
  const { generalDelivery, transport } = getFormConfig("deliveryOutward");
  const [deliveryInformation, setDeliveryInformation] = useState({});
  const [transportInformation, setTransportInformation] = useState({});
  const [deliveries, setDeliveries] = useState([]);

  const deliveryAutoComplete = useAutofill(
    deliveryInformation,
    setDeliveryInformation,
    generalDelivery
  );

  const columns = [
    {
      key: "deliveryOutwardNumber",
      header: "Delivery Outward Number",
      render: (item) => (
        <span className="font-medium text-gray-900">
          {item.deliveryOutwardNumber}
        </span>
      ),
    },
    {
      key: "repCode",
      header: "Rep Code",
      render: (item) => <span className="text-gray-800">{item.repCode}</span>,
    },
    {
      key: "byHand",
      header: "By Hand",
      render: (item) => (
        <span className="text-gray-600">
          {item.byHand === true ? "Yes" : "No"}
        </span>
      ),
    },
    {
      key: "zmeDelivery",
      header: "ZME Delivery",
      render: (item) => (
        <span className="text-gray-600">
          {item.zmeDelivery === true ? "Yes" : "No"}
        </span>
      ),
    },
    {
      key: "vehicleNumber",
      header: "Vehicle Number",
      render: (item) => (
        <span className="text-gray-600">{item.vehicleNumber}</span>
      ),
    },
    {
      key: "orderDelivered",
      header: "Order Delivered",
      render: (item) => (
        <span className="text-gray-600">
          {item.orderDelivered === true ? "Yes" : "No"}
        </span>
      ),
    },
    {
      key: "zmeIssuedBy",
      header: "Issue By",
      render: (item) => (
        <span className="text-gray-600">{item.zmeIssuedBy}</span>
      ),
    },
    {
      key: "zmeTakenBy",
      header: "Taken By",
      render: (item) => (
        <span className="text-gray-600">{item.zmeTakenBy}</span>
      ),
    },
  ];

  const handleAddDelivery = () => {
    const newDelivery = {
      ...transportInformation,
      ...deliveryInformation,
    };
    setDeliveries((prev) => [...prev, newDelivery]);
    handleResetForm();
  };

  const handleResetForm = () => {
    setTransportInformation({});
    setDeliveryInformation({});
  };

  return (
    <div className="space-y-8">
      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">
          Delivery Details
        </h2>
        <DynamicForm
          fields={generalDelivery.fields}
          values={deliveryInformation}
          onChange={setDeliveryInformation}
          onAutocompleteSelect={deliveryAutoComplete.handleAutocompleteSelect}
        />
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">
          Transport Details
        </h2>
        <DynamicForm
          fields={transport.fields}
          values={transportInformation}
          onChange={setTransportInformation}
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

export default GeneralDeliveryInformation;
