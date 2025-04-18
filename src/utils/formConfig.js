export const getFormConfig = (recordType) => {
  const configs = {
    company: {
      title: "Company",
      useTabs: true,
      tabs: [
        {
          label: "Company Details",
          fields: [
            // First row
            {
              name: "companyName",
              label: "Company Code",
              type: "text",
              required: true,
              placeholder: "Enter company code (e.g., COMP001)",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "companyName",
              label: "Company Name",
              type: "text",
              required: true,
              placeholder: "Enter company name",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "email",
              label: "Email",
              type: "email",
              required: true,
              placeholder: "Enter company email",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "telephone",
              label: "Telephone",
              type: "text",
              required: true,
              placeholder: "Enter telephone number",
              className: "col-span-12 md:col-span-6",
            },
            // Third row
            {
              name: "mobileSMS",
              label: "Mobile (SMS)",
              type: "text",
              required: true,
              placeholder: "Enter mobile number for SMS",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "whatsapp",
              label: "WhatsApp",
              type: "text",
              required: true,
              placeholder: "Enter WhatsApp number",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "mobile",
              label: "Mobile",
              type: "text",
              required: true,
              placeholder: "Enter primary mobile number",
              className: "col-span-12 md:col-span-4",
            },
            // Fourth row (full width)
            {
              name: "address",
              label: "Address",
              type: "textarea",
              required: true,
              placeholder: "Enter company full address",
              className: "col-span-12",
            },
          ],
        },
        {
          label: "Financial Details",
          fields: [
            // First row
            {
              name: "rsInvoiceCash",
              label: "R/S Invoice Numbers (CASH)",
              type: "text",
              required: true,
              placeholder: "Enter R/S invoice numbers for cash",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "creditRSInvoice",
              label: "Credit for R/S Invoice",
              type: "text",
              required: true,
              placeholder: "Enter credit amount for R/S invoice",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "wsInvoiceCash",
              label: "W/S Invoice Numbers (CASH)",
              type: "text",
              required: true,
              placeholder: "Enter W/S invoice numbers for cash",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "creditWSInvoice",
              label: "Credit for W/S Invoice",
              type: "text",
              required: true,
              placeholder: "Enter credit amount for W/S invoice",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "special",
              label: "Special",
              type: "text",
              required: true,
              placeholder: "Enter special notes",
              className: "col-span-12 md:col-span-4",
            },
            // Third row
            {
              name: "withholdingTax",
              label: "Withholding Tax(%)",
              type: "number",
              required: true,
              placeholder: "Enter withholding tax percentage",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "crDaysCA",
              label: "CR.DAYS-CA",
              type: "text",
              required: true,
              placeholder: "Enter CR days for CA",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "cr",
              label: "CR",
              type: "text",
              required: true,
              placeholder: "Enter CR details",
              className: "col-span-12 md:col-span-4",
            },
            // Fourth row
            {
              name: "ssclRate",
              label: "SSCL Rate",
              type: "text",
              required: true,
              placeholder: "Enter SSCL rate",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "orderNumber",
              label: "Order Number",
              type: "text",
              required: true,
              placeholder: "Enter order number",
              className: "col-span-12 md:col-span-6",
            },
            // Fifth row
            {
              name: "srnNumber",
              label: "S.R.N Number",
              type: "text",
              required: true,
              placeholder: "Enter S.R.N number",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "currentYear",
              label: "Current Year",
              type: "text",
              required: true,
              placeholder: "Enter current financial year",
              className: "col-span-12 md:col-span-6",
            },
            // Sixth row (full width)
            {
              name: "vat",
              label: "VAT",
              type: "text",
              required: true,
              placeholder: "Enter VAT details",
              className: "col-span-12 sm:col-span-6",
            },
          ],
        },
      ],
    },
    customer: {
      title: "Customer",
      useTabs: true,
      tabs: [
        {
          label: "Customer",
          fields: [
            // First row
            {
              name: "customerCode",
              label: "Customer Code",
              type: "text",
              required: true,
              placeholder: "Enter customer code (e.g., CUST001)",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "customerName",
              label: "Customer Name",
              text: "text",
              required: true,
              placeholder: "Enter customer name",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "type",
              label: "Type",
              type: "select",
              options: [
                { value: "D-Customer", label: "D-Customer" },
                { value: "D-Supplier", label: "D-Supplier" },
              ],
              placeholder: "Select customer type",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "vatNumber",
              label: "VAT Number",
              type: "number",
              placeholder: "Enter VAT number",
              className: "col-span-12 md:col-span-6",
            },
            // Third row
            {
              name: "nic",
              label: "NIC",
              type: "text",
              placeholder: "Enter NIC number",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "withHoldingTax",
              label: "With Holding Tax",
              type: "number",
              placeholder: "Enter withholding tax percentage",
              className: "col-span-12 md:col-span-6",
            },
            // Fourth row
            {
              name: "businessRegistrationNo",
              label: "Business Registration No.",
              type: "text",
              placeholder: "Enter business registration number",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "owner",
              label: "Owner",
              type: "text",
              placeholder: "Enter owner name",
              className: "col-span-12 md:col-span-6",
            },
            // Fifth row
            {
              name: "auto",
              label: "Auto",
              type: "checkbox",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
        {
          label: "Contact",
          fields: [
            // First row
            {
              name: "mobilePhone",
              label: "Mobile Phone",
              type: "text",
              required: true,
              placeholder: "Enter mobile phone number",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "telephone",
              label: "Telephone",
              type: "text",
              placeholder: "Enter telephone number",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "email",
              label: "Email",
              type: "email",
              placeholder: "Enter email address",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "contactPerson",
              label: "Contact Person",
              type: "text",
              placeholder: "Enter contact person name",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
        {
          label: "Address",
          fields: [
            // First Row
            {
              name: "areaCode",
              label: "Area Code",
              type: "text",
              placeholder: "Enter area code",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "district",
              label: "District",
              type: "text",
              required: true,
              placeholder: "Enter district",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "city",
              label: "City",
              type: "text",
              required: true,
              placeholder: "Enter city",
              className: "col-span-12 md:col-span-4",
            },
            // Second Row
            {
              name: "customerAddress",
              label: "Customer Address",
              type: "textarea",
              required: true,
              placeholder: "Enter full customer address",
              className: "col-span-12",
            },
          ],
        },
        {
          label: "Financial",
          fields: [
            // First row
            {
              name: "creditLimit",
              label: "Credit Limit",
              type: "number",
              required: true,
              placeholder: "Enter credit limit amount",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "colomboArea",
              label: "CA (Colombo Area)",
              type: "number",
              placeholder: "Enter Colombo area amount",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "crColomboCash",
              label: "CR (Colombo Cash)",
              type: "number",
              placeholder: "Enter Colombo cash amount",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "discount",
              label: "Discount (%)",
              type: "number",
              placeholder: "Enter discount percentage",
              className: "col-span-12 md:col-span-6",
            },
            // Third row
            {
              name: "colomboCash",
              label: "Colombo Cash",
              type: "number",
              placeholder: "Enter Colombo cash details",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "colomboCredit",
              label: "Colombo Credit",
              type: "number",
              placeholder: "Enter Colombo credit details",
              className: "col-span-12 md:col-span-6",
            },
            // Fourth row
            {
              name: "outstationCash",
              label: "Outstation Cash",
              type: "number",
              placeholder: "Enter outstation cash details",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "outstationCredit",
              label: "Outstation Credit",
              type: "number",
              placeholder: "Enter outstation credit details",
              className: "col-span-12 md:col-span-6",
            },
            // Fifth row
            {
              name: "annualTarget",
              label: "Annual Target",
              type: "number",
              placeholder: "Enter annual target amount",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
        {
          label: "Bank",
          fields: [
            // First row
            {
              name: "account1",
              label: "Account",
              type: "text",
              defaultValue: "1",
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "accountCode1",
              label: "Account Code",
              type: "text",
              required: true,
              placeholder: "Enter account code for account 1",
              className: "col-span-12 md:col-span-5",
            },
            {
              name: "bankCode1",
              label: "Bank Code",
              type: "text",
              required: true,
              placeholder: "Enter bank code for account 1",
              className: "col-span-12 md:col-span-5",
            },
            // Second row
            {
              name: "account2",
              label: "Account",
              type: "text",
              defaultValue: "2",
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "accountCode2",
              label: "Account Code",
              type: "text",
              required: true,
              placeholder: "Enter account code for account 2",
              className: "col-span-12 md:col-span-5",
            },
            {
              name: "bankCode2",
              label: "Bank Code",
              type: "text",
              required: true,
              placeholder: "Enter bank code for account 2",
              className: "col-span-12 md:col-span-5",
            },
            // Third row
            {
              name: "account3",
              label: "Account",
              type: "text",
              defaultValue: "3",
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "accountCode3",
              label: "Account Code",
              type: "text",
              required: true,
              placeholder: "Enter account code for account 3",
              className: "col-span-12 md:col-span-5",
            },
            {
              name: "bankCode3",
              label: "Bank Code",
              type: "text",
              required: true,
              placeholder: "Enter bank code for account 3",
              className: "col-span-12 md:col-span-5",
            },
            // Fourth row
            {
              name: "account4",
              label: "Account",
              type: "text",
              defaultValue: "4",
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "accountCode4",
              label: "Account Code",
              type: "text",
              required: true,
              placeholder: "Enter account code for account 4",
              className: "col-span-12 md:col-span-5",
            },
            {
              name: "bankCode4",
              label: "Bank Code",
              type: "text",
              required: true,
              placeholder: "Enter bank code for account 4",
              className: "col-span-12 md:col-span-5",
            },
          ],
        },
        {
          label: "Status",
          fields: [
            // First row
            {
              name: "status",
              label: "Status",
              type: "select",
              options: [
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
              ],
              required: true,
              placeholder: "Select status",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "customerType",
              label: "Customer Type",
              type: "select",
              options: [
                { value: "Cash", label: "Cash" },
                { value: "Credit", label: "Credit" },
                { value: "Both", label: "Both" },
              ],
              required: true,
              placeholder: "Select customer type",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "printInvoiceDetail",
              label: "Print Invoice Detail",
              type: "select",
              options: [
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ],
              required: true,
              placeholder: "Select print option",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "alwaysPending",
              label: "Always Pending",
              type: "select",
              options: [
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ],
              required: true,
              placeholder: "Select pending status",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
        {
          label: "Business",
          fields: [
            // First row
            {
              name: "yearOfEstablishment",
              label: "Year of Establishment",
              type: "text",
              placeholder: "Enter year of establishment",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "fieldOfBusiness",
              label: "Field of Business",
              type: "text",
              placeholder: "Enter field of business",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "driverCode",
              label: "Driver Code",
              type: "text",
              placeholder: "Enter driver code",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "transportAgent",
              label: "Transport Agent",
              type: "text",
              placeholder: "Enter transport agent details",
              className: "col-span-12 md:col-span-6",
            },
            // Third row
            {
              name: "dueDays",
              label: "Due Days",
              type: "number",
              placeholder: "Enter due days",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
        {
          label: "Additional",
          fields: [
            // First row
            {
              name: "whatsapp",
              label: "WhatsApp",
              type: "text",
              placeholder: "Enter WhatsApp number",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "mobile",
              label: "Mobile",
              type: "text",
              placeholder: "Enter mobile number",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "salesman",
              label: "Salesman",
              type: "text",
              placeholder: "Enter salesman details",
              className: "col-span-12 md:col-span-4",
            },
            // Second row
            {
              name: "remarks",
              label: "Remarks",
              type: "textarea",
              placeholder: "Enter any additional remarks",
              className: "col-span-12",
            },
          ],
        },
      ],
    },
    supplier: {
      title: "Supplier",
      useTabs: true,
      tabs: [
        {
          label: "Supplier Details",
          fields: [
            // First row
            {
              name: "supplierCode",
              label: "Supplier Code",
              type: "text",
              required: true,
              placeholder: "Enter supplier code (e.g., SUP001)",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "supplierName",
              label: "Supplier Name",
              type: "text",
              required: true,
              placeholder: "Enter supplier name",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "supplierType",
              label: "Supplier Type",
              type: "select",
              options: [
                { value: "dCustomer", label: "D-Customer" },
                { value: "dSupplier", label: "D-Supplier" },
              ],
              placeholder: "Select supplier type",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "foreignLocalSupplier",
              label: "Foreign/Local Supplier",
              type: "select",
              options: [
                { value: "foreign", label: "Foreign" },
                { value: "local", label: "Local" },
              ],
              required: true,
              placeholder: "Select supplier location",
              className: "col-span-12 md:col-span-6",
            },
            // Third row
            {
              name: "address",
              label: "Address",
              type: "textarea",
              required: true,
              placeholder: "Enter supplier full address",
              className: "col-span-12",
            },
          ],
        },
        {
          label: "Contact Details",
          fields: [
            // First row
            {
              name: "telephone",
              label: "Telephone",
              type: "text",
              placeholder: "Enter telephone number",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "whatsapp",
              label: "WhatsApp",
              type: "text",
              placeholder: "Enter WhatsApp number",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "email",
              label: "Email",
              type: "email",
              placeholder: "Enter email address",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "mobilePhone",
              label: "Mobile Phone",
              type: "text",
              placeholder: "Enter mobile phone number",
              className: "col-span-12 md:col-span-6",
            },
            // Third row
            {
              name: "mobileSMS",
              label: "Mobile (SMS)",
              type: "text",
              placeholder: "Enter mobile number for SMS",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "contactPerson",
              label: "Contact Person",
              type: "text",
              placeholder: "Enter contact person name",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
        {
          label: "Financial Details",
          fields: [
            // First row
            {
              name: "creditLimit",
              label: "Credit Limit",
              type: "number",
              placeholder: "Enter credit limit amount",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "creditBalance",
              label: "Credit Balance",
              type: "number",
              placeholder: "Enter credit balance amount",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "balanceBF",
              label: "Balance B / F",
              type: "number",
              placeholder: "Enter balance brought forward",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "turnonver",
              label: "Turnover",
              type: "number",
              placeholder: "Enter turnover amount",
              className: "col-span-12 md:col-span-6",
            },
            // Third row
            {
              name: "srAmount",
              label: "SR Amount",
              type: "number",
              placeholder: "Enter SR amount",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "cifAmount",
              label: "CIF Amount",
              type: "number",
              placeholder: "Enter CIF amount",
              className: "col-span-12 md:col-span-6",
            },
            // Fourth row
            {
              name: "bankDetails",
              label: "Bank Details",
              type: "textarea",
              placeholder: "Enter bank account details",
              className: "col-span-12",
            },
          ],
        },
      ],
    },
    bank: {
      title: "Bank",
      useTabs: true,
      tabs: [
        {
          label: "Bank Details",
          fields: [
            //First Row
            {
              name: "bankCode",
              label: "Bank Code",
              type: "text",
              required: true,
              placeholder: "Enter bank code (e.g., BNK001)",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "bankName",
              label: "Bank Name",
              type: "text",
              required: true,
              placeholder: "Enter bank name",
              className: "col-span-12 md:col-span-6",
            },
            //Second Row
            {
              name: "branchCode",
              label: "Branch Code",
              type: " text",
              required: true,
              placeholder: "Enter branch code",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "branchName",
              label: "Branch Name",
              type: "text",
              required: true,
              placeholder: "Enter branch name",
              className: "col-span-12 md:col-span-6",
            },
            //Third Row
            {
              name: "swiftCode",
              label: "SWIFT Code",
              type: "text",
              placeholder: "Enter SWIFT code",
              className: "col-span-12 md:col-span-6",
            },
            //Forth Row
            {
              name: "address",
              label: "Address",
              type: "textarea",
              required: true,
              placeholder: "Enter bank branch full address",
              className: "col-span-12",
            },
          ],
        },
        {
          label: "Contact Details",
          fields: [
            //First Row
            {
              name: "telephone",
              label: "Telephone",
              type: "text",
              placeholder: "Enter telephone number",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "mobilePhone",
              label: "Mobile Phone",
              type: "text",
              placeholder: "Enter mobile phone number",
              className: "col-span-12 md:col-span-6",
            },
            //Second Row
            {
              name: "contactName",
              label: "Contact Name",
              type: "text",
              placeholder: "Enter contact person name",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "email",
              label: "Email",
              type: "email",
              placeholder: "Enter email address",
              className: "col-span-12 md:col-span-6",
            },
            //Third Row
            {
              name: "fax",
              label: "Fax",
              type: "text",
              placeholder: "Enter fax number",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "bankCEOName",
              label: "Bank CEO Name",
              type: "text",
              placeholder: "Enter bank CEO name",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
      ],
    },
    branch: {
      title: "Branch",
      useTabs: true,
      tabs: [
        {
          label: "Branch Details",
          fields: [
            // First row
            {
              name: "branchCode",
              label: "Branch Code",
              type: "text",
              required: true,
              placeholder: "Enter branch code (e.g., BR001)",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "branchName",
              label: "Branch Name",
              type: "text",
              required: true,
              placeholder: "Enter branch name",
              className: "col-span-12 md:col-span-6",
            },
            // Second Row
            {
              name: "bankCode",
              label: "Bank Code",
              type: "text",
              required: true,
              placeholder: "Enter parent bank code",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "bankCEO",
              label: "Bank CEO",
              type: "text",
              placeholder: "Enter bank CEO name",
              className: "col-span-12 md:col-span-6",
            },
            // Third Row
            {
              name: "city",
              label: "City",
              type: "text",
              placeholder: "Enter city",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "district",
              label: "District",
              type: "text",
              placeholder: "Enter district",
              className: "col-span-12 md:col-span-6",
            },
            // Fourth Row
            {
              name: "address",
              label: "Address",
              type: "textarea",
              placeholder: "Enter branch full address",
              className: "col-span-12",
            },
          ],
        },
        {
          label: "Contact Details",
          fields: [
            // First Row
            {
              name: "telephone",
              label: "Telephone",
              type: "text",
              placeholder: "Enter telephone number",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "email",
              label: "Email",
              type: "email",
              placeholder: "Enter email address",
              className: "col-span-12 md:col-span-6",
            },
            // Second Row
            {
              name: "fax",
              label: "Fax",
              type: "text",
              placeholder: "Enter fax number",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "bankCEOName",
              label: "Bank CEO Name",
              type: "text",
              placeholder: "Enter bank CEO name",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
      ],
    },
    location: {
      title: "Location",
      useTabs: false,
      fields: [
        //First Row
        {
          name: "locationCode",
          label: "Location Code",
          type: "text",
          placeholder: "Enter location code (e.g. LOC-COL-001)",
          required: true,
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "type",
          label: "Type (Main / Rep / Other)",
          type: "select",
          options: [
            { value: "Main", label: "Main" },
            { value: "Rep", label: "Rep" },
            { value: "Other", label: "Other" },
          ],
          className: "col-span-12 md:col-span-6",
        },
        //Second Row
        {
          name: "description",
          label: "Location Description",
          type: "text",
          placeholder: "Enter a descriptive name for this location",
          className: "col-span-12 md:col-span-6",
        },
      ],
    },
    area: {
      title: "Area",
      useTabs: false,
      fields: [
        //First Row
        {
          name: "areaCode",
          label: "Area Code",
          type: "text",
          placeholder: "Enter area code (e.g. AREA001)",
          required: true,
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "areaName",
          label: "Area Name",
          type: "text",
          placeholder: "Enter area name",
          required: true,
          className: "col-span-12 md:col-span-6",
        },
        //Second Row
        {
          name: "cityName",
          label: "City Name",
          type: "text",
          placeholder: "Enter city name",
          required: true,
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "routeCode",
          label: "Route Code",
          type: "text",
          placeholder: "Enter route code (e.g. ROUTE001)",
          required: true,
          className: "con-span-12 md:col-span-6",
        },
      ],
    },
    route: {
      title: "Route",
      useTabs: false,
      fields: [
        //First Row
        {
          name: "routeCode",
          label: "Route Code",
          type: "text",
          placeholder: "Enter route code (e.g. ROUTE001)",
          required: true,
          className: "col-span-12",
        },
        //Second Row
        {
          name: "description",
          label: "Route Description",
          type: "text",
          placeholder: "Enter route description",
          required: true,
          className: "col-span-12",
        },
      ],
    },
    utility: {
      title: "Utility",
      useTabs: false,
      fields: [
        //First Row
        {
          name: "expenseReferenceNumber",
          label: "Expense Reference Number",
          type: "text",
          placeholder: "Enter expense reference number",
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "expenseCode",
          label: "Expense Code",
          type: "text",
          placeholder: "Enter expense code",
          className: "col-span-12 md:col-span-6",
        },
        //Second Row
        {
          name: "description",
          label: "Description",
          type: "text",
          placeholder: "Enter utility description",
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "period",
          label: "Period (From Date - To Date)",
          type: "text",
          placeholder: "Enter period (e.g., 2023-01-01 to 2023-12-31)",
          className: "col-span-12 md:col-span-6",
        },
        //Third Row
        {
          name: "amount",
          label: "Amount",
          type: "number",
          placeholder: "Enter utility amount",
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "outstanding",
          label: "Current Outstanding",
          type: "number",
          placeholder: "Enter current outstanding amount",
          className: "col-span-12 md:col-span-6",
        },
      ],
    },
    transportAgent: {
      title: "Transport Agent",
      useTabs: false,
      fields: [
        //First Row
        {
          name: "agentCode",
          label: "Agent Code",
          type: "text",
          required: true,
          placeholder: "Enter agent code (e.g., AGT001)",
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "agentName",
          label: "Agent Name",
          type: "text",
          required: true,
          placeholder: "Enter agent name",
          className: "col-span-12 md:col-span-6",
        },
        //Second Row
        {
          name: "contactName",
          label: "Contact Name",
          type: "text",
          required: true,
          placeholder: "Enter contact person name",
          className: "col-span-12 md:col-span-6",
        },
        //Third Row
        {
          name: "address",
          label: "Address",
          type: "textarea",
          required: true,
          placeholder: "Enter agent full address",
          className: "col-span-12",
        },
      ],
    },
    hsCode: {
      title: "HS Code",
      useTabs: false,
      fields: [
        //First Row
        {
          name: "item",
          label: "Item",
          type: "text",
          placeholder: "Enter item name",
          required: true,
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "itemDescription",
          label: "Description",
          type: "text",
          placeholder: "Enter item description",
          required: true,
          className: "col-span-12 md:col-span-6",
        },
        //Second Row
        {
          name: "hsCodeNumber",
          label: "HS Code Number",
          type: "text",
          placeholder: "Enter HS code number (e.g. 123456)",
          required: true,
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "dutyRate",
          label: "Duty Rate (%)",
          type: "number",
          placeholder: "Enter duty rate percentage",
          className: "col-span-12 md:col-span-6",
        },
        //Third Row
        {
          name: "palRate",
          label: "PAL Rate (%)",
          type: "number",
          placeholder: "Enter PAL rate percentage",
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "ssclRate",
          label: "SSCL Rate (%)",
          type: "number",
          placeholder: "Enter SSCL rate percentage",
          className: "col-span-12 md:col-span-6",
        },
        //Fourth Row
        {
          name: "eicKGRate",
          label: "EIC / KG Rate (%)",
          type: "number",
          placeholder: "Enter EIC / KG rate percentage",
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "vatPercentage",
          label: "VAT Percentage (%)",
          type: "number",
          placeholder: "Enter VAT percentage",
          className: "col-span-12 md:col-span-6",
        },
        //Fifth Row
        {
          name: "remarks",
          label: "Remarks",
          type: "textarea",
          placeholder: "Enter any additional remarks",
          className: "col-span-12",
        },
      ],
    },
    category: {
      title: "Category",
      useTabs: false,
      fields: [
        //First Row
        {
          name: "categoryCode",
          label: "Category Code",
          type: "text",
          placeholder: "Enter category code (e.g. CAT001)",
          required: true,
          className: "col-span-12",
        },
        //Second Row
        {
          name: "categoryDescription",
          label: "Category Description",
          type: "text",
          placeholder: "Enter category description",
          required: true,
          className: "col-span-12",
        },
      ],
    },
    classification: {
      title: "Classification",
      useTabs: false,
      fields: [
        // First row
        {
          name: "classificationCode",
          label: "Classification Code",
          type: "text",
          required: true,
          placeholder: "Enter classification code (e.g., CLS001)",
          className: "col-span-12",
        },
        // Second row
        {
          name: "classificationDescription",
          label: "Classification Description",
          type: "text",
          required: true,
          placeholder: "Enter classification description",
          className: "col-span-12",
        },
      ],
    },
    reasonRemark: {
      title: "Reason / Remark",
      useTabs: false,
      fields: [
        //First Row
        {
          name: "reasonRemarkCode",
          label: "Reason / Remark Code",
          type: "text",
          required: true,
          placeholder: "Enter reason/remark code (e.g. RM001)",
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "description",
          label: "Description",
          type: "text",
          required: true,
          placeholder: "Enter reason/remark description",
          className: "col-span-12 md:col-span-6",
        },
        //Second Row
        {
          name: "category",
          label: "Category",
          type: "select",
          options: [
            { value: "Q", label: "Q - Return Cheque" },
            { value: "P", label: "P - Pending Invoice" },
            { value: "I", label: "I - Return Item" },
          ],
          required: true,
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "type",
          label: "Type",
          type: "select",
          options: [
            { value: "Reason", label: "Reason" },
            { value: "Remark", label: "Remark" },
          ],
          required: true,
          className: "col-span-12 md:col-span-6",
        },
      ],
    },
    salesRep: {
      title: "Sales Rep",
      useTabs: true,
      tabs: [
        {
          label: "Sales Rep Details",
          fields: [
            // First row
            {
              name: "repCode",
              label: "Sales Rep Code",
              type: "text",
              required: true,
              placeholder: "Enter sales rep code (e.g., REP001)",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "repName",
              label: "Sales Rep Name",
              type: "text",
              required: true,
              placeholder: "Enter sales rep name",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "acCode",
              label: "A/C Code",
              type: "text",
              required: true,
              placeholder: "Enter A/C code",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "acName",
              label: "A/C Name",
              type: "text",
              placeholder: "Enter A/C name",
              className: "col-span-12 md:col-span-6",
            },
            // Third row
            {
              name: "email",
              label: "Email",
              type: "email",
              placeholder: "Enter email address",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "mobilePhone",
              label: "Mobile Phone",
              type: "text",
              placeholder: "Enter mobile phone number",
              className: "col-span-12 md:col-span-6",
            },
            // Fourth row
            {
              name: "monthlyTarget",
              label: "Monthly Target",
              type: "number",
              placeholder: "Enter monthly target amount",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
        {
          label: "Route 1",
          fields: [
            // First row
            {
              name: "route1Code",
              label: "Route Code",
              type: "text",
              placeholder: "Enter route code",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "route1Name",
              label: "Route Name",
              type: "text",
              placeholder: "Enter route name",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "route1Slab1",
              label: "Slab 1",
              type: "number",
              value: 1,
              disabled: true,
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route1Slab1Target",
              label: "Target Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route1Slab1IncentiveRate",
              label: "Incentive (%)",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route1Slab1IncentiveAmount",
              label: "Incentive Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            // Third row
            {
              name: "route1Slab2",
              label: "Slab 2",
              type: "number",
              value: 2,
              disabled: true,
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route1Slab2Target",
              label: "Target Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route1Slab2IncentiveRate",
              label: "Incentive (%)",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route1Slab2IncentiveAmount",
              label: "Incentive Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            // Fourth row
            {
              name: "route1Slab3",
              label: "Slab 3",
              type: "number",
              value: 3,
              disabled: true,
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route1Slab3Target",
              label: "Target Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route1Slab3IncentiveRate",
              label: "Incentive (%)",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route1Slab3IncentiveAmount",
              label: "Incentive Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
          ],
        },
        {
          label: "Route 2",
          fields: [
            // First row
            {
              name: "route2Code",
              label: "Route Code",
              type: "text",
              placeholder: "Enter route code",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "route2Name",
              label: "Route Name",
              type: "text",
              placeholder: "Enter route name",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "route2Slab1",
              label: "Slab 1",
              type: "number",
              value: 1,
              disabled: true,
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route2Slab1Target",
              label: "Target Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route2Slab1IncentiveRate",
              label: "Incentive (%)",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route2Slab1IncentiveAmount",
              label: "Incentive Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            // Third row
            {
              name: "route2Slab2",
              label: "Slab 2",
              type: "number",
              value: 2,
              disabled: true,
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route2Slab2Target",
              label: "Target Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route2Slab2IncentiveRate",
              label: "Incentive (%)",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route2Slab2IncentiveAmount",
              label: "Incentive Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            // Fourth row
            {
              name: "route2Slab3",
              label: "Slab 3",
              type: "number",
              value: 3,
              disabled: true,
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route2Slab3Target",
              label: "Target Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route2Slab3IncentiveRate",
              label: "Incentive (%)",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route2Slab3IncentiveAmount",
              label: "Incentive Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
          ],
        },
        {
          label: "Route 3",
          fields: [
            // First row
            {
              name: "route3Code",
              label: "Route Code",
              type: "text",
              placeholder: "Enter route code",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "route3Name",
              label: "Route Name",
              type: "text",
              placeholder: "Enter route name",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "route3Slab1",
              label: "Slab 1",
              type: "number",
              value: 1,
              disabled: true,
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route3Slab1Target",
              label: "Target Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route3Slab1IncentiveRate",
              label: "Incentive (%)",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route3Slab1IncentiveAmount",
              label: "Incentive Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            // Third row
            {
              name: "route3Slab2",
              label: "Slab 2",
              type: "number",
              value: 2,
              disabled: true,
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route3Slab2Target",
              label: "Target Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route3Slab2IncentiveRate",
              label: "Incentive (%)",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route3Slab2IncentiveAmount",
              label: "Incentive Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            // Fourth row
            {
              name: "route3Slab3",
              label: "Slab 3",
              type: "number",
              value: 3,
              disabled: true,
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route3Slab3Target",
              label: "Target Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route3Slab3IncentiveRate",
              label: "Incentive (%)",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "route3Slab3IncentiveAmount",
              label: "Incentive Amount",
              type: "number",
              className: "col-span-12 md:col-span-3",
            },
          ],
        },
      ],
    },
    shopSalesRep: {
      title: "Shop Sales Rep",
      useTabs: false,
      fields: [
        // First row
        {
          name: "repCode",
          label: "Rep Code",
          text: "text",
          required: true,
          placeholder: "Enter rep code (e.g., REP001)",
          className: "col-span-12 md:col-span-6",
        },
        {
          name: "shopRepCode",
          label: "Shop Rep Code",
          type: "text",
          required: true,
          placeholder: "Enter shop rep code",
          className: "col-span-12 md:col-span-6",
        },
        // Second row
        {
          name: "shopRepName",
          label: "Shop Rep Name",
          type: "text",
          required: true,
          placeholder: "Enter shop rep name",
          className: "col-span-12 md:col-span-6",
        },
      ],
    },
    itemWholeSaleSlabs: {
      title: "Item Whole Sale Slabs",
      useTabs: true,
      tabs: [
        {
          label: "Item Details",
          fields: [
            // First row
            {
              name: "itemCode",
              label: "Item Code",
              type: "text",
              required: true,
              placeholder: "Enter item code (e.g., ITM001)",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "itemDescription",
              label: "Item Description",
              type: "text",
              required: true,
              placeholder: "Enter item description",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "compareQuantity",
              label: "Compare Quantity",
              type: "number",
              required: true,
              placeholder: "Enter compare quantity",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
        {
          label: "Price Slabs",
          fields: [
            // First row - Slab 1
            {
              name: "slab1Number",
              label: "Slab Number",
              type: "number",
              value: 1,
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab1From",
              label: "From Qty",
              type: "number",
              placeholder: "Enter starting quantity",
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab1To",
              label: "To Qty",
              type: "number",
              placeholder: "Enter ending quantity",
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab1Price",
              label: "Price (Rs)",
              type: "number",
              placeholder: "Enter price per unit",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "slab1Discount",
              label: "Discount (%)",
              type: "number",
              placeholder: "Enter discount percentage",
              className: "col-span-12 md:col-span-3",
            },

            // Second row - Slab 2
            {
              name: "slab2Number",
              label: "Slab Number",
              type: "number",
              value: 2,
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab2From",
              label: "From Qty",
              type: "number",
              placeholder: "Enter starting quantity",
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab2To",
              label: "To Qty",
              type: "number",
              placeholder: "Enter ending quantity",
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab2Price",
              label: "Price (Rs)",
              type: "number",
              placeholder: "Enter price per unit",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "slab2Discount",
              label: "Discount (%)",
              type: "number",
              placeholder: "Enter discount percentage",
              className: "col-span-12 md:col-span-3",
            },

            // Third row - Slab 3
            {
              name: "slab3Number",
              label: "Slab Number",
              type: "number",
              value: 3,
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab3From",
              label: "From Qty",
              type: "number",
              placeholder: "Enter starting quantity",
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab3To",
              label: "To Qty",
              type: "number",
              placeholder: "Enter ending quantity",
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab3Price",
              label: "Price (Rs)",
              type: "number",
              placeholder: "Enter price per unit",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "slab3Discount",
              label: "Discount (%)",
              type: "number",
              placeholder: "Enter discount percentage",
              className: "col-span-12 md:col-span-3",
            },

            // Fourth row - Slab 4
            {
              name: "slab4Number",
              label: "Slab Number",
              type: "number",
              value: 4,
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab4From",
              label: "From Qty",
              type: "number",
              placeholder: "Enter starting quantity",
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab4To",
              label: "To Qty",
              type: "number",
              placeholder: "Enter ending quantity",
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab4Price",
              label: "Price (Rs)",
              type: "number",
              placeholder: "Enter price per unit",
              className: "col-span-12 md:col-span-3",
            },
            {
              name: "slab4Discount",
              label: "Discount (%)",
              type: "number",
              placeholder: "Enter discount percentage",
              className: "col-span-12 md:col-span-3",
            },
          ],
        },
      ],
    },
    expenseCategory: {
      title: "Expense Category",
      useTabs: false,
      fields: [
        //First Row
        {
          name: "expenseCategoryCode",
          label: "Expense Category Code",
          type: "text",
          placeholder: "Enter expense category code (e.g. EXP-001)",
          required: true,
          className: "col-span-12",
        },
        //Second Row
        {
          name: "expenseCategoryName",
          label: "Expense Category Name",
          type: "text",
          placeholder: "Enter expense category name",
          required: true,
          className: "col-span-12",
        },
      ],
    },
    customerDiscountSlabs: {
      title: "Customer Discount Slabs",
      useTabs: true,
      tabs: [
        {
          label: "Customer Details",
          fields: [
            //First Row
            {
              name: "customerCode",
              label: "Customer Code",
              type: "text",
              required: true,
              placeholder: "Enter customer code (e.g., CUST001)",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "customerName",
              label: "Customer Name",
              type: "text",
              required: true,
              placeholder: "Enter customer name",
              className: "col-span-12 md:col-span-6",
            },
            //Second Row
            {
              name: "active",
              label: "Active",
              type: "checkbox",
              required: true,
              className: "col-span-12",
            },
          ],
        },
        {
          label: "Price Discount Slabs",
          fields: [
            // First row - Slab 1
            {
              name: "slab1Number",
              label: "Slab Number",
              type: "number",
              value: 1,
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab1PriceFrom",
              label: "From Price (Rs)",
              type: "number",
              placeholder: "Enter minimum price",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "slab1PriceTo",
              label: "To Price (Rs)",
              type: "number",
              placeholder: "Enter maximum price",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "slab1Discount",
              label: "Discount (%)",
              type: "number",
              placeholder: "Enter discount percentage",
              className: "col-span-12 md:col-span-2",
            },

            // Second row - Slab 2
            {
              name: "slab2Number",
              label: "Slab Number",
              type: "number",
              value: 2,
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab2PriceFrom",
              label: "From Price (Rs)",
              type: "number",
              placeholder: "Enter minimum price",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "slab2PriceTo",
              label: "To Price (Rs)",
              type: "number",
              placeholder: "Enter maximum price",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "slab2Discount",
              label: "Discount (%)",
              type: "number",
              placeholder: "Enter discount percentage",
              className: "col-span-12 md:col-span-2",
            },

            // Third row - Slab 3
            {
              name: "slab3Number",
              label: "Slab Number",
              type: "number",
              value: 3,
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab3PriceFrom",
              label: "From Price (Rs)",
              type: "number",
              placeholder: "Enter minimum price",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "slab3PriceTo",
              label: "To Price (Rs)",
              type: "number",
              placeholder: "Enter maximum price",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "slab3Discount",
              label: "Discount (%)",
              type: "number",
              placeholder: "Enter discount percentage",
              className: "col-span-12 md:col-span-2",
            },

            // Fourth row - Slab 4
            {
              name: "slab4Number",
              label: "Slab Number",
              type: "number",
              value: 4,
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab4PriceFrom",
              label: "From Price (Rs)",
              type: "number",
              placeholder: "Enter minimum price",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "slab4PriceTo",
              label: "To Price (Rs)",
              type: "number",
              placeholder: "Enter maximum price",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "slab4Discount",
              label: "Discount (%)",
              type: "number",
              placeholder: "Enter discount percentage",
              className: "col-span-12 md:col-span-2",
            },

            // Fifth row - Slab 5
            {
              name: "slab5Number",
              label: "Slab Number",
              type: "number",
              value: 5,
              disabled: true,
              className: "col-span-12 md:col-span-2",
            },
            {
              name: "slab5PriceFrom",
              label: "From Price (Rs)",
              type: "number",
              placeholder: "Enter minimum price",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "slab5PriceTo",
              label: "To Price (Rs)",
              type: "number",
              placeholder: "Enter maximum price",
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "slab5Discount",
              label: "Discount (%)",
              type: "number",
              placeholder: "Enter discount percentage",
              className: "col-span-12 md:col-span-2",
            },
          ],
        },
      ],
    },
    item: {
      title: "item",
      useTabs: true,
      tabs: [
        {
          label: "Item Details",
          fields: [
            // First row
            {
              name: "image",
              label: "Item Image",
              type: "image",
              accept: "image/png, image/jpeg, image/gif",
              className: "col-span-12",
            },
            // Second row
            {
              name: "itemCode",
              label: "Item Code",
              type: "text",
              required: true,
              placeholder: "Enter item code (e.g., ITEM001)",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "itemDescription",
              label: "Item Description",
              type: "text",
              required: true,
              placeholder: "Enter item description",
              className: "col-span-12 md:col-span-6",
            },
            // Third row
            {
              name: "classification",
              label: "Classification",
              type: "select",
              required: true,
              options: [
                { value: "Engine Parts", label: "Engine Parts" },
                { value: "Other", label: "Other" },
              ],
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "category",
              label: "Category",
              type: "select",
              options: [
                { value: "Electronics", label: "Electronics" },
                { value: "Other", label: "Other" },
              ],
              className: "col-span-12 md:col-span-6",
            },
            // Fourth row
            {
              name: "binLocation",
              label: "Bin Location",
              type: "text",
              placeholder: "Enter bin location",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "hsCodeNumber",
              label: "HS Code Number",
              type: "text",
              placeholder: "Enter HS code number (e.g., 123456)",
              className: "col-span-12 md:col-span-6",
            },
            // Fifth row
            {
              name: "itemWeight",
              label: "Item Weight",
              type: "number",
              placeholder: "Enter item weight",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "retailWholesale",
              label: "Retail / Wholesale",
              type: "select",
              required: true,
              options: [
                { value: "Retail", label: "Retail" },
                { value: "Wholesale", label: "Wholesale" },
              ],
              className: "col-span-12 md:col-span-6",
            },
            // Sixth row
            {
              name: "description",
              label: "Description",
              type: "textarea",
              placeholder: "Enter item description",
              className: "col-span-12",
            },
            // Seventh row
            {
              name: "campaignItem",
              label: "Campaign Item (Yes / No)",
              type: "checkbox",
              required: true,
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "netItem",
              label: "Net Item (Yes / No)",
              type: "checkbox",
              required: true,
              className: "col-span-12 md:col-span-4",
            },
            {
              name: "warrantyItem",
              label: "Warranty Item (Yes / No)",
              type: "checkbox",
              required: true,
              className: "col-span-12 md:col-span-4",
            },
          ],
        },
        {
          label: "Inventory",
          fields: [
            // First row
            {
              name: "bufferStock",
              label: "Buffer Stock",
              type: "number",
              placeholder: "Enter buffer stock quantity",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "reOrderQuantity",
              label: "Re Order Quantity",
              type: "number",
              placeholder: "Enter re order quantity",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "reOrderLevelWS",
              label: "Re Order Level (W/S)",
              type: "number",
              placeholder: "Enter re order level for wholesale",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "reOrderLevelRS",
              label: "Re Order Level (R/S)",
              type: "number",
              placeholder: "Enter re order level for retail",
              className: "col-span-12 md:col-span-6",
            },
            //Third row
            {
              name: "wsQuantityInHand",
              label: "W/S Quantity In Hand",
              type: "number",
              placeholder: "Enter W/S quantity in hand",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "rsQuantityInHand",
              label: "R/S Quantity In Hand",
              type: "number",
              placeholder: "Enter R/S quantity in hand",
              className: "col-span-12 md:col-span-6",
            },
            // Fourth row
            {
              name: "wsQuantityOnOrder",
              label: "W/S Quantity On Order",
              type: "number",
              placeholder: "Enter W/S quantity on order",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "rsQuantityOnOrder",
              label: "R/S Quantity On Order",
              type: "number",
              placeholder: "Enter R/S quantity on order",
              className: "col-span-12 md:col-span-6",
            },
            // Fifth row
            {
              name: "receivedQuantity",
              label: "Received Quantity",
              type: "number",
              placeholder: "Enter received quantity",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "stockHoldDays",
              label: "Stock Hold Days",
              type: "number",
              placeholder: "Enter stock hold days",
              className: "col-span-12 md:col-span-6",
            },
            // Sixth row
            {
              name: "minimumStockQuantity",
              label: "Minimum Stock Quantity",
              type: "number",
              placeholder: "Enter buffer stock quantity",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "issuingQuantity",
              label: "Issuing Quantity",
              type: "number",
              placeholder: "Enter issuing quantity",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "minimumQuantity",
              label: "Minimum Quantity",
              type: "number",
              placeholder: "Enter minimum quantity",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
        {
          label: "Pricing",
          fields: [
            // First row
            {
              name: "profitMargin",
              label: "Profit Margin (%)",
              type: "number",
              placeholder: "Enter profit margin percentage",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "actualCost",
              label: "Actual Cost",
              type: "number",
              placeholder: "Enter actual cost",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "foreignCost",
              label: "Foreign Cost",
              type: "number",
              placeholder: "Enter foreign cost",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "localCost",
              label: "Local Cost",
              type: "number",
              placeholder: "Enter local cost",
              className: "col-span-12 md:col-span-6",
            },
            //Third row
            {
              name: "sellingPrice",
              label: "Selling Price",
              type: "number",
              placeholder: "Enter selling price",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "agentSellingPrice",
              label: "Agent Selling Price",
              type: "number",
              placeholder: "Enter agent selling price",
              className: "col-span-12 md:col-span-6",
            },
            // Fourth row
            {
              name: "vatPercentage",
              label: "Vat Percentage (%)",
              type: "number",
              placeholder: "Enter VAT percentage",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "marketPrice",
              label: "Market Price",
              type: "number",
              placeholder: "Enter market price",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
        {
          label: "Replacements",
          fields: [
            // First row
            {
              name: "replacePart1",
              label: "Replace Part #1",
              type: "text",
              placeholder: "Enter replacement part #1",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "replacePart2",
              label: "Replace Part #2",
              type: "text",
              placeholder: "Enter replacement part #2",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "replacePart3",
              label: "Replace Part #3",
              type: "text",
              placeholder: "Enter replacement part #3",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "duplicatePart1",
              label: "Duplicate Part #1",
              type: "text",
              placeholder: "Enter duplicate part #1",
              className: "col-span-12 md:col-span-6",
            },
            // Third row
            {
              name: "duplicatePart2",
              label: "Duplicate Part #2",
              type: "text",
              placeholder: "Enter duplicate part #2",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "duplicatePart3",
              label: "Duplicate Part #3",
              type: "text",
              placeholder: "Enter duplicate part #3",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
        {
          label: "Additional",
          fields: [
            // First row
            {
              name: "currentMonthSalesWS",
              label: "Current Month Sales W/S",
              type: "number",
              placeholder: "Enter current month sales for wholesale",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "currentMonthSalesRS",
              label: "Current Month Sales R/S",
              type: "number",
              placeholder: "Enter current month sales for retail",
              className: "col-span-12 md:col-span-6",
            },
            // Second row
            {
              name: "qrCode",
              label: "QR Code",
              type: "text",
              placeholder: "Enter QR code",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "size",
              label: "Size",
              type: "number",
              placeholder: "Enter size",
              className: "col-span-12 md:col-span-6",
            },
            // Third row
            {
              name: "barCode",
              label: "Bar Code",
              type: "number",
              placeholder: "Enter bar code",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "leadTime1",
              label: "Lead Time #1",
              type: "number",
              placeholder: "Enter lead time #1",
              className: "col-span-12 md:col-span-6",
            },
            // Fourth row
            {
              name: "leadTime2",
              label: "Lead Time #2",
              type: "number",
              placeholder: "Enter lead time #2",
              className: "col-span-12 md:col-span-6",
            },
            {
              name: "leadTime3",
              label: "Lead Time #3",
              type: "number",
              placeholder: "Enter lead time #3",
              className: "col-span-12 md:col-span-6",
            },
          ],
        },
      ],
    },
  };

  return (
    configs[recordType] || {
      title: recordType,
      useTabs: false,
      fields: [],
    }
  );
};
