import { useState } from "react";
import { getFormConfig } from "../../../utils/formConfig";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import FormField from "../../../components/forms/FormField";

const ChangeSellingPrice = () => {
  const config = getFormConfig("changeSellingPrice");
  const [priceChangeInformation, setPriceChangeInformation] = useState({});
  const [isPriceChanging, setIsPriceChanging] = useState(false);
  const [priceChangeType, setPriceChangeType] = useState("");
  const [priceChangeAmount, setPriceChangeAmount] = useState(0);
  const [priceChanges, setPriceChanges] = useState([]);

  const columns = [
    {
      key: "itemCode",
      header: "Item Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.itemCode}</span>
      ),
    },
    {
      key: "oldSellingPrice",
      header: "Old Selling Price",
      render: (item) => (
        <span className="text-gray-800">{item.oldSellingPrice}</span>
      ),
    },
    {
      key: "newSellingPrice",
      header: "New Selling Price",
      render: (item) => (
        <span className="text-gray-600">{item.newSellingPrice}</span>
      ),
    },
  ];

  const handleIncreasePrice = () => {
    setIsPriceChanging(true);
    setPriceChangeType("increase");
  };
  const handleDecreasePrice = () => {
    setIsPriceChanging(true);
    setPriceChangeType("decrease");
  };

  const handleChangePrice = () => {
    setPriceChanges((prev) => [...prev, priceChangeInformation]);
    handleResetForm();
  };

  const handleResetForm = () => {
    setPriceChangeInformation({});
    setIsPriceChanging(false);
    setPriceChangeType("");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
          Change Selling Price
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Change selling price by price or percentage
        </p>
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">
          Price Change Details
        </h2>
        <DynamicForm
          fields={config.fields}
          values={priceChangeInformation}
          onChange={setPriceChangeInformation}
        />
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
          <button
            onClick={handleIncreasePrice}
            className="w-full justify-center md:w-auto px-5 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/30 flex items-center cursor-pointer mr-3 sm:mb-3"
          >
            <ArrowUp className="h-4 w-4 mr-1.5" />
            Increase
          </button>
          <button
            onClick={handleDecreasePrice}
            className="w-full justify-center md:w-auto px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer mr-3 sm:mb-3"
          >
            <ArrowDown className="h-4 w-4 mr-1.5" />
            Decrease
          </button>
          <button
            onClick={handleResetForm}
            className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer sm:mb-3"
          >
            Cancel
          </button>
        </div>
      </div>

      {isPriceChanging && (
        <>
          <div className="flex bg-gray-50 justify-between items-center gap-4 p-6">
            <FormField
              field={{
                name: "priceChangeAmount",
                label: "Price Change Amount",
                type: "number",
                required: true,
                className: "w-full",
              }}
              value={priceChangeAmount}
              onChange={(e) => setPriceChangeAmount(e.target.value)}
            />
            <h2
              className={`font-semibold text-lg ${
                priceChangeType === "increase"
                  ? "text-green-700"
                  : "text-red-700"
              } w-full text-end`}
            >
              {priceChangeType === "increase"
                ? "Increasing price"
                : "Decreasing Price"}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
            <button
              onClick={handleChangePrice}
              className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3"
            >
              <ArrowUpDown className="h-4 w-4 mr-1.5" />
              Change Price
            </button>
            <button
              onClick={handleResetForm}
              className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </>
      )}

      {priceChanges.length > 0 ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table
            data={priceChanges}
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
          <p className="text-gray-500">No price changes yet.</p>
        </div>
      )}
    </div>
  );
};

export default ChangeSellingPrice;
