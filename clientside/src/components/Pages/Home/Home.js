import Header from "../../Layout/Header/Header";
import BetterLiving from "../../Layout/BetterLiving/BetterLiving";
import ServiceSection from "../../UI/Sections/ServiceSection/ServiceSection";
import AlbumSection from "../../UI/Sections/AlbumSection/AlbumSection";
import AdmindashBoard from "../../AdminDashBoard/AdmindashBoard";
function Home() {
  return (
    <>
      {/* <Header></Header>
      <ServiceSection />
      <BetterLiving />
      <AlbumSection /> */}
      <AdmindashBoard></AdmindashBoard>
    </>
  );
}

export default Home;
