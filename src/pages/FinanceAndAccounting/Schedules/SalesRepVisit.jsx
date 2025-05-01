import { useState } from "react";
import { getFormConfig } from "../../../utils/formConfig";
import useAutofill from "../../../hooks/useAutofill";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { Calendar, Plus } from "lucide-react";

const SalesRepVisit = () => {
  const { rep, visit } = getFormConfig("salesRepVisit");
  const [repInformation, setRepInformation] = useState({});
  const [visitInformation, setVisitInformation] = useState({});
  const [visits, setVisits] = useState([]);

  const repAutoComplete = useAutofill(repInformation, setRepInformation, rep);

  const visitAutoComplete = useAutofill(
    visitInformation,
    setVisitInformation,
    visit
  );

  const columns = [
    {
      key: "customerCode",
      header: "Customer Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.customerCode}</span>
      ),
    },
    {
      key: "areaCode",
      header: "Area Code",
      render: (item) => <span className="text-gray-800">{item.areaCode}</span>,
    },
    {
      key: "target",
      header: "Target",
      render: (item) => <span className="text-gray-600">{item.target}</span>,
    },
    {
      key: "creditLimit",
      header: "Credit Limit",
      render: (item) => (
        <span className="text-gray-600">{item.creditLimit}</span>
      ),
    },
    {
      key: "achievement",
      header: "Achievement",
      render: (item) => (
        <span className="text-gray-600">{item.achievement}</span>
      ),
    },
    {
      key: "select",
      header: "Select",
      render: (item) => (
        <span className="text-gray-600">
          {item.select === true ? "Yes" : "No"}
        </span>
      ),
    },
    {
      key: "visitDate",
      header: "Visit Date",
      render: (item) => <span className="text-gray-600">{item.visitDate}</span>,
    },
  ];

  const handleAddVisit = () => {
    const newVisit = {
      ...repInformation,
      ...visitInformation,
    };
    setVisits((prevVisits) => [...prevVisits, newVisit]);
    handleResetForm();
  };

  const handleResetForm = () => {
    setRepInformation({});
    setVisitInformation({});
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
          Schedule Sales Rep Visit
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Schedule a visit for the sales representative.
        </p>
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">Rep Details</h2>
        <DynamicForm
          fields={rep.fields}
          values={repInformation}
          onChange={setRepInformation}
          onAutocompleteSelect={repAutoComplete.handleAutocompleteSelect}
        />
      </div>

      <div className="flex bg-gray-50 flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-semibold text-lg text-gray-900">Visit Details</h2>
        <DynamicForm
          fields={visit.fields}
          values={visitInformation}
          onChange={setVisitInformation}
          onAutocompleteSelect={visitAutoComplete.handleAutocompleteSelect}
        />
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
          <button
            onClick={handleAddVisit}
            className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3 sm:mb-3"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Add to Visit
          </button>
          <button
            onClick={handleResetForm}
            className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer sm:mb-3"
          >
            Cancel
          </button>
        </div>
      </div>

      {visits.length > 0 ? (
        <div className="flex flex-col gap-6 mb-4">
          <Table
            data={visits}
            columns={columns}
            currentPage={1}
            totalPages={1}
            onPageChange={(page) => {
              console.log(`Page changed to ${page}`);
            }}
          />
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
            <button
              onClick={() => {}}
              className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3 sm:mb-3"
            >
              <Calendar className="h-4 w-4 mr-1.5" />
              Schedule Visit
            </button>
            <button
              onClick={handleResetForm}
              className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer sm:mb-3"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">No visits added yet.</p>
        </div>
      )}
    </div>
  );
};

export default SalesRepVisit;
