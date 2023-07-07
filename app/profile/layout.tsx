import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </>
  );
}
