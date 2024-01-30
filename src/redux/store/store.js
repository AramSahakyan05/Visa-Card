import { createStore } from "redux";
function reducer(state, action) {
  if (action.type === "change_value") {
    return {
      ...state,
      inputValues: {
        ...state.inputValues,
        [action.payload.key]: action.payload.value,
      },
    };
  }
  if(action.type === "clear_values") {
    return {
      ...state,
      inputValues: {
        cvc: "",
        nameValue: "",
        surnameValue: "",
        senderCardCode: "",
        month: "",
        year: "",
        senderBalance: "",
        receiverCardCode: "",
        receiverBalance: ""
      }
    }
  }
  return state;
}
const store = createStore(reducer, {
  data: [
    {
      id: 1,
      name: "Jack",
      surname: "London",
      code: {
        main_code: "9051140212345678",
        cvc: 111,
      },
      date: {
        year: 24,
        month: 10,
      },
      balance: 150000,
    },
    {
      id: 2,
      name: "John",
      surname: "Doe",
      code: {
        main_code: "9011123454568901",
        cvc: 999,
      },
      date: {
        year: 26,
        month: 11,
      },
      balance: 50000,
    },
    {
      id: 3,
      name: "Mary",
      surname: "Jane",
      code: {
        main_code: "7711673454566901",
        cvc: 123,
      },
      date: {
        year: 20,
        month: 12,
      },
      balance: 990000,
    },
  ],
  inputValues: {
    cvc: "",
    nameValue: "",
    surnameValue: "",
    senderCardCode: "",
    month: "",
    year: "",
    senderBalance: "",
    receiverCardCode: "",
    receiverBalance: ""
  },
});
export default store;
