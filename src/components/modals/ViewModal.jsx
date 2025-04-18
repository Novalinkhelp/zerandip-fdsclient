import React, { useState } from "react";
import BaseModal from "./BaseModal";
import { Tabs, Tab } from "../tabs/Tabs";
import DynamicForm from "../forms/DynamicForm";
import { getFormConfig } from "../../utils/formConfig";
import { X } from "lucide-react";

const ViewModal = ({ recordType, isOpen, onClose, data, width }) => {
  const config = getFormConfig(recordType);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={`View ${config.title}`}
      width={width}
    >
      {config.useTabs ? (
        <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
          {config.tabs.map((tab, index) => (
            <Tab key={index} label={tab.label}>
              <DynamicForm
                fields={tab.fields}
                values={data}
                onChange={() => {}}
                disabled={true}
              />
            </Tab>
          ))}
        </Tabs>
      ) : (
        <DynamicForm
          fields={config.fields}
          values={data}
          onChange={() => {}}
          disabled={true}
        />
      )}

      <div className="flex justify-end mt-6 pt-5 border-t border-gray-100">
        <button
          onClick={onClose}
          className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200/50 flex items-center cursor-pointer"
        >
          <X className="h-4 w-4 mr-2" />
          Close
        </button>
      </div>
    </BaseModal>
  );
};

export default ViewModal;
