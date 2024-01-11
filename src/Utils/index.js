/**
 * Function to sum products prices contained inside an array
 * @param {Array} cart Array of products(objects) on cart
 * @returns {number} Total sum of products prices 
 */
export const totalPrice = (cart) => {
    //acumulator variable
    let total = 0;
    // Array gathering products prices and adding to acumulator
    cart.forEach(product => {total += product.price});

    return total;
}