// src/app/portfolio/page.jsx
import Navbar from "@/components/Navbar";
import PortfolioPage from "@/components/PortfolioPage";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio | Sowsi Technologies",
  description:
    "Explore our collection of innovative solutions and successful projects that showcase our expertise and innovation.",
};

export default function Portfolio() {
  return (
    <>
      <Navbar />

      <PortfolioPage />

      <Footer />
    </>
  );
}