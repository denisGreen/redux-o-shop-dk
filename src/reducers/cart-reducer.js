import * as types from "../actions/ActionTypes";
//creating a new item or increase the count and price
const newItemInCart = (book = {}, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    price = book.price,
    total = 0,
    count = 0
  } = item;
  return {
    id: id,
    title: title,
    count: count + quantity,
    price: price,
    total: total + price * quantity
  };
};
//find item in the state array
const findItem = (arr, idx) => arr.find(({ id }) => id === idx);
//remove item

//updating a tha cart items array
const updateCart = (state, idx, quantity) => {
  // console.log("udCart", state);
  const { itemsInCart, countTotal, orderTotal } = state.cart;
  const { books } = state.shop;
  const book = findItem(books, idx);
  const itemId = itemsInCart.findIndex(({ id }) => id === idx);
  const item = itemsInCart[itemId];
  const newItem = newItemInCart(book, item, quantity);
  const newOrderTotal = orderTotal + book.price * quantity;
  const newCountTotal = countTotal + quantity;
  const countAndOrderTotal = {
    countTotal: newCountTotal,
    orderTotal: newOrderTotal
  };

  if (newItem.count === 0) {
    return {
      itemsInCart: [
        ...itemsInCart.slice(0, itemId),
        ...itemsInCart.slice(itemId + 1)
      ],
      ...countAndOrderTotal
    };
  } else if (itemId === -1) {
    return {
      itemsInCart: [...itemsInCart, newItem],
      ...countAndOrderTotal
    };
  }
  return {
    itemsInCart: [
      ...itemsInCart.slice(0, itemId),
      newItem,
      ...itemsInCart.slice(itemId + 1)
    ],
    ...countAndOrderTotal
  };
};
//remove item

//reducer for the shoping cart
const cart = (state, action) => {
  //console.log("mainCart", state);
  switch (action.type) {
    case types.INCREASE_ITEMS_IN_CART:
      //console.log("updateCart", updateCart(items, book));
      return updateCart(state, action.payload, 1);

    case types.DECREASE_ITEMS_IN_CART:
      return updateCart(state, action.payload, -1);
    case types.DELETE_ITEMS_FROM_CART:
      const item = findItem(state.cart.itemsInCart, action.payload);
      return updateCart(state, action.payload, -item.count);
    default:
      return state.cart;
  }
};

export default cart;
