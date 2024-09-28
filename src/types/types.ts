export type User = {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  dob: string;
  _id: string;
};
export type Product = {
  name: string;
  price: number;
  stock: number;
  photo: string;
  category: string;
  _id: string;
};
export type ShippingInfo = {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
};
export type CartItem = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};
export type OrderItem = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  _id: string;
};

export type Order = {
  orderItems: OrderItem[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  shippingInfo: ShippingInfo;
  status: string;
  user: {
    name: string;
    _id: string;
  };
  _id: string;
};
type CountAndChange = {
  revenue: number;
  product: number;
  user: number;
  order: number;
};
export type LatestTransaction = {
  _id: string;
  amount: number;
  discount: number;
  quantity: number;
  status: string;
};
export type Stats = {
  categoryCount: Record<string, number>[];
  changePercent: CountAndChange;
  count: CountAndChange;
  chart: {
    order: number[];
    revenue: number[];
  };
  userRatio: {
    male: number;
    female: number;
  };
  latestTransaction: LatestTransaction;
};
export type Pie = {
  orderFullfillment: {
    processing: number;
    shipped: number;
    delivered: number;
  };
  productsCategories: Record<string, number>[];
  stockAvailablity: {
    inStock: number;
    outOfStock: number;
  };
  revenueDistribution: {
    netMargin: number;
    discount: number;
    productionCost: number;
    burnt: number;
    marketingCost: number;
  };
  usersAgeGroup: {
    teen: number;
    adult: number;
    old: number;
  };
  adminCustomer: {
    admin: number;
    customer: number;
  };
};

export type Bar={
  users: number[],
  products: number[],
  orders: number[],
}
export type Line={
  users: number[],
  products: number[],
  discount:number[],
  revenue:number[],
}