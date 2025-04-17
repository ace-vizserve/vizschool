import Footer from "@/components/footer";
import ActionBox from "@/components/landing-page/action-box";
import ClassesTutors from "@/components/landing-page/classes-tutors";
import Hero from "@/components/landing-page/hero-section";
import PopularArticles from "@/components/landing-page/popular-articles";
import Testimonials from "@/components/landing-page/testimonials";
import VirtualCourses from "@/components/landing-page/virtual-courses";
import PageMetaData from "@/components/metadata";
import Navbar from "@/components/navbar/navbar";

function LandingPage() {
  return (
    <>
      <PageMetaData />
      <Navbar />
      <main>
        <Hero />
        <ClassesTutors />
        <VirtualCourses />
        <Testimonials />
        <PopularArticles />
        <ActionBox />
        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
