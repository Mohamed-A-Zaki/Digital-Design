import data from "../../json/data.json";
import TeamMember from "../../Components/TeamMember/TeamMember";

const TeamList = () => {
  return (
    <section className="our-team py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
          {data.our_team.map((member) => (
            <div className="col" key={member.id}>
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamList;
