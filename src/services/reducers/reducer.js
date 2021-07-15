import {
  SET_SELECTED_ITEMS,
  SHOW_POPUP,
  SET_NUMBEROFITEMS,
  SET_CHECKED,
  SET_EXTRAS,
  SHOW_VIEW_BASKET,
  SET_CATEGORY,
  RESET_SELECTEDITEMS,
  ADD_ORDERTOBASKET,
  SET_TABLENUMBER,
  CHANGE_LAN,
  SET_VARIANT,
  REMOVE_ITEM,
  REMOVE_EXISTING_ITEM,
  SET_EXTRA_PRICE,
} from '../constants';

const intialState = {
  selected_food: {},
  id: 0,
  category: 'DRINKS',
  itemname: '',
  price: 0,
  variantName: '',
  extras: [],
  extrasPrice: 0,
  checked: false,
  numberOfItems: 0,
  totalBill: 0,
  totalItem: 0,
  showPopup: false,
  showViewBasket: false,
  tableNumber: 10,
  order: [],
};

const language = {
  locale: 'en',
};

export function foodDetails(state = intialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
      };

    case SET_SELECTED_ITEMS:
      return {
        ...state,
        showPopup: !state.showPopup,
        showViewBasket: false,
        selected_food: action.payload.selectedItem,
        id: action.payload.selectedItem.id,
        price: action.payload.selectedItem.price,
        itemname: action.payload.selectedItem.name,
        numberOfItems: state.numberOfItems + 1,
      };
    case SET_VARIANT:
      return {
        ...state,
        variantName: action.payload.variant.name,
        price: action.payload.variant.price,
      };
    case SET_EXTRAS:
      return {
        ...state,
        extras: action.payload.checked
          ? state.extras.concat(action.payload.extras)
          : state.extras.filter((item) => action.payload.extras !== item),
      };
    case SET_EXTRA_PRICE:
      return {
        ...state,
        extrasPrice: action.payload.checked
          ? state.extrasPrice + action.payload.price
          : state.extrasPrice - action.payload.price,
      };
    case SET_CHECKED:
      return {
        ...state,
        checked: action.payload.checked,
      };

    case SET_NUMBEROFITEMS:
      return {
        ...state,
        numberOfItems: action.payload.numberOfItems,
      };

    case SHOW_POPUP:
      return {
        ...state,
        showPopup: !state.showPopup,
        showViewBasket: !state.showViewBasket,
      };

    case SHOW_VIEW_BASKET:
      return {
        ...state,
        showViewBasket: !state.showViewBasket,
      };

    case REMOVE_EXISTING_ITEM:
      return {
        ...state,
        order: state.order.filter((item) => action.payload.id !== item.id),
      };

    case ADD_ORDERTOBASKET:
      return {
        ...state,
        order: state.order.concat(action.payload.orderedItems),
        variantName: '',
        variantPrice: state.variantPrice,
        totalBill:
          state.totalBill +
          (state.price + state.extrasPrice) * state.numberOfItems,
        totalItem: state.totalItem + state.numberOfItems,
        selected_food: {},
        category: state.category,
        numberOfItems: 0,
        price: 0,
        checked: false,
        extras: [],
        extrasPrice: 0,
        itemname: '',
      };

    case RESET_SELECTEDITEMS:
      return {
        ...state,
        showPopup: false,
        showViewBasket: false,
        selected_food: {},
        category: state.category,
        numberOfItems: 0,
        price: 0,
        checked: false,
        extras: [],
        extrasPrice: 0,
        itemname: '',
      };

    case SET_TABLENUMBER:
      return {
        ...state,
        tableNumber: action.payload.tableNumber,
      };

    case REMOVE_ITEM:
      return {
        ...state,
        order: state.order.filter(
          (_item, index) => action.payload.removeItem !== index,
        ),
        totalBill:
          state.totalBill - state.order[action.payload.removeItem].price,
        totalItem:
          state.totalItem -
          state.order[action.payload.removeItem].numberOfItems,
      };
    default:
      return state;
  }
}

export function Language_Reducer(state = language, action) {
  switch (action.type) {
    case CHANGE_LAN:
      return {
        ...state,
        locale: action.payload.data,
      };

    default:
      return state;
  }
}
