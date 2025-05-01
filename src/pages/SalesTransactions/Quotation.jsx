import { useState, useMemo, useEffect } from "react";
import { getFormConfig } from "../../utils/formConfig";
import { priceUtils } from "../../utils/priceUtils";
import DynamicForm from "../../components/forms/DynamicForm";
import InvoiceSummary from "../../components/sales-transactions/InvoiceSummary";
import { Printer, ShoppingCart, Trash2 } from "lucide-react";
import Table from "../../components/table/Table";
import useAutofill from "../../hooks/useAutofill";
import { generateInvoiceNumbers } from "../../utils/invoiceUtil";
import FormField from "../../components/forms/FormField";

const Quotation = () => {
  const { customer, invoice, item } = getFormConfig("quotation");
  const [customerInformation, setCustomerInformation] = useState({});
  const [invoiceInformation, setInvoiceInformation] = useState({});
  const [itemInformation, setItemInformation] = useState({});
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const { invoiceNumber, referenceNumber, orderNumber } =
      generateInvoiceNumbers();
    setInvoiceInformation((prevState) => ({
      ...prevState,
      invoiceNumber,
      referenceNumber,
      orderNumber,
    }));
  }, []);

  const customerAutoSelect = useAutofill(
    customerInformation,
    setCustomerInformation,
    customer
  );

  const itemAutoSelect = {
    ...useAutofill(itemInformation, setItemInformation, item),
    handleAutocompleteSelect: (fieldName, selectedItem) => {
      setItemInformation((prevState) => ({
        ...prevState,
        itemCode: selectedItem.itemCode,
        itemDescription: selectedItem.itemDescription,
        unitPrice: parseFloat(selectedItem.sellingPrice) || 0,
      }));
    },
  };

  const totals = useMemo(() => {
    const { grossValue, discountValue, netValue } =
      priceUtils.calculateTotalValues(items, "quantityRequired");
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
      key: "itemDescription",
      header: "Item Description",
      render: (item) => (
        <span className="text-gray-800">{item.itemDescription}</span>
      ),
    },
    {
      key: "quantityRequired",
      header: "Qty Required",
      render: (item) => (
        <span className="text-gray-600">{item.quantityRequired}</span>
      ),
    },
    {
      key: "unitPrice",
      header: "Unit Price",
      render: (item) => <span className="text-gray-600">{item.unitPrice}</span>,
    },
    {
      key: "discount",
      header: "Discount (%)",
      render: (item) => <span className="text-gray-600">{item.discount}</span>,
    },
    {
      key: "value",
      header: "Value",
      render: (item) => (
        <span className="font-semibold text-gray-900">{item.value}</span>
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

  const handleAddItem = () => {
    const { netValue } = priceUtils.calculateItemValue(
      itemInformation.unitPrice,
      itemInformation.quantityRequired
    );
    const itemInformationWithValue = {
      ...itemInformation,
      unitPrice: itemInformation.unitPrice,
      value: netValue,
    };
    setItems([...items, itemInformationWithValue]);
    setItemInformation({});
  };

  const handleResetInvoice = () => {
    const { invoiceNumber, referenceNumber, orderNumber } =
      generateInvoiceNumbers();
    setInvoiceInformation((prevState) => ({
      ...prevState,
      invoiceNumber,
      referenceNumber,
      orderNumber,
    }));
    setCustomerInformation({});
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
          Customer Details
        </h2>
        <DynamicForm
          fields={customer.fields}
          values={customerInformation}
          onChange={setCustomerInformation}
          onAutocompleteSelect={customerAutoSelect.handleAutocompleteSelect}
        />
      </div>

      <div className="flex flex-col gap-4 p-6 bg-gray-50 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">Invoice Details</h2>
        <DynamicForm
          fields={invoice.fields}
          values={invoiceInformation}
          onChange={setInvoiceInformation}
        />
      </div>

      <div className="flex flex-col gap-4 p-6 bg-gray-50 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">Invoice Items</h2>
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

      <div className="flex flex-col p-6 bg-blue-100 rounded-lg mb-8">
        <FormField
          field={{
            name: "confirmOrder",
            label: "Confirm Order",
            type: "checkbox",
            className: "col-span-12",
          }}
          value={confirmOrder}
          onChange={(e) => setConfirmOrder(e.target.checked)}
        />
        <p className="text-gray-500 font-semibold ml-7">
          Check only if this is a confirmed order.
        </p>
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
                <Printer className="h-4 w-4 mr-1.5" />
                Print Invoice
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

export default Quotation;
