export const getColumns = (receiptType = "N", modeOfPayment = "C") => {
  const columns = [
    {
      key: "receiptVoucherNumber",
      header: "Receipt Voucher No",
      cellConfig: (item) => ({
        value: item.receiptVoucherNumber,
        className: "font-medium text-gray-900",
      }),
    },
    {
      key: "customerCode",
      header: "Account Code",
      cellConfig: (item) => ({
        value: item.customerCode,
        className: "text-gray-600",
      }),
    },
    {
      key: "dateOfEntry",
      header: "Date of Entry",
      cellConfig: (item) => ({
        value: item.dateOfEntry,
        className: "text-gray-600",
      }),
    },
    {
      key: "modeOfPayment",
      header: "Mode of Payment",
      cellConfig: (item) => ({
        value: item.modeOfPayment,
        className: "text-gray-600",
      }),
    },
    {
      key: "amount",
      header: "Amount",
      cellConfig: (item) => ({
        value: item.amount,
        className: "font-semibold text-gray-900",
      }),
    },
  ];

  if (receiptType === "N" && modeOfPayment === "Q") {
    return [
      {
        key: "chequeNumber",
        header: "Cheque Number",
        cellConfig: (item) => ({
          value: item.chequeNumber,
          className: "font-medium text-gray-900",
        }),
      },
      ...columns,
    ];
  }

  const bankChequeColumns = [
    {
      key: "chequeNumber",
      header: "Cheque Number",
      cellConfig: (item) => ({
        value: item.chequeNumber,
        className: "font-medium text-gray-900",
      }),
    },
    {
      key: "bankCode",
      header: "Bank",
      cellConfig: (item) => ({
        value: item.bankCode,
        className: "text-gray-600",
      }),
    },
    {
      key: "branchCode",
      header: "Branch",
      cellConfig: (item) => ({
        value: item.branchCode,
        className: "text-gray-600",
      }),
    },
    {
      key: "customerCode",
      header: "Customer Code",
      cellConfig: (item) => ({
        value: item.customerCode,
        className: "text-gray-600",
      }),
    },
    {
      key: "accountNumber",
      header: "Account Number",
      cellConfig: (item) => ({
        value: item.accountNumber,
        className: "text-gray-600",
      }),
    },
    {
      key: "depositDate",
      header: "Deposit Date",
      cellConfig: (item) => ({
        value: item.depositDate,
        className: "text-gray-600",
      }),
    },
    {
      key: "reasonRemarkCode",
      header: "Reason",
      cellConfig: (item) => ({
        value: item.reasonRemarkCode,
        className: "text-gray-600",
      }),
    },
    {
      key: "amount",
      header: "Amount",
      cellConfig: (item) => ({
        value: item.amount,
        className: "font-semibold text-gray-900",
      }),
    },
    {
      key: "repCode",
      header: "Rep Code",
      cellConfig: (item) => ({
        value: item.repCode,
        className: "text-gray-600",
      }),
    },
  ];

  if (receiptType === "S") {
    return bankChequeColumns;
  }

  if (receiptType === "R") {
    return [
      ...bankChequeColumns,
      {
        key: "isSameReturnCheque",
        header: "Ret. Same Cheque",
        cellConfig: (item) => ({
          value: item.isSameReturnCheque === true ? "Yes" : "No",
          className: "text-gray-600",
        }),
      },
    ];
  }

  return columns;
};
