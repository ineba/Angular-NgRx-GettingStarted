import { Product } from '../product';

/* NgRx */
import { createAction, props, union } from '@ngrx/store';

// Action Creators
export const toggleProductCode = createAction(
  '[Product] Toggle Product Code',
  props<{ showProductCode: boolean }>()
);

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ product: Product }>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize Current Product'
);

export const loadProducts = createAction(
  '[Product] Load'
);

export const loadProductsSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Fail',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFail = createAction(
  '[Product] Update Product Fail',
  props<{ error: string }>()
);

export const createProduct = createAction(
  '[Product] Create Product',
  props<{ product: Product }>()
);

export const createProductSuccess = createAction(
  '[Product] Create Product Success',
  props<{ product: Product }>()
);

export const createProductFail = createAction(
  '[Product] Create Product Fail',
  props<{ error: string }>()
);

export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ productId: number }>()
);

export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ productId: number }>()
);

export const deleteProductFail = createAction(
  '[Product] Delete Product Fail',
  props<{ error: string }>()
);

// Union the valid types
const all = union({
  toggleProductCode,
  setCurrentProduct,
  clearCurrentProduct,
  initializeCurrentProduct,
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
  updateProduct,
  updateProductSuccess,
  updateProductFail,
  createProduct,
  createProductSuccess,
  createProductFail,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFail
});
export type ProductActionsUnion = typeof all;
