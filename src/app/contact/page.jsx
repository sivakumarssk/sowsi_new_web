import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: "Contact Us | Sowsi Technologies",
  description:
    "Let's discuss your project. Reach out to us today to learn how we can help bring your vision to life.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}