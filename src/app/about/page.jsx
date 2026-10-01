import Navbar from "@/components/Navbar";
import AboutUsPage from "@/components/AboutUsPage";
import ReadyToBuild from "@/components/ReadyToBuild";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Sowsi Technologies",
  description:
    "Learn more about Sowsi Technologies, our mission, vision, and values.",
};

export default function About() {
  return (
    <>
      <Navbar />

      <AboutUsPage />

      <ReadyToBuild />

      <Footer />
    </>
  );
}