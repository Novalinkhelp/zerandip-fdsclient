import { useEffect, useState } from "react";
import { fetchItems, fetchLocationWiseItems } from "../../utils/mockApi";
import Table from "../../components/table/Table";
import FormField from "../../components/forms/FormField";

const ItemLocationWiseInquiry = () => {
    const [locationWiseItems, setLocationWiseItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedItem, setSelectedItem] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetchLocationWiseItems(selectedItem?.itemCode);
                const validData = data.filter(
                    (loc) => loc.locationCode && loc.itemCode
                )
                setLocationWiseItems(validData);
                setError(null);
            } catch (error) {
                setError("Failed to fetch locationWiseItems");
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [selectedItem])

    const columns = [
        {
            key: "locationCode",
            header: "Location Code",
            render: (item) => (
                <span className="font-medium text-gray-900">{item.locationCode}</span>
            ),
        },
        {
            key: "description",
            header: "Location Description",
            render: (item) => <span className="text-gray-800">{item.locationDescription}</span>,
        },
        {
            key: "quantityAvailable",
            header: "Quantity Available",
            render: (item) => <span className="text-gray-600">{item.quantityAvailable}</span>,
        },
    ];

    console.log(selectedItem)

    return (
        <div>
            {/* Page Header */}
            <div className="mb-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <div>
                            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                                Item Location Wise Inquiry
                            </h1>
                            <p className="text-gray-600 text-base sm:text-lg">
                                View item stock in each location.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-10 gap-40">
                    <FormField
                        field={{
                            name: "itemCode",
                            label: "Item Code",
                            type: "autocomplete",
                            fetchSuggestions: fetchItems,
                            placeholder: "Enter Item Code",
                            className: "col-span-10 md:col-span-5"
                        }}
                        onAutocompleteSelect={(name, item) => {
                            setSelectedItem(item);
                        }}
                    />
                    <FormField
                        field={{
                            name: "itemDescription",
                            label: "Item Description",
                            type: "text",
                            placeholder: "Item Description",
                            className: "col-span-10 md:col-span-5"
                        }}
                        value={selectedItem ? selectedItem.itemDescription : ""}
                        disabled={true}
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading companies...</p>
                    </div>
                ) : error ? (
                    <div className="p-8 text-center">
                        <p className="text-red-600">{error}</p>
                    </div>
                ) : locationWiseItems.length === 0 ? (
                    <div className="p-8 text-center">
                        <p className="text-gray-600">
                            {selectedItem ? `No locations found for item code ${selectedItem.itemCode}` : "Select an item to view locations."}
                        </p>
                    </div>
                ) : (
                    <Table
                        data={locationWiseItems}
                        columns={columns}
                        currentPage={1}
                        totalPages={10}
                        onPageChange={(page) => console.log(`Page changed to ${page}`)}
                    />
                )}
            </div>
        </div>
    );
};

export default ItemLocationWiseInquiry;
