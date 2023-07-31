import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain5 from "../assets/5.jpg";
import Mountain8 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppurtunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text=" Taal Volcano is a large caldera in Batangas that was formed by
     prehistoric eruptions. In the wake of the eruptions, it was
     eventually filled by Taal Lake. Throughout history it has erupted
     about 38 times, making it the second most active volcano in the
     Philippines."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text=" Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain."
        img1={Mountain5}
        img2={Mountain8}
      />
    </div>
  );
};
export default Destination;
