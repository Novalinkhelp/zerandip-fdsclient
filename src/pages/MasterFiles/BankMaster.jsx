import {
    Building,
    Download,
    Plus,
    Search,
    EllipsisVerticalIcon,
} from "lucide-react";
import { useState } from "react";
import Table from "../../components/table/Table";
import Modal from "../../components/shared/Modal";
import { bankMasterConfig } from "../../config/formFieldsConfig";

const BankMaster = () => {
    const [banks, setBanks] = useState([
        {
            id: 1,
            code: "BANK001",
            name: "Equity Bank",
            branchCode: "EQT-NBO",
            branchName: "Nairobi Main",
            city: "Nairobi",
        },
        {
            id: 2,
            code: "BANK002",
            name: "KCB Bank",
            branchCode: "KCB-MSA",
            branchName: "Mombasa Downtown",
            city: "Mombasa",
        },
        {
            id: 3,
            code: "BANK003",
            name: "Co-operative Bank",
            branchCode: "COOP-WES",
            branchName: "Westlands",
            city: "Nairobi",
        },
        {
            id: 4,
            code: "BANK004",
            name: "Stanbic Bank",
            branchCode: "STB-KLA",
            branchName: "Kampala Central",
            city: "Kampala",
        },
        {
            id: 5,
            code: "BANK005",
            name: "CRDB Bank",
            branchCode: "CRDB-DSM",
            branchName: "Dar es Salaam Main",
            city: "Dar es Salaam",
        },
        {
            id: 6,
            code: "BANK006",
            name: "Bank of Kigali",
            branchCode: "BOK-KGL",
            branchName: "Kigali Heights",
            city: "Kigali",
        },
        {
            id: 7,
            code: "BANK007",
            name: "DTB Bank",
            branchCode: "DTB-MSA",
            branchName: "Mombasa Road",
            city: "Nairobi",
        },
        {
            id: 8,
            code: "BANK008",
            name: "I&M Bank",
            branchCode: "IMB-PKD",
            branchName: "Parklands",
            city: "Nairobi",
        },
    ]);

    const [activeDropdown, setActiveDropdown] = useState(null);
    const [modalState, setModalState] = useState({
        isOpen: false,
        mode: "create",
        data: {}
    })

    const closeAllDropdowns = () => setActiveDropdown(null);

    const handleCreate = () => {
        closeAllDropdowns();
        setModalState({
            isOpen: true,
            mode: "create",
            data: {}
        })
    }

    const handleView = (bank) => {
        closeAllDropdowns();
        setModalState({
            isOpen: true,
            mode: "view",
            data: bank
        })
    }

    const handleEdit = (bank) => {
        closeAllDropdowns();
        setModalState({
            isOpen: true,
            mode: "edit",
            data: bank
        })
    }

    const handleDelete = (bank) => {
        closeAllDropdowns();
        if (window.confirm(`Delete ${bank.name}?`)) {
            setBanks(banks.filter((b) => b.id !== bank.id))
        }
    }

    const handleSubmit = (formData) => {
        closeAllDropdowns();
        if (modalState.mode === "create") {
            setBanks([...banks, { ...formData, id: Date.now() }])
        } else {
            setBanks(
                banks.map(
                    (b) => b.id === modalState.data.id ? { ...b, ...formData } : b
                )
            )
        }
    }

    const columns = [
        {
            key: "code",
            header: "Bank Code",
            render: (item) => (
                <span className="font-medium text-gray-900">{item.code}</span>
            ),
        },
        {
            key: "name",
            header: "Bank Name",
            render: (item) => <span className="text-gray-800">{item.name}</span>,
        },
        {
            key: "branch-code",
            header: "Branch Code",
            render: (item) => (
                <span className="text-gray-600">{item.branchCode}</span>
            ),
        },
        {
            key: "branch-name",
            header: "Branch Name",
            render: (item) => <span className="text-gray-600">{item.branchName}</span>,
        },
        {
            key: "city",
            header: "City",
            render: (item) => <span className="text-gray-600">{item.city}</span>,
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
                            <Building className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                                Bank Master Files
                            </h1>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Manage Bank master data.
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
                            Add New Bank
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
                        placeholder="Search banks..."
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <Table
                    data={banks}
                    columns={columns}
                    currentPage={1}
                    totalPages={2}
                    onPageChange={(page) => console.log(`Page changed to ${page}`)}
                />
            </div>

            <Modal
                title={bankMasterConfig.title}
                isOpen={modalState.isOpen}
                onClose={() => setModalState({ ...modalState, isOpen: false })}
                mode={modalState.mode}
                initialData={modalState.data}
                tabs={bankMasterConfig.tabs}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default BankMaster;
