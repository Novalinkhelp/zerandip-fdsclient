import FormField from "./FormField";

const DynamicForm = ({
  fields,
  values,
  onChange,
  errors,
  onAutocompleteSelect = () => {},
  disabled,
}) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue;
    if (type === "checkbox") {
      newValue = checked;
    } else if (type === "file") {
      newValue = value;
    } else {
      newValue = value;
    }

    onChange({ ...values, [name]: newValue });
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={values[field.name]}
          onChange={handleChange}
          errors={errors}
          disabled={field.disabled || disabled}
          onAutocompleteSelect={onAutocompleteSelect}
        />
      ))}
    </div>
  );
};

export default DynamicForm;
