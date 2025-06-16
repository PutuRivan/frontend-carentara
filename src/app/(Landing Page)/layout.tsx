import { Footer } from "@/components/base/footer";
import { Navbar } from "@/components/base/navbar";

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}   
      <Footer />

    </>
  )
}
