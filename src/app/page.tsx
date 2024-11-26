import Header from "../components/Header";
import Hero from "../components/Hero";
import ExploreCourse from "../components/ExploreCourse";
import CompaniesLogo from "../components/CompaniesLogo";
import Achievement from "../components/Achievement";
import Navbar from "../components/Navbar";
import Members from "../components/Members";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <CompaniesLogo />
      <ExploreCourse />
      <Achievement />
      <Blog />
      <Members />
      <Testimonial />
      <Footer />
    </div>
  );
}