import React from "react";

const Tabs = ({ children, activeTab, onTabChange }) => {
  const handleTabClick = (index) => {
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <div>
      <div className="flex space-x-1 border-b border-gray-100">
        {React.Children.map(children, (child, index) => (
          <button
            className={`px-4 py-2.5 font-medium rounded-t-lg transition-all ${
              activeTab === index
                ? "text-blue-600 bg-blue-50/70 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            } ${
              child.props.disabled
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => !child.props.disabled && handleTabClick(index)}
            disabled={child.props.disabled}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <div>{children}</div>;
};

export { Tabs, Tab };
