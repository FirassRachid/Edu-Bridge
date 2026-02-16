import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./footer.css";
function Footer() {
  const boxes = [
    {
      id: 1,
      title: "Company info",
      a1: "About Us",
      a2: "Carrier",
      a3: "We are hiring",
      a4: "Blog",
    },
    {
      id: 2,
      title: "Features",
      a1: "Business Marketing",
      a2: "User Analytic",
      a3: "Live Chat",
      a4: "Support",
    },
    {
      id: 1,
      title: "Resources",
      a1: "IOS & Android",
      a2: "Watch a Demo",
      a3: "Customers",
      a4: "API",
    },
  ];
  return (
    <>
      <section id="footer">
        <div className="box1">
          <h2>Get In Tocuh</h2>
          <p className="p-j-b1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div>
            <a href="">
              <FaFacebook className="icon-j-b1" />
            </a>
            <a href="">
              <FaInstagram className="icon-j-b1" />
            </a>
            <a href="">
              <FaTwitter className="icon-j-b1" />
            </a>
          </div>
        </div>
        {boxes.map((boxe) => {
          return (
            <div key={boxe.id} className="box2">
              <h2>{boxe.title}</h2>
              <div>
                <a href="">{boxe.a1}</a>
                <a href="">{boxe.a2}</a>
                <a href="">{boxe.a3}</a>
                <a href="">{boxe.a4}</a>
              </div>
            </div>
          );
        })}
      </section>
      <p className="conact-me">
        By{" "}
        <a href="https://mailto:firassrachid2000@gmail.com" target="_blank">
          Firass Rachid
        </a>
        {" _ "}
        <a
          href="https://api.whatsapp.com/send?phone=0963937898507"
          target="_blank"
        >
          whatsapp
        </a>
      </p>
    </>
  );
}

export default Footer;
