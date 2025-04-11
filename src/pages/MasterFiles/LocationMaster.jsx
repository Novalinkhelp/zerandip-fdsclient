import {
    MapPin,
    Download,
    Plus,
    Search,
    EllipsisVerticalIcon,
} from "lucide-react";
import { useState } from "react";
import Table from "../../components/table/Table";
import Modal from "../../components/shared/Modal";
import { locationMasterConfig } from "../../config/formFieldsConfig";

const LocationMaster = () => {
    const [locations, setLocations] = useState([
        {
            id: 1,
            code: "LOC001",
            name: "Main Warehouse",
            type: "Warehouse",
        },
        {
            id: 2,
            code: "LOC002",
            name: "Central Store",
            type: "Retail",
        },
        {
            id: 3,
            code: "LOC003",
            name: "Mombasa Distribution Center",
            type: "Distribution",
        },
        {
            id: 4,
            code: "LOC004",
            name: "Dar es Salaam Port Facility",
            type: "Port",
        },
        {
            id: 5,
            code: "LOC005",
            name: "Kampala Office",
            type: "Office",
        },
        {
            id: 6,
            code: "LOC006",
            name: "Arusha Storage Facility",
            type: "Warehouse",
        },
        {
            id: 7,
            code: "LOC007",
            name: "Kigali Transit Hub",
            type: "Transit",
        },
        {
            id: 8,
            code: "LOC008",
            name: "Kisumu Retail Center",
            type: "Retail",
        }
    ]);

    const [activeDropdown, setActiveDropdown] = useState(null);
    const [modalState, setModalState] = useState({
        isOpen: false,
        mode: "create",
        data: {}
    });

    const closeAllDropdowns = () => setActiveDropdown(null);

    const handleCreate = () => {
        closeAllDropdowns();
        setModalState({
            isOpen: true,
            mode: "create",
            data: {}
        });
    }

    const handleView = (location) => {
        closeAllDropdowns();
        setModalState({
            isOpen: true,
            mode: "view",
            data: location
        });
    }

    const handleEdit = (location) => {
        closeAllDropdowns();
        setModalState({
            isOpen: true,
            mode: "edit",
            data: location
        });
    }

    const handleDelete = (location) => {
        closeAllDropdowns();
        if (window.confirm(`Delete ${location.name}?`)) {
            setLocations(locations.filter((loc) => loc.id !== location.id))
        }
    }

    const handleSubmit = (formData) => {
        closeAllDropdowns();
        if (modalState.mode === "create") {
            setLocations([...locations, { ...formData, id: Date.now() }])
        } else {
            setLocations(
                locations.map((loc) =>
                    loc.id === modalState.data.id ? { ...loc, ...formData } : loc
                )
            );
        }
    }

    const columns = [
        {
            key: "code",
            header: "Location Code",
            render: (item) => (
                <span className="font-medium text-gray-900">{item.code}</span>
            ),
        },
        {
            key: "description",
            header: "Location Description",
            render: (item) => <span className="text-gray-800">{item.name}</span>,
        },
        {
            key: "type",
            header: "Type",
            render: (item) => <span className="text-gray-600">{item.type}</span>,
        },
        {
            key: "actions",
            header: "",
            render: (item, index, data) => (
                <div className="relative">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown(activeDropdown === item.id ? null : item.id);
                        }}
                        className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                        <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" />
                    </button>

                    {activeDropdown === item.id && (
                        <div
                            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white py-1.5 shadow-sm border border-gray-200 animate-slideInDown ${index >= data.length - 2 ? "bottom-full" : "top-full"
                                }`}
                        >
                            <div className="p-1">
                                <button
                                    onClick={() => handleView(item)}
                                    className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-150 cursor-pointer"
                                >
                                    <span className="flex-1 text-left">View Details</span>
                                </button>
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="flex w-full items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-150 cursor-pointer"
                                >
                                    <span className="flex-1 text-left">Edit</span>
                                </button>
                                <div className="my-1 border-t border-gray-100"></div>
                                <button
                                    onClick={() => handleDelete(item)}
                                    className="flex w-full items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-150 cursor-pointer"
                                >
                                    <span className="flex-1 text-left">Delete</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div onClick={closeAllDropdowns}>
            {/* Page Header */}
            <div className="mb-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <div className="mb-4 sm:mb-0 mr-0 sm:mr-4 md:mr-5 p-2.5 sm:p-3 md:p-3.5 bg-blue-50 rounded-xl text-blue-600 shadow-sm">
                            <MapPin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                                Location Master Files
                            </h1>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Manage Location master data.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 flex-col xs:flex-row items-start xs:items-center max-xs:w-full">
                        <button className="flex items- justify-center max-xs:w-full px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-colors cursor-pointer">
                            <Download className="h-4 w-4 mr-2" />
                            Export
                        </button>
                        <button
                            className="flex items-center justify-center max-xs:w-full px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors cursor-pointer"
                            onClick={handleCreate}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add New Location
                        </button>
                    </div>
                </div>

                {/* Search and Filter */}
                <div className="relative w-full sm:max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search location..."
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <Table
                    data={locations}
                    columns={columns}
                    currentPage={1}
                    totalPages={2}
                    onPageChange={(page) => console.log(`Page changed to ${page}`)}
                />
            </div>

            <Modal
                title={locationMasterConfig.title}
                isOpen={modalState.isOpen}
                onClose={() => setModalState({ ...modalState, isOpen: false })}
                mode={modalState.mode}
                initialData={modalState.data}
                tabs={locationMasterConfig.tabs}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default LocationMaster;
