import { useCallback } from "react";

const useAutofill = (formData, setFormData, config, activeTab) => {
  const handleAutocompleteSelect = useCallback(
    (fieldName, item) => {
      const newData = { ...formData };

      let fieldConfig;

      if (config.useTabs) {
        fieldConfig = config.tabs[activeTab].fields.find(
          (f) => f.name === fieldName
        );
      } else {
        fieldConfig = config.fields.find((f) => f.name === fieldName);
      }

      newData[fieldName] = item;

      if (fieldConfig?.autofill) {
        Object.entries(fieldConfig.autofill).forEach(
          ([targetField, sourceProperty]) => {
            newData[targetField] = item[sourceProperty];
          }
        );
      }

      setFormData(newData);
    },
    [formData, setFormData, config, activeTab]
  );

  return { handleAutocompleteSelect };
};

export default useAutofill;
