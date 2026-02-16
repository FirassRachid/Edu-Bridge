import Card from "./Card";
import "./home.css";
function Home() {
  return (
    <section id="home">
      <div className="contianer">
        <a className="join-l" href="#joinus">Join Us</a>
        <h1>Best Learning Opportunities</h1>
        <p>
          we know how large objects will act but things on a small scale just do
          not act that way
        </p>
        <div className="butt-div">
          <a href="#" className="butt1">Get Quote Now</a>
          <a href="#" className="butt2">Learn More</a>
        </div>
      </div>
      <div className="cards-contianer">
        <Card />
      </div>
    </section>
  );
}

export default Home;
