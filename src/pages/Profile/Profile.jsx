import "./Profile.css";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import RecentWork from "../../components/RecentWork/RecentWork";
import IntroductionText from "../../components/IntroductionText/IntroductionText";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";

export default function ProfilePage() {
  return (
    <>
      <section className="profile">
        <Navbar />
        <RecentWork />
        <Banner />
        <IntroductionText />
      </section>
      <section className="profile-projects">
        <Gallery />
      </section>
      <section className="profile-contact">
        <Footer />
      </section>
    </>
  );
}
