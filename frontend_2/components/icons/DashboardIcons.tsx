"use client";

import {
  FiDollarSign,
  FiShoppingCart,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

export const RevenueIcon = () => (
  <FiDollarSign className="w-8 h-8 text-green-600" />
);

export const SalesIcon = () => (
  <FiShoppingCart className="w-8 h-8 text-blue-600" />
);

export const UsersIcon = () => (
  <FiUsers className="w-8 h-8 text-purple-600" />
);

export const GrowthIcon = () => (
  <FiTrendingUp className="w-8 h-8 text-orange-500" />
);
