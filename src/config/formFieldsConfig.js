export const companyMasterConfig = {
  title: "Company Master",
  tabs: [
    {
      name: "Company Details",
      fields: [
        [
          { name: "code", label: "Company Code", type: "text", required: true },
          { name: "name", label: "Company Name", type: "text", required: true },
        ],
        [
          { name: "email", label: "Email", type: "email", required: true },
          {
            name: "telephone",
            label: "Telephone",
            type: "tel",
            required: true,
          },
        ],
        [
          { name: "mobileSms", label: "Mobile (SMS)", type: "tel" },
          { name: "whatsapp", label: "WhatsApp", type: "tel" },
          { name: "mobile", label: "Mobile", type: "tel" },
        ],
        [
          {
            name: "address",
            label: "Address",
            type: "textarea",
            required: true,
            colSpan: "full",
          },
        ],
      ],
    },
    {
      name: "Financial Details",
      fields: [
        [
          {
            name: "rsInvoiceCash",
            label: "R/S Invoice Numbers (CASH)",
            type: "text",
            required: true,
          },
          {
            name: "rsInvoiceCredit",
            label: "CREDIT for R/S Invoice",
            type: "text",
            required: true,
          },
        ],
        [
          {
            name: "wsInvoiceCash",
            label: "W/S Invoice Numbers (CASH)",
            type: "text",
          },
          {
            name: "wsInvoiceCredit",
            label: "CREDIT for W/S Invoice",
            type: "text",
          },
          { name: "wsInvoiceSpecial", label: "SPECIAL", type: "text" },
        ],
        [
          {
            name: "withholdingTax",
            label: "Withholding Tax (%)",
            type: "number",
          },
          { name: "crDaysCa", label: "CR.DAYS-CA", type: "number" },
          { name: "cr", label: "CR", type: "number" },
        ],
        [
          {
            name: "ssclRate",
            label: "SSCL Rate",
            type: "number",
            required: true,
          },
          {
            name: "orderNumber",
            label: "Order Number",
            type: "number",
            required: true,
          },
        ],
        [
          {
            name: "srnNumber",
            label: "S.R.N. Number",
            type: "number",
            required: true,
          },
          {
            name: "currentYear",
            label: "Current Year",
            type: "number",
            required: true,
          },
        ],
        [{ name: "vat", label: "VAT", type: "number", required: true }],
      ],
    },
  ],
};

export const bankMasterConfig = {
  title: "Bank Master",
  tabs: [
    {
      name: "Basic Info",
      fields: [
        [
          { name: "code", label: "Bank Code", type: "text", required: true },
          { name: "name", label: "Bank Name", type: "text", required: true },
        ],
        [
          {
            name: "branchCode",
            label: "Branch Code",
            type: "text",
            required: true,
          },
          {
            name: "branchName",
            label: "Branch Name",
            type: "text",
            required: true,
          },
        ],
        [{ name: "swiftCode", label: "SWIFT Code", type: "text" }],
        [
          {
            name: "address",
            label: "Address",
            type: "textarea",
            required: true,
          },
        ],
      ],
    },
    {
      name: "Contact Info",
      fields: [
        [
          { name: "telephone", label: "Telephone", type: "number" },
          { name: "mobile", label: "Mobile Phone", type: "number" },
        ],
        [
          { name: "fax", label: "Fax", type: "number" },
          { name: "email", label: "Email", type: "email" },
        ],
        [
          { name: "contactPerson", label: "Contact Person", type: "text" },
          { name: "bankCEOName", label: "Bank CEO Name", type: "text" },
        ],
      ],
    },
  ],
};

export const bankBranchMasterConfig = {
  title: "Bank Branch Master",
  tabs: [
    {
      name: "Branch Info",
      fields: [
        [
          { name: "code", label: "Branch Code", type: "text", required: true },
          { name: "name", label: "Branch Name", type: "text", required: true },
        ],
        [
          { name: "bank", label: "Bank", type: "text", required: true },
          { name: "bankCEO", label: "Bank CEO", type: "text" },
        ],
        [
          { name: "city", label: "City", type: "text" },
          { name: "district", label: "District", type: "text" },
        ],
        [{ name: "address", label: "Address", type: "textarea" }],
      ],
    },
    {
      name: "Contact Info",
      fields: [
        [
          { name: "telephone", label: "Telephone", type: "tel" },
          { name: "email", label: "Email", type: "email" },
        ],
        [
          { name: "fax", label: "Fax", type: "tel" },
          { name: "bankBranchCEO", label: "Bank CEO Name", type: "text" },
        ],
      ],
    },
  ],
};

export const locationMasterConfig = {
  title: "Location Master",
  tabs: [
    {
      name: "Location Details",
      fields: [
        [
          {
            name: "code",
            label: "Location Code",
            type: "text",
            required: true,
          },
          {
            name: "type",
            label: "Type (Main/ Rep/ Oth)",
            type: "text",
            required: true,
          },
        ],
        [
          {
            name: "name",
            label: "Location Description",
            type: "text",
            required: true,
          },
        ],
      ],
    },
  ],
};

export const utilityMasterConfig = {
  title: "Utility Master",
  tabs: [
    {
      name: "Utility Details",
      fields: [
        [
          { name: "code", label: "Expense Code", type: "text" },
          { name: "reference", label: "Expense Reference No", type: "text" },
        ],
        [
          { name: "description", label: "Description", type: "text" },
          { name: "period", label: "Period", type: "text" },
        ],
        [
          { name: "amount", label: "Amount", type: "number" },
          {
            name: "currentOutstanding",
            label: "Current Outstanding",
            type: "number",
          },
        ],
      ],
    },
  ],
};

export const routeMasterConfig = {
  title: "Route Master",
  tabs: [
    {
      name: "Route Details",
      fields: [
        [{ name: "code", label: "Route Code", type: "text", required: true }],
        [
          {
            name: "name",
            label: "Route Description",
            type: "text",
            required: true,
          },
        ],
      ],
    },
  ],
};

export const areaMasterConfig = {
  title: "Area Master",
  tabs: [
    {
      name: "Area Details",
      fields: [
        [
          { name: "code", label: "Area Code", type: "text", required: true },
          { name: "name", label: "Area Name", type: "text", required: true },
        ],
        [
          { name: "city", label: "City", type: "text", required: true },
          {
            name: "routeCode",
            label: "Route Code",
            type: "text",
            required: true,
          },
        ],
      ],
    },
  ],
};
