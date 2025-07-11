import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/globals.css";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import Response from "./components/Response";
import ErrorPage from "./components/ErrorPage";
import SuccessTransaction from "./components/SuccessTraxn";
import FailTransaction from "./components/FailTraxn";

// Lazy load components
const Contact = lazy(() => import("./components/Contact"));
const Privacy = lazy(() => import("./components/Privacy"));
const Terms = lazy(() => import("./components/Terms"));
const Home = lazy(() => import("./components/Home"));
const Navbar = lazy(() => import("./components/layout/Navbar"));
const Footer = lazy(() => import("./components/layout/Footer"));
const Cancellation = lazy(() => import("./components/Cancellation"));
const Payment = lazy(() => import("./components/Payment"));
const Services = lazy(() => import("./components/Services"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
      </Suspense>
      
      <main className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cancellation" element={<Cancellation />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/response" element={<Response />} />
            <Route path="/success" element={<SuccessTransaction />} />
            <Route path="/failure" element={<FailTransaction />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;