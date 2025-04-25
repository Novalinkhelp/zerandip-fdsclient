/**
 * Utility functions for price calculations and formatting.
 */

export const priceUtils = {
  /**
   * Formats a price to a string with two decimal places with proper currency formatting.
   * @param {number|string} price - The price to format.
   * @returns {string} - The formatted price string.
   * @example
   * formatPrice(1234.567) // "1,234.57"
   */
  formatPrice: (price) => {
    if (!price) return "0.00";
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatter.format(price);
  },

  /**
   * Calculates the gross value, discount value, and net value of an item based on its unit price, quantity issued, and discount percentage.
   * @param {number|string} unitPrice - The unit price of the item.
   * @param {number|string} quantity - The quantity of the items.
   * @param {number|string} discountPercentage  - The discount percentage to apply.
   * @returns {Object} - An object containing the gross value, discount value, and net value.
   * @example
   * calculateItemValue(100, 2, 10) // { grossValue: 200, discountValue: 20, netValue: 180 }
   */
  calculateItemValue: (unitPrice, quantity, discountPercentage) => {
    if (!unitPrice || !quantity) return 0;
    const price = parseFloat(unitPrice) || 0;
    const quantityOfItems = parseFloat(quantity) || 0;
    const discount = parseFloat(discountPercentage) || 0;

    const grossValue = parseFloat((price * quantityOfItems).toFixed(2));
    const discountValue = parseFloat(
      (grossValue * (discount / 100)).toFixed(2)
    );

    const netValue = parseFloat((grossValue - discountValue).toFixed(2));

    return { grossValue, discountValue, netValue };
  },

  /**
   * Calculates the total gross value, total discount value, and total net value for an array of items.
   * @param {Array<Object>} items - Array of item objects, each containing unitPrice, quantityIssued, and discount properties.
   * @returns {Object} - An object containing the total gross value, total discount value, and total net value.
   * @example
   * calculateTotalValues([
   *   { unitPrice: 100, quantityIssued: 2, discount: 10 },
   *  { unitPrice: 50, quantityIssued: 1, discount: 5 }
   * ]) // { grossValue: 250, discountValue: 25, netValue: 225 }
   */
  calculateTotalValues: (
    items,
    quantityField = "quantityIssued",
    priceField = "unitPrice"
  ) => {
    if (!items || items.length === 0)
      return { grossValue: 0, discountValue: 0, netValue: 0 };

    const totalValues = items.reduce(
      (totals, item) => {
        const quantity = item[quantityField] || 0;
        const price = item[priceField] || 0;

        const { grossValue, discountValue, netValue } =
          priceUtils.calculateItemValue(price, quantity, item.discount);

        return {
          grossValue: parseFloat((totals.grossValue + grossValue).toFixed(2)),
          discountValue: parseFloat(
            (totals.discountValue + discountValue).toFixed(2)
          ),
          netValue: parseFloat((totals.netValue + netValue).toFixed(2)),
        };
      },
      { grossValue: 0, discountValue: 0, netValue: 0 }
    );

    return totalValues;
  },
};
