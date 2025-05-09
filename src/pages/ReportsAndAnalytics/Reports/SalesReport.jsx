import { useEffect, useState } from "react"
import { getFormConfig } from "../../../utils/formConfig";
import { fetchSalesReportData } from "../../../utils/mockApi";
import FormField from "../../../components/forms/FormField"
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { Printer } from "lucide-react";

const SalesReport = () => {
    const [reportType, setReportType] = useState("");
    const [reportParameters, setReportParameters] = useState({});
    const [reportData, setReportData] = useState([]);
    const [tableColumns, setTableColumns] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const config = getFormConfig("salesReport");

    const handleReportTypeChange = (e) => {
        setReportType(e.target.value);
        handleResetForm();
    }

    const handleResetForm = () => {
        setReportParameters({});
        setReportData([]);
        setTableColumns([]);
    }

    useEffect(() => {
        const fetchReportData = async () => {
            if (!reportType) return;

            setIsLoading(true);

            try {
                const response = await fetchSalesReportData(reportType);

                if (response.success) {
                    setReportData(response.data);
                    const formattedColumns = response.columns.map((column) => ({
                        ...column,
                        render: (item) => {
                            const cell = column.cellConfig(item);
                            return (
                                <span className={cell.className}>{cell.value}</span>
                            )
                        }
                    }))
                    setTableColumns(formattedColumns);
                } else {
                    setError(response.message || "Failed to fetch report data");
                    setReportData([]);
                    setTableColumns([]);
                }

            } catch (error) {
                setError(error.message || "Unexpected error occurred");
                setReportData([]);
                setTableColumns([]);
            } finally {
                setIsLoading(false);
            }
        };

        if (reportType) {
            fetchReportData();
        }
    }, [reportType]);

    const reportTypeSelection = {
        name: "reportType",
        label: "Report Type",
        type: "select",
        options: [
            {
                "value": "breakDownReportItem",
                "label": "Break Down Report-Item"
            },
            {
                "value": "dailySalesReport",
                "label": "Daily Sales Report"
            },
            {
                "value": "dailySalesSummary",
                "label": "Daily Sales Summary"
            },
            {
                "value": "monthlySalesReports",
                "label": "Monthly Sales Reports"
            },
            {
                "value": "salesmanReport",
                "label": "Salesman Report"
            },
            {
                "value": "lostSalesReports",
                "label": "Lost Sales Reports"
            },
            {
                "value": "rejectReport",
                "label": "Reject Report"
            },
            {
                "value": "dealerSalesReport",
                "label": "Dealer Sales Report"
            },
            {
                "value": "salesMovementReport",
                "label": "Sales Movement Report"
            },
            {
                "value": "areaSalesReport",
                "label": "Area Sales Report"
            },
            {
                "value": "salesSummaryReport",
                "label": "Sales Summary Report"
            },
            {
                "value": "itemDetailsReport",
                "label": "Item Details Report"
            },
            {
                "value": "salesLostDetails",
                "label": "Sales / Lost Details"
            },
            {
                "value": "categoryWiseSales",
                "label": "Category wise Sales"
            }
        ],
        placeholder: "Select Report Type",
        className: "col-span-12 md:col-span-6",

    }
    return (
        <div className="space-y-12">
            <div className="grid grid-cols-12 bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
                <FormField
                    field={reportTypeSelection}
                    onChange={handleReportTypeChange}
                    value={reportType}
                />
            </div>

            <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
                <DynamicForm
                    fields={config.fields}
                    values={reportParameters}
                    onChange={setReportParameters}
                />
            </div>

            {isLoading && (
                <div className="flex justify-center items-center w-full h-64">
                    <span className="text-gray-500">Loading Report Data...</span>
                </div>
            )}

            {error && (
                <div className="flex justify-center items-center w-full h-64">
                    <span className="text-gray-500">{error}</span>
                </div>
            )}


            {
                reportData.length > 0 && (
                    <div className="bg-white p-6 rounded-lg shadow overflow-hidden">
                        <Table
                            data={reportData}
                            columns={tableColumns}
                            currentPage={1}
                            totalPages={1}
                            onPageChange={(page) => {
                                console.log(`Page changed to ${page}`);
                            }}
                        />
                        <div className="flex flex-col md:flex-row gap-2 justify-end items-center w-full mt-4">
                            <button
                                onClick={() => { }}
                                className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer md:mr-3"
                            >
                                <Printer className="h-4 w-4 mr-1.5" />
                                Print Report
                            </button>
                            <button
                                onClick={handleResetForm}
                                className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SalesReport