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

export type Order={
  orderItems:OrderItem[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  shippingInfo:ShippingInfo;
  status:string;
  user:{
    name:string;
    _id:string;
  };
  _id:string;

}