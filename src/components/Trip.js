import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, country located off the coast of mainland Southeast Asia in the Indian and Pacific oceans. It is an archipelago that lies across the Equator and spans a distance equivalent to one-eighth of Earth’s circumference. Its islands can be grouped into the Greater Sunda Islands of Sumatra (Sumatera), Java (Jawa), the southern extent of Borneo (Kalimantan), and Celebes (Sulawesi); the Lesser Sunda Islands (Nusa Tenggara) of Bali and a chain of islands that runs eastward through Timor; the Moluccas (Maluku) between Celebes and the island of New Guinea; and the western extent of New Guinea (generally known as Papua). The capital, Jakarta, is located near the northwestern coast of Java. In the early 21st century Indonesia was the most populous country in Southeast Asia and the fourth most populous in the world."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia, country of Southeast Asia, lying just north of the Equator, that is composed of two noncontiguous regions: Peninsular Malaysia (Semenanjung Malaysia), also called West Malaysia (Malaysia Barat), which is on the Malay Peninsula, and East Malaysia (Malaysia Timur), which is on the island of Borneo. The Malaysian capital, Kuala Lumpur, lies in the western part of the peninsula, about 25 miles (40 km) from the coast; the administrative centre, Putrajaya, is located about 16 miles (25 km) south of the capital."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France, officially French Republic, French France or République Française, country of northwestern Europe. Historically and culturally among the most important nations in the Western world, France has also played a highly significant role in international affairs, with former colonies in every corner of the globe. Bounded by the Atlantic Ocean and the Mediterranean Sea, the Alps and the Pyrenees, France has long provided a geographic, economic, and linguistic bridge joining northern and southern Europe. It is Europe’s most important agricultural producer and one of the world’s leading industrial powers."
        />
      </div>
    </div>
  );
}
export default Trip;
