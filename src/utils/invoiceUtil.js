/**
 * Generates unique invoice numbers based on the current date and a random number.
 * The invoice number format is "INV-YYYYMMDD-RRRR", where YYYYMMDD is the current date and RRRR is a random 4-digit number.
 * @returns {Object} - An object containing the generated invoice number, reference number, and order number.
 * @example
 * const invoiceNumbers = generateInvoiceNumbers();
 * console.log(invoiceNumbers.invoiceNumber); // "INV-20231001-1234"
 * console.log(invoiceNumbers.referenceNumber); // "REF-1696123456789-1234"
 * console.log(invoiceNumbers.orderNumber); // "ORD-20231001-1234"
 */
export const generateInvoiceNumbers = () => {
  const timeStamp = Date.now();
  const randomNumber = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");

  const date = new Date(timeStamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}${month}${day}`;

  const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;
  const referenceNumber = `REF-${timeStamp}-${randomNumber}`;
  const orderNumber = `ORD-${formattedDate}-${randomNumber}`;
  const quotationNumber = `QTN-${timeStamp}-${randomNumber}`;

  return {
    invoiceNumber,
    referenceNumber,
    orderNumber,
    quotationNumber,
  };
};
