/** @format */

const {
  MoonIcon,
  OrderIcon,
  UserIcon,
  CartIcon,
  HeartIcon,
} = require("@/assets/svgIcons");

export const headerData = [
  { icon: <MoonIcon /> },
  { icon: <HeartIcon />, text: "Lists" },
  { icon: <OrderIcon />, text: "Orders" },
  { icon: <UserIcon />, text: "Account" },
  { icon: <CartIcon />, text: "Cart" },
];
