import Navbar from "./features/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import HomePage from "./scenes/Home/index.jsx";
import StakePage from "./scenes/Stake/index.jsx";
import P2PPage from "./scenes/P2P/index.jsx";
import QRCodePage from "./scenes/QRCode/index.jsx";
import FaqPage from "./scenes/FAQ/index.jsx";
import ProfilePage from "./scenes/Profile/index.jsx";

i18n.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stake" element={<StakePage />} />
          <Route path="/p2p" element={<P2PPage />} />
          <Route path="/qr-code" element={<QRCodePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </I18nextProvider>
  );
}

export default App;
