export enum productName {
  T_SHIRT = 'T-shirt',
  JEANS = 'Jeans',
}

export const productSizes = ['S', 'M', 'L', 'XL', 'XXL'];
export const productColor = ['Red', 'Blue', 'White', 'Black'];
export const productCoupons = [
  {
    code: 'FIRST50',
    discountPercentage: 50,
    maxUsage: 1,
    description: 'The price of the item gets discounted by 50%',
  },
  {
    code: 'PATRON50',
    discountPercentage: 50,
    maxUsage: 1,
    description: 'The price of the item gets discounted by 50%',
  },
  {
    code: 'REPEAT80',
    discountPercentage: 80,
    maxUsage: Infinity,
    description: 'The price of the item gets discounted by 80%',
  },
];
