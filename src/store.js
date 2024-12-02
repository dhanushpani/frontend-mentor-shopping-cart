import data from "./api/data.json";
import { create } from "zustand";

export const useStore = create((set) => ({
  productData: data,
  incrementCount: (name) =>
    set((state) => {
      const totalCount = state.productData.reduce(
        (sum, item) => sum + (item.count || 0),
        0
      );
      return {
        productData: state.productData.map((item) =>
          item.name === name
            ? {
                ...item,
                count: (item.count || 0) + 1,
                tc: totalCount + 1,
              }
            : {
                ...item,
                tc: totalCount + 1,
              }
        ),
      };
    }),

  decrementCount: (name) =>
    set((state) => {
      const totalCount = state.productData.reduce(
        (sum, item) => sum + (item.count || 0),
        0
      );

      return {
        productData: state.productData.map((item) =>
          item.name === name
            ? {
                ...item,
                count: (item.count || 0) - 1,
                tc: totalCount - 1,
              }
            : {
                ...item,
                tc: totalCount - 1,
              }
        ),
      };
    }),

  removeItem: (name) =>
    set((state) => {
      const itemToRemove = state.productData.find((item) => item.name === name);
      const countToRemove = itemToRemove?.count || 0;
      const newTotalCount =
        state.productData.reduce((sum, item) => sum + (item.count || 0), 0) -
        countToRemove;

      return {
        productData: state.productData.map((item) =>
          item.name === name
            ? {
                ...item,
                count: 0,
                tc: newTotalCount,
              }
            : {
                ...item,
                tc: newTotalCount,
              }
        ),
      };
    }),
}));
