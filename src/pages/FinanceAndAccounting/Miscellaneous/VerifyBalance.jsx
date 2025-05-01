import { useState } from "react";
import useAutofill from "../../../hooks/useAutofill";
import { getFormConfig } from "../../../utils/formConfig";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { Search } from "lucide-react";
import { fetchItemComputedQuantities } from "../../../utils/mockApi";

const VerifyBalance = () => {
  const config = getFormConfig("verifyBalance");
  const [balanceInquiryInformation, setBalanceInquiryInformation] = useState(
    {}
  );
  const [items, setItems] = useState([]);

  const balanceInquiryAutoSelect = useAutofill(
    balanceInquiryInformation,
    setBalanceInquiryInformation,
    config
  );

  const columns = [
    {
      key: "itemCode",
      header: "Item Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.itemCode}</span>
      ),
    },
    {
      key: "rsActual",
      header: "R/S Actual",
      render: (item) => <span className="text-gray-800">{item.rsActual}</span>,
    },
    {
      key: "rsComputed",
      header: "R/S Computed",
      render: (item) => (
        <span className="text-gray-600">{item.rsComputed}</span>
      ),
    },
    {
      key: "wsActual",
      header: "W/S Actual",
      render: (item) => <span className="text-gray-600">{item.wsActual}</span>,
    },
    {
      key: "wsComputed",
      header: "W/S Computed",
      render: (item) => (
        <span className="text-gray-600">{item.wsComputed}</span>
      ),
    },
  ];

  const handleSearchItems = async () => {
    try {
      const { itemCode, locationCode } = balanceInquiryInformation;
      const verifiedItem = await fetchItemComputedQuantities(
        itemCode,
        locationCode
      );
      const itemWithVerifiedData = {
        ...balanceInquiryInformation,
        ...verifiedItem,
      };

      setItems((prev) => [...prev, itemWithVerifiedData]);
      console.log(itemWithVerifiedData);
    } catch (error) {
      console.error("Error fetching item computed quantities:", error);
    } finally {
      // handleResetForm();
    }
  };

  const handleResetForm = () => {
    setBalanceInquiryInformation({});
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
          Verify Balance
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Verify the balance of items in the system.
        </p>
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">Item Details</h2>
        <DynamicForm
          fields={config.fields}
          values={balanceInquiryInformation}
          onChange={setBalanceInquiryInformation}
          onAutocompleteSelect={
            balanceInquiryAutoSelect.handleAutocompleteSelect
          }
        />
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
          <button
            onClick={handleSearchItems}
            className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3"
          >
            <Search className="h-4 w-4 mr-1.5" />
            Check Balance
          </button>
          <button
            onClick={handleResetForm}
            className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>

      {items.length > 0 ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table
            data={items}
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
          <p className="text-gray-500">No items found.</p>
        </div>
      )}
    </div>
  );
};

export default VerifyBalance;
