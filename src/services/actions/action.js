import {
  SHOW_POPUP,
  SET_SELECTED_ITEMS,
  SET_CHECKED,
  RESET_SELECTEDITEMS,
  SET_CATEGORY,
  SET_NUMBEROFITEMS,
  SET_EXTRAS,
  SHOW_VIEW_BASKET,
  SET_TABLENUMBER,
  ADD_ORDERTOBASKET,
  CHANGE_LAN,
  SET_VARIANT,
  REMOVE_ITEM,
  REMOVE_EXISTING_ITEM,
  SET_EXTRA_PRICE,
} from '../constants';

export const addSelecteditem = (data) => {
  return {
    type: SET_SELECTED_ITEMS,
    payload: {
      selectedItem: data,
    },
  };
};

export const setCategory = (data) => {
  return {
    type: SET_CATEGORY,
    payload: {
      category: data,
    },
  };
};

export const setNumberOfItems = (data, boolean) => {
  console.log('number of items', data);
  return {
    type: SET_NUMBEROFITEMS,
    payload: {
      numberOfItems: data,
      inc: boolean,
    },
  };
};

export const setChecked = (data) => {
  return {
    type: SET_CHECKED,
    payload: {
      checked: data,
    },
  };
};

export const setextras = (extras, boolean) => {
  return {
    type: SET_EXTRAS,
    payload: {
      extras: extras,
      checked: boolean,
    },
  };
};

export const setExtraPrice = (price, boolean) => {
  return {
    type: SET_EXTRA_PRICE,
    payload: {
      price: price,
      checked: boolean,
    },
  };
};
export const setVariant = (data) => {
  return {
    type: SET_VARIANT,
    payload: {
      variant: data,
    },
  };
};

export const setshowViewBasket = () => {
  return {
    type: SHOW_VIEW_BASKET,
  };
};

export const setShowPopup = () => {
  return {
    type: SHOW_POPUP,
  };
};

export const resetSelectedItems = () => {
  return {
    type: RESET_SELECTEDITEMS,
  };
};

export const setTablenumber = (data) => {
  return {
    type: SET_TABLENUMBER,
    payload: {
      tableNumber: data,
    },
  };
};

export const removeExistingItem = (index) => {
  console.log('removeExistingItem', index);
  return {
    type: REMOVE_EXISTING_ITEM,
    payload: {
      id: index,
    },
  };
};

export const addOrderToBasket = (data) => {
  return {
    type: ADD_ORDERTOBASKET,
    payload: {
      orderedItems: data,
    },
  };
};

export const itemTobeRemove = (data) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      removeItem: data,
    },
  };
};

export const Change_lan = (data) => {
  return {
    type: CHANGE_LAN,
    payload: {
      data: data,
    },
  };
};
