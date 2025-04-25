const InvoiceSummary = ({ totalItems, grossValue, discountValue, netValue }) => {
    return (
        <div className='flex flex-col justify-between items-center p-8 bg-gray-50 shadow-sm rounded-lg'>
            <div className="flex justify-between items-center w-full mb-4">
                <h2 className="font-semibold text-gray-500">Total items</h2>
                <p className="font-semibold text-lg text-gray-800">{totalItems}</p>
            </div>
            <div className="flex justify-between items-center w-full mb-4">
                <h2 className="font-semibold text-gray-500">Total Value</h2>
                <p className="font-semibold text-lg text-gray-800">
                    {grossValue}
                </p>
            </div>
            <div className="flex justify-between items-center w-full mb-4">
                <h2 className="font-semibold text-gray-500">Total Discount (%)</h2>
                <p className="font-semibold text-lg text-red-600">
                    {discountValue}
                </p>
            </div>

            <div className="border w-full border-gray-200" />

            <div className="flex justify-between items-center w-full mt-4">
                <h2 className="font-semibold text-gray-800">Total Amount</h2>
                <p className="font-semibold text-lg text-gray-800">
                    {netValue}
                </p>
            </div>

        </div>
    )
}

export default InvoiceSummary