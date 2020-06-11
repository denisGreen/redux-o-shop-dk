import shop from "./book-list-reducer.js";
import * as types from "../actions/ActionTypes";
import createAction from "../actions/actions-creator";

describe("shop reducer", () => {
  it("should sort array", () => {
    const expected = "";
  });
  it("should sort items by price", () => {
    const innerState = {
      books: [
        {
          id: 1,
          title: "Production-Ready Microservices",
          author: "Susan J. Fowler",
          price: 32,
          coverImage:
            "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
        },
        {
          id: 2,
          title: "Release It!",
          author: "Michael T. Nygard",
          price: 45,
          coverImage:
            "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"
        }
      ],
      isLoading: true,
      requestError: null
    };
    const expectedByPriceBigest = {
      books: [
        {
          id: 2,
          title: "Release It!",
          author: "Michael T. Nygard",
          bookDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae architecto,
             fugiat deserunt repellat modi, tempora exercitationem, tempore cumque dolorem
              molestiae hic quasi blanditiis offici perferendis. Suscipit culpa reiciendis 
              blanditiis fugit.`,
          price: 45,
          yearWritten: "2019",
          coverImage:
            "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"
        },
        {
          id: 1,
          title: "Production-Ready Microservices",
          author: "Susan J. Fowler",
          bookDescription:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae architecto, fugiat deserunt repellat modi, tempora exercitationem, tempore cumque dolorem molestiae hic quasi blanditiis offici perferendis. Suscipit culpa reiciendis blanditiis fugit.",
          price: 32,
          yearWritten: "2020",
          coverImage:
            "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
        }
      ],
      isLoading: true,
      requestError: null
    };
    expect(shop(innerState, createAction(types.SORT_BY_PRICE))).toEqual(
      expectedByPriceBigest
    );
  });
});
