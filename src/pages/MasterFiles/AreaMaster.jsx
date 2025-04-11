import {
    Map,
    Download,
    Plus,
    Search,
    EllipsisVerticalIcon,
} from "lucide-react";
import { useState } from "react";
import Table from "../../components/table/Table";
import Modal from "../../components/shared/Modal";
import { areaMasterConfig } from "../../config/formFieldsConfig";

const AreaMaster = () => {
    const [areas, setAreas] = useState([
        {
            id: 1,
            code: "AREA001",
            name: "Central Nairobi",
            city: "Nairobi",
            routeCode: "RT001"
        },
        {
            id: 2,
            code: "AREA002",
            name: "Westlands",
            city: "Nairobi",
            routeCode: "RT002"
        },
        {
            id: 3,
            code: "AREA003",
            name: "Mombasa CBD",
            city: "Mombasa",
            routeCode: "RT003"
        },
        {
            id: 4,
            code: "AREA004",
            name: "Nyali",
            city: "Mombasa",
            routeCode: "RT003"
        },
        {
            id: 5,
            code: "AREA005",
            name: "Kampala Central",
            city: "Kampala",
            routeCode: "RT004"
        },
        {
            id: 6,
            code: "AREA006",
            name: "Dar es Salaam Port",
            city: "Dar es Salaam",
            routeCode: "RT005"
        },
        {
            id: 7,
            code: "AREA007",
            name: "Kigali Business District",
            city: "Kigali",
            routeCode: "RT006"
        },
        {
            id: 8,
            code: "AREA008",
            name: "Kisumu Lakeside",
            city: "Kisumu",
            routeCode: "RT007"
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

    const handleView = (area) => {
        closeAllDropdowns();
        setModalState({
            isOpen: true,
            mode: "view",
            data: area
        });
    }

    const handleEdit = (area) => {
        closeAllDropdowns();
        setModalState({
            isOpen: true,
            mode: "edit",
            data: area
        });
    }

    const handleDelete = (area) => {
        closeAllDropdowns();
        if (window.confirm(`Delete ${area.name}?`)) {
            setAreas(areas.filter((a) => a.id !== area.id));
        }
    }

    const handleSubmit = (formData) => {
        closeAllDropdowns();
        if (modalState.mode === "create") {
            setAreas([...areas, { ...formData, id: Date.now() }])
        } else {
            setAreas(
                areas.map((area) =>
                    area.id === modalState.data.id ? { ...area, ...formData } : area)
            );
        }

    }

    const columns = [
        {
            key: "code",
            header: "Area Code",
            render: (item) => (
                <span className="font-medium text-gray-900">{item.code}</span>
            ),
        },
        {
            key: "name",
            header: "Area Name",
            render: (item) => <span className="text-gray-800">{item.name}</span>,
        },
        {
            key: "city",
            header: "City",
            render: (item) => <span className="text-gray-600">{item.city}</span>,
        },
        {
            key: "route-code",
            header: "Route Code",
            render: (item) => <span className="text-gray-600">{item.routeCode}</span>,
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
                            <Map className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                                Area Master Files
                            </h1>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Manage Area master data.
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
                            onClick={handleCreate}
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Add New Area
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
                        placeholder="Search Area..."
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <Table
                    data={areas}
                    columns={columns}
                    currentPage={1}
                    totalPages={2}
                    onPageChange={(page) => console.log(`Page changed to ${page}`)}
                />
            </div>

            <Modal
                title={areaMasterConfig.title}
                isOpen={modalState.isOpen}
                onClose={() => setModalState({ ...modalState, isOpen: false })}
                mode={modalState.mode}
                initialData={modalState.data}
                tabs={areaMasterConfig.tabs}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default AreaMaster;
