import { useState, useMemo } from "react";
import { getFormConfig } from "../../utils/formConfig";
import { priceUtils } from "../../utils/priceUtils";
import DynamicForm from "../../components/forms/DynamicForm";
import InvoiceSummary from "../../components/sales-transactions/InvoiceSummary";
import { RefreshCw, ShoppingCart, Trash2 } from "lucide-react";
import Table from "../../components/table/Table";
import useAutofill from "../../hooks/useAutofill";

const GoodsReturn = () => {
  const { returnNote, item } = getFormConfig("goodsReturn");
  const [returnNoteInformation, setReturnNoteInformation] = useState({});
  const [itemInformation, setItemInformation] = useState({});
  const [items, setItems] = useState([]);

  const returnNoteAutoSelect = useAutofill(
    returnNoteInformation,
    setReturnNoteInformation,
    returnNote
  );

  const itemAutoSelect = useAutofill(itemInformation, setItemInformation, item);

  const totals = useMemo(() => {
    const { grossValue, discountValue, netValue } =
      priceUtils.calculateTotalValues(items, "quantityReturned", "returnPrice");
    return {
      grossValue: priceUtils.formatPrice(grossValue),
      discountValue: priceUtils.formatPrice(discountValue),
      netValue: priceUtils.formatPrice(netValue),
    };
  }, [items]);

  const columns = [
    {
      key: "itemCode",
      header: "Item Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.itemCode}</span>
      ),
    },
    {
      key: "locationCode",
      header: "Location",
      render: (item) => (
        <span className="text-gray-800">{item.locationCode}</span>
      ),
    },
    {
      key: "quantityReturned",
      header: "Quantity Returned",
      render: (item) => (
        <span className="text-gray-600">{item.quantityReturned}</span>
      ),
    },
    {
      key: "returnPrice",
      header: "@ Return Price",
      render: (item) => (
        <span className="text-gray-600">{item.returnPrice}</span>
      ),
    },
    {
      key: "value",
      header: "Value",
      render: (item) => (
        <span className="font-semibold text-gray-900">{item.value}</span>
      ),
    },
    {
      key: "valueOfReturn",
      header: "Value of Return",
      render: (item) => (
        <span className="font-semibold text-gray-900">
          {item.valueOfReturn}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (item, index) => (
        <div className="flex items-center space-x-2">
          <button
            className="flex items-center text-red-700 hover:text-red-800 cursor-pointer"
            onClick={() => {
              const newItems = [...items];
              newItems.splice(index, 1);
              setItems(newItems);
            }}
          >
            <Trash2 className="h-4 w-4 mr-2.5" />
            Remove
          </button>
        </div>
      ),
    },
  ];

  const handleItemFormChange = (formData) => {
    const updatedValues = { ...formData };

    if (updatedValues.returnPrice && updatedValues.quantityReturned) {
      const { grossValue, netValue } = priceUtils.calculateItemValue(
        updatedValues.returnPrice,
        updatedValues.quantityReturned,
        updatedValues.discount
      );
      updatedValues.valueOfReturn = grossValue;
      updatedValues.value = netValue;
    }

    setItemInformation(updatedValues);
  };

  const handleAddItem = () => {
    const { netValue } = priceUtils.calculateItemValue(
      itemInformation.returnPrice,
      itemInformation.quantityReturned,
      itemInformation.discount
    );
    const itemInformationWithValue = {
      ...itemInformation,
      value: netValue,
      locationCode: returnNoteInformation.locationCode,
    };
    setItems([...items, itemInformationWithValue]);
    setItemInformation({});
  };

  const handleResetInvoice = () => {
    setReturnNoteInformation({});
    setItemInformation({});
    setItems([]);
  };

  const handleItemReset = () => {
    setItemInformation({});
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-4 p-6 bg-gray-50 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">
          Return Note Details
        </h2>
        <DynamicForm
          fields={returnNote.fields}
          values={returnNoteInformation}
          onChange={setReturnNoteInformation}
          onAutocompleteSelect={returnNoteAutoSelect.handleAutocompleteSelect}
        />
      </div>

      <div className="flex flex-col gap-4 p-6 bg-gray-50 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">Invoice Items</h2>
        <DynamicForm
          fields={item.fields}
          values={itemInformation}
          onChange={handleItemFormChange}
          onAutocompleteSelect={itemAutoSelect.handleAutocompleteSelect}
        />
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
          <button
            onClick={handleAddItem}
            className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3"
          >
            <ShoppingCart className="h-4 w-4 mr-1.5" />
            Add Item
          </button>
          <button
            onClick={handleItemReset}
            className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="flex items-center justify-center h-64 text-gray-500">
          No items added yet.
        </div>
      ) : (
        <>
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

          <div className="flex flex-col gap-4 p-6  bg-gray-100 rounded-lg">
            <InvoiceSummary
              totalItems={items.length}
              grossValue={totals.grossValue}
              discountValue={totals.discountValue}
              netValue={totals.netValue}
            />

            <div className="flex flex-col md:flex-row gap-2 justify-end items-center w-full mt-4">
              <button
                onClick={handleAddItem}
                className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer md:mr-3"
              >
                <RefreshCw className="h-4 w-4 mr-1.5" />
                Return Items
              </button>
              <button
                onClick={handleResetInvoice}
                className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GoodsReturn;
