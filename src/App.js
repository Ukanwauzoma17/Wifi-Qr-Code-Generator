import { Contact } from "./components/Contact-us";
import { WifiQrCodeGenerator } from "./components/Wifi-Qr-Code-Gen";
import "./index.css";

function App() {
  return (
    <>
      <Contact />
      <main>
    <WifiQrCodeGenerator />
      </main>
    </>
  );
}

export default App;
