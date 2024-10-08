import "./Profile.css";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import RecentWork from "../RecentWork/RecentWork";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

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
