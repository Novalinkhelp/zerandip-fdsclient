import { useState } from "react";
import { getFormConfig } from "../../../utils/formConfig";
import useAutofill from "../../../hooks/useAutofill";
import DynamicForm from "../../../components/forms/DynamicForm";
import Table from "../../../components/table/Table";
import { Clock, Plus } from "lucide-react";

const RepWorkingSchedule = () => {
  const { rep, dailyWork } = getFormConfig("repWorkingSchedule");
  const [repInformation, setRepInformation] = useState({});
  const [dailyWorkInformation, setDailyWorkInformation] = useState({});
  const [dailySchedule, setDailySchedule] = useState([]);

  const repAutoComplete = useAutofill(repInformation, setRepInformation, rep);

  const dailyWorkAutoComplete = useAutofill(
    dailyWorkInformation,
    setDailyWorkInformation,
    dailyWork
  );

  const columns = [
    {
      key: "seq",
      header: "Seq",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.seq}</span>
      ),
    },
    {
      key: "customerCode",
      header: "Customer Code",
      render: (item) => (
        <span className="text-gray-800">{item.customerCode}</span>
      ),
    },
    {
      key: "areaCode",
      header: "Area Code",
      render: (item) => <span className="text-gray-600">{item.areaCode}</span>,
    },
    {
      key: "timeFrom",
      header: "Time From",
      render: (item) => <span className="text-gray-600">{item.timeFrom}</span>,
    },
    {
      key: "timeTo",
      header: "Time To",
      render: (item) => <span className="text-gray-600">{item.timeTo}</span>,
    },
    {
      key: "reasonRemarkCode",
      header: "Remarks",
      render: (item) => (
        <span className="text-gray-600">{item.reasonRemarkCode}</span>
      ),
    },
    {
      key: "customerAddress",
      header: "Address",
      render: (item) => (
        <span className="text-gray-600">{item.customerAddress}</span>
      ),
    },
  ];

  const handleAddWork = () => {
    const newWork = {
      seq: dailySchedule.length + 1,
      ...repInformation,
      ...dailyWorkInformation,
    };
    setDailySchedule((prev) => [...prev, newWork]);
    handleResetForm();
  };

  const handleResetForm = () => {
    setRepInformation({});
    setDailyWorkInformation({});
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
          Rep Daily Working Schedule
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Schedule daily tasks for the sales representative.
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
        <h2 className="font-semibold text-lg text-gray-900">
          Daily Work Details
        </h2>
        <DynamicForm
          fields={dailyWork.fields}
          values={dailyWorkInformation}
          onChange={setDailyWorkInformation}
          onAutocompleteSelect={dailyWorkAutoComplete.handleAutocompleteSelect}
        />
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
          <button
            onClick={handleAddWork}
            className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3 sm:mb-3"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Add Work
          </button>
          <button
            onClick={handleResetForm}
            className="w-full justify-center md:w-auto px-5 py-2.5 rounded-lg font-medium text-gray-800 hover:text-red-500 hover:ring-2 hover:ring-red-500/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 flex items-center cursor-pointer sm:mb-3"
          >
            Cancel
          </button>
        </div>
      </div>

      {dailySchedule.length > 0 ? (
        <div className="flex flex-col gap-6 mb-4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table
              data={dailySchedule}
              columns={columns}
              currentPage={1}
              totalPages={1}
              onPageChange={(page) => {
                console.log(`Page changed to ${page}`);
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
            <button
              onClick={() => {}}
              className="w-full justify-center md:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer mr-3 sm:mb-3"
            >
              <Clock className="h-4 w-4 mr-1.5" />
              Schedule Daily Work
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

export default RepWorkingSchedule;
