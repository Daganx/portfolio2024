import "./Profile.css";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import RecentWork from "../../components/RecentWork/RecentWork";
import PersonalInformation from "../../components/PersonalInformation/PersonalInformation";
import Project from "../../components/Project/Project";
import Contact from "../../components/Contact/Contact";

export default function ProfilePage() {
  return (
    <>
      <section className="profile">
        <Navbar />
        <RecentWork />
        <Banner />
        <PersonalInformation />
      </section>
      <section className="profile-projects">
        <Project />
      </section>
      <section className="profile-contact">
        <Contact />
      </section>
    </>
  );
}
