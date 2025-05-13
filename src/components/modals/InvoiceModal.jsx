import InvoiceSummary from "../sales-transactions/InvoiceSummary";
import Table from "../table/Table";
import BaseModal from "./BaseModal"
import { Printer } from "lucide-react";

const InvoiceModal = ({
    isOpen,
    onClose,
    onSubmit,
    width,
    columns,
    transaction,
    typeOfTransaction,
    salesType,
    additionalButtons
}) => {
    const invoiceNumber =
        transaction?.invoice?.quotationNumber ??
        transaction?.invoice?.invoiceNumber ??
        "N/A";

    const renderCustomerInformation = () => {
        if (typeOfTransaction === "Return Note") {
            return (
                <>
                    <h2 className="md:text-xl font-semibold">{`Customer Code: ${transaction?.invoice.customerCode}`}</h2>
                </>
            )
        }

        if (typeOfTransaction === "Quotation") {
            return (
                <>
                    <h2 className="md:text-xl font-semibold">{transaction?.customer.customerName || "Customer"}</h2>
                    <p className="text-sm md:text-base text-gray-500">{`Customer Code: ${transaction?.customer.customerCode}`}</p>
                </>
            )
        }

        const transactionType = transaction?.invoice.typeOfSale === "RCC" ? "Retail Sales" : "Whole Sales";

        return (
            <>
                <h2 className="md:text-xl font-semibold">{transaction?.customer.customerName || "Customer"}</h2>
                <p className="text-sm md:text-base text-gray-500">{`${transactionType} - ${salesType}`}</p>
                <p className="text-sm md:text-base text-gray-500">{transaction?.invoice.typeOfSale}</p>
            </>
        )
    }

    const renderDocumentInformation = () => {
        if (typeOfTransaction === "Return Note") {
            return (
                <>
                    <p className="text-sm md:text-base text-gray-500">{`Invoice No.: ${invoiceNumber}`}</p>
                    <p className="text-sm md:text-base text-gray-500">{`Invoice Date: ${transaction?.invoice.invoiceDate}`}</p>
                    <p className="text-sm md:text-base text-gray-500">{`Return Date: ${transaction?.invoice.returnDate}`}</p>
                </>
            )
        }

        if (typeOfTransaction === "Quotation") {
            return (
                <>
                    <p className="text-sm md:text-base text-gray-500">{`Quotation No.: ${invoiceNumber}`}</p>
                    <p className="text-sm md:text-base text-gray-500">{`Rep Code: ${transaction?.invoice.repCode}`}</p>
                    <p className="text-sm md:text-base text-gray-500">{`${transaction?.invoice.date}`}</p>
                </>
            )
        }

        return (
            <p className="text-sm md:text-base text-gray-500">{invoiceNumber}</p>
        )
    }

    console.log("Transaction", transaction);
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            title={`${typeOfTransaction} Preview`}
            width={width}
        >
            <div className="flex justify-between items-start p-2 md:p-4">
                <div className="flex flex-col items-start justify-between gap-2">
                    {renderCustomerInformation()}
                </div>
                <div className="flex flex-col justify-between items-end gap-2">
                    <h2 className="md:text-xl font-semibold">{typeOfTransaction}</h2>
                    {renderDocumentInformation()}

                </div>
            </div >

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <Table
                    data={transaction?.items ?? []}
                    columns={columns}
                    currentPage={1}
                    totalPages={1}
                    onPageChange={(page) => {
                        console.log(`Page changed to ${page}`);
                    }}
                    className="bg-white"
                />
            </div>

            <div className="flex flex-col gap-4 p-6  bg-gray-100 rounded-lg">
                <InvoiceSummary
                    totalItems={transaction?.items.length ?? 0}
                    grossValue={transaction?.salesSummary.grossValue ?? 0}
                    discountValue={transaction?.salesSummary.discountValue ?? 0}
                    netValue={transaction?.salesSummary.netValue ?? 0}
                />
                <div className="flex flex-col md:flex-row gap-2 justify-end items-center w-full mt-4">
                    {
                        additionalButtons && additionalButtons.length > 0 && (
                            additionalButtons.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={button.onClick}
                                    className={button.className}
                                >
                                    {button.icon}
                                    {button.label}
                                </button>
                            ))
                        )
                    }
                    <button
                        onClick={onSubmit}
                        className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer md:mr-3"
                    >
                        <Printer className="h-4 w-4 mr-1.5" />
                        Print Invoice
                    </button>
                </div>
            </div>
        </BaseModal >
    )
}

export default InvoiceModal