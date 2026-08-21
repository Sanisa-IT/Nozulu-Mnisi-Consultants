import { useState } from "react";
import Navbar, { type Page } from "./components/site/Navbar";
import Footer from "./components/site/Footer";
import HomePage       from "./pages/HomePage";
import AboutPage      from "./pages/AboutPage";
import ServicesPage   from "./pages/ServicesPage";
import JourneyPage    from "./pages/JourneyPage";
import WhoWeServePage from "./pages/WhoWeServePage";
import InsightsPage   from "./pages/InsightsPage";
import ReviewsPage    from "./pages/ReviewsPage";
import FaqsPage       from "./pages/FaqsPage";
import ContactPage    from "./pages/ContactPage";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar current={page} navigate={navigate} />

      {page === "home"         && <HomePage       navigate={navigate} />}
      {page === "about"        && <AboutPage      navigate={navigate} />}
      {page === "services"     && <ServicesPage   navigate={navigate} />}
      {page === "journey"      && <JourneyPage    navigate={navigate} />}
      {page === "who-we-serve" && <WhoWeServePage navigate={navigate} />}
      {page === "insights"     && <InsightsPage />}
      {page === "reviews"      && <ReviewsPage    navigate={navigate} />}
      {page === "faqs"         && <FaqsPage       navigate={navigate} />}
      {page === "contact"      && <ContactPage />}

      <Footer navigate={navigate} />
    </div>
  );
}
