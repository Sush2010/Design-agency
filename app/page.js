import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";

function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Contact/> 
      <Footer/>
    </main>
  );
}
export default Home;