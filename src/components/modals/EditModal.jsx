import React, { useEffect, useState } from "react";
import BaseModal from "./BaseModal";
import { Tabs, Tab } from "../tabs/Tabs";
import DynamicForm from "../forms/DynamicForm";
import { getFormConfig } from "../../utils/formConfig";
import useAutofill from "../../hooks/useAutofill";
import { ChevronLeft, Save } from "lucide-react";

const EditModal = ({ recordType, isOpen, onClose, data, onSubmit, width }) => {
  const config = getFormConfig(recordType);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState(data);
  const [errors, setErrors] = useState({});

  const { handleAutocompleteSelect } = useAutofill(
    formData,
    setFormData,
    config,
    activeTab
  );

  useEffect(() => {
    setFormData(data || {});
  }, [data]);

  const validateForm = () => {
    const fieldsToValidate = config.useTabs
      ? config.tabs[activeTab].fields
      : config.fields;

    const newErrors = {};

    fieldsToValidate.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTabChange = (newTab) => {
    if (validateForm()) {
      setActiveTab(newTab);
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
      onClose();
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={`Edit ${config.title}`}
      width={width}
    >
      {config.useTabs ? (
        <>
          <Tabs activeTab={activeTab} onTabChange={handleTabChange}>
            {config.tabs.map((tab, index) => (
              <Tab key={index} label={tab.label}>
                <DynamicForm
                  fields={tab.fields}
                  values={formData}
                  onChange={setFormData}
                  errors={errors}
                  onAutocompleteSelect={handleAutocompleteSelect}
                />
              </Tab>
            ))}
          </Tabs>

          <div className="flex justify-between mt-6 pt-5 border-t border-gray-100">
            <div>
              {activeTab > 0 && (
                <button
                  onClick={() => handleTabChange(activeTab - 1)}
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200/50 flex items-center cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4 mr-1.5" />
                  Previous
                </button>
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSubmit}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer"
              >
                <Save className="h-4 w-4 mr-1.5" />
                Save Changes
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <DynamicForm
            fields={config.fields}
            values={formData}
            onChange={setFormData}
            errors={errors}
            onAutocompleteSelect={handleAutocompleteSelect}
          />

          <div className="flex justify-end mt-6 pt-5 border-t border-gray-100">
            <button
              onClick={handleSubmit}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex items-center cursor-pointer"
            >
              <Save className="h-4 w-4 mr-1.5" />
              Save Changes
            </button>
          </div>
        </>
      )}
    </BaseModal>
  );
};

export default EditModal;
