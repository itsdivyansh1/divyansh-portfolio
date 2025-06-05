import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Navbar from "./components/navbar";
import { AnimatePresence } from "motion/react";
import Transition from "./components/transition";
import FooterSection from "./sections/footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <Transition>
                <HomePage />
              </Transition>
            }
          />
          <Route
            path="/contact"
            element={
              <Transition>
                <ContactPage />
              </Transition>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AnimatePresence>
      <FooterSection />
    </>
  );
};

export default App;
