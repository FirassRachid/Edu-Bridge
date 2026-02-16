import SectionHeader from "./SectionHeader";
import Course from "./Course";
import "./courses.css";
function Courses() {
  return (
    <section id="courses">
      <div className="course-container">
        <SectionHeader
          title={"Make Online education acessible"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid fugiatautem, totam quas itaque velit iusto commodi, quo quibusdam officiisamet suscipit, voluptatem culpa vero harum? Natus amet veniam illum autem, totam quas itaque velit iusto commodi, quo quibusdam officiis, totam quas itaque velit iusto commodi, quo quibusdam officii quo quibusdam officiis amet suscipit."
          }
        />

        <div className="cards-container">
          <Course />
        </div>
      </div>
    </section>
  );
}

export default Courses;
