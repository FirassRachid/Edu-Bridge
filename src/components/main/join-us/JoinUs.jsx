import SectionHeader from "../courses/SectionHeader";
import "./joinus.css";
function JoinUs() {
  return (
    <section id="joinus">
      <p className="s-h-p1">Practice Advice</p>
      <div className="h1-p-j-d">
        <h1 className="j-h1">JOIN US</h1>
        <p className="j-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam, ea
          necessitatibus deserunt et rerum a illum suscipit quos.
        </p>
        <div className="i-b-j-d">
          <input type="email" placeholder="Your Email"/>
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
