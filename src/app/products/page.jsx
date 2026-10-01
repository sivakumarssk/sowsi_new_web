import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsPage from "@/components/ProductsPage";

export const metadata = {
  title: "Products | Sowsi Technologies",
  description:
    "Explore the products in the Sowsi pipeline. Partner with us early to shape the roadmap and unlock early adopter advantages.",
};

export default function Products() {
  return (
    <>
      <Navbar />
      <ProductsPage />
      <Footer />
    </>
  );
}