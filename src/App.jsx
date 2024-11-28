import { ToastContainer } from "react-toastify";
import Routes from "./Routes";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store"; // Import correctly
import { PersistGate } from "redux-persist/integration/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}
