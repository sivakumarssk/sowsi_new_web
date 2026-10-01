import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPage from "@/components/ServicesPage";
import ReadyToBuild from "@/components/ReadyToBuild";

export const metadata = {
  title: "Services | Sowsi Technologies",
  description:
    "From strategy to execution, we help businesses build, launch, and grow with mobile, web, IoT, AI, cloud, and consulting services.",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <ServicesPage />
      <ReadyToBuild />
      <Footer />
    </>
  );
}