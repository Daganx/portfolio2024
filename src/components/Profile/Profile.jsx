import "./Profile.css";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import RecentWork from "../RecentWork/RecentWork";

export default function Profile() {
  return (
    <section className="profile">
      <Navbar />
      <RecentWork />
      <Banner />
    </section>
  );
}
