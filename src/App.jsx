import { ToastContainer } from "react-toastify";
import TheRouter from "./routing/TheRouter";

const App = () => {
  return (
    <div>
      <TheRouter />
      <ToastContainer
      position="top-right"
      pauseOnHover
      autoClose={3000}/>
    </div>
  );
};

export default App;
