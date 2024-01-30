import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const inputValues = useSelector((state) => state.inputValues);
  const dispatch = useDispatch();
  const changeValue = (type, payload) => {
    return dispatch({ type: type, payload: payload });
  };
  const toParse = () => {
    return JSON.parse(localStorage.getItem("data"));
  };
  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const notifyError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const notifyWarn = (message) => {
    toast.warn(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const checkData = () => {
    const name = toParse().find((item) => item.name === inputValues.nameValue);
    const surname = toParse().find((item) => item.surname === inputValues.surnameValue);
    const senderCardCode = toParse().find((item) => item.code.main_code === inputValues.senderCardCode);
    const cvc = toParse().find((item) => item.code.cvc === +inputValues.cvc);
    const cardMonth = toParse().find((item) => item.date.month === +inputValues.month);
    const cardYear = toParse().find((item) => item.date.year === +inputValues.year);
    const receiverCardCode = toParse().find(item => item.code.main_code === inputValues.receiverCardCode)

    if(senderCardCode && cardMonth && cardYear && name && surname && cvc && receiverCardCode) {
      if(+inputValues.senderBalance > 0 && +inputValues.senderBalance <= name.balance) {
        const newSenderBalance = name.balance - +inputValues.senderBalance;
        const newReceiverBalance = receiverCardCode.balance + +inputValues.senderBalance;
        localStorage.setItem("newData", JSON.stringify(toParse().map(item => {
          if(item.id === name.id) {
            return{
              ...item,
              balance:newSenderBalance
            }
          }
          if(item.id === receiverCardCode.id) {
            return {
              ...item,
              balance: newReceiverBalance
            }
          }
          return item
        })));
        notifySuccess("Process end successfully");
        dispatch({type: "clear_values"})
      } else {
        notifyWarn("Less amounts try again")
      }
    } else {
      notifyError("Please fill all fields")
    }


  };
  return (
    <div className="register">
      <form>
        <div className="code">
          <input
            type="text"
            placeholder="Card Code"
            value={inputValues.senderCardCode}
            onChange={(e) => {
              changeValue("change_value", {
                key: "senderCardCode",
                value: e.target.value,
              });
            }}
            maxLength={16}
          />
        </div>
        <div className="date">
          <div className="month">
            <select onChange={(e) => {
                changeValue("change_value", {
                  key: "month",
                  value: e.target.value,
                });
              }}>
              <option value="Month" selected disabled>Month</option>
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="year">
            <select onChange={(e) => {
                changeValue("change_value", {
                  key: "year",
                  value: e.target.value,
                });
              }}>
              <option value="Year" selected disabled>Year</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
        <div className="name">
          <input
            placeholder="Name"
            value={inputValues.nameValue}
            onChange={(e) => {
              changeValue("change_value", {
                key: "nameValue",
                value: e.target.value,
              });
            }}
          />
        </div>
        <div className="surname">
          <input
            placeholder="Surname"
            value={inputValues.surnameValue}
            onChange={(e) => {
              changeValue("change_value", {
                key: "surnameValue",
                value: e.target.value,
              });
            }}
          />
        </div>
        <div className="cvc">
          <input
            type="text"
            placeholder="CVC/CVV"
            value={inputValues.cvc}
            onChange={(e) => {
              changeValue("change_value", {
                key: "cvc",
                value: e.target.value,
              });
            }}
            maxLength={3}
          />
        </div>
        <div className="balance">
          <input
            type="number"
            placeholder="Balance"
            value={inputValues.senderBalance}
            onChange={(e) => {
              changeValue("change_value", {
                key: "senderBalance",
                value: e.target.value,
              });
            }}
          />
        </div>
      </form>
      <form>
        <div className="code">
        <input
            type="text"
            placeholder="Card Code"
            value={inputValues.receiverCardCode}
            onChange={(e) => {
              changeValue("change_value", {
                key: "receiverCardCode",
                value: e.target.value,
              });
            }}
            maxLength={16}
          />
        </div>
      </form>
      <a
        className="send"
        onClick={() => {
          checkData();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Send
      </a>
    </div>
  );
};

export default Register;
