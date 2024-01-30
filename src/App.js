import { useSelector } from "react-redux";
import "./App.scss";
import Register from "./components/register/Register";
import Card from "./components/card/Card";
import { ToastContainer } from "react-toastify";
function App() {
  const data = useSelector((state) => state.data);
  localStorage.setItem("data", JSON.stringify(data));
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Register />
      <Card />
    </div>
  );
}

export default App;
