const initialState = {
  books: [
    {id: 1, title: 'Production-Ready Microservices',
author: "Susan J. Flower"},
    {Id: 2, title: "Realise It", author: "Michael T. Nygard"}
],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
