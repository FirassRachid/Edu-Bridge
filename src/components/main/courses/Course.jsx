import { FaStar } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import pens from "../../../assets/pens.png";
import light from "../../../assets/light.png";
import person from "../../../assets/person.png";

import "./cours.css";
function Course() {
  const cards = [
    {
      id: "1",
      image: pens,
      name: "Graphic Design",
      title: "UI & UX Design",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore hic repellat magni voluptatibus asperiores eum dolortex ipsa rem maxime eius quaerat nulla. ",
      rating: 4.7,
      sales: "80 Sales",
      disacount: 11.99,
      price: 5.99,
      duration: "22hr 30min",
      lessons: "64 lessons",
    },
    {
      id: "2",
      image: light,
      name: "Sofware Developmert",
      title: "Project Design",
      text: "dolores ipsa rem maxime eius quaerat nulla necessitatibus odit. Saepe porro quam minus quis culpa rerum accusantium delectus sed eos, recusandae vel.",
      rating: 4.5,
      sales: "50 Sales",
      disacount: 13.99,
      price: 8.99,
      duration: "18hr 30min",
      lessons: "59 lessons",
    },
    {
      id: "3",
      image: person,
      name: "Web Developmert",
      title: "HTML & CSS",
      text: "minus quis culpa rerum accusantium delectus sed eos, recusandae vel sapiente aliquam odio optio doloremque laboriosam mollitia corrupti? Aliquid tdolores.",
      rating: 4.8,
      sales: "70 Sales",
      disacount: 12.99,
      price: 7.99,
      duration: "19hr 30min",
      lessons: "46 lessons",
    },
  ];
  return (
    <>
      {cards.map((card) => {
        return (
          <div key={card.id} className="card">
            <img src={card.image} />
            <div className="rating-div">
              <span className="s-h-p1">{card.name}</span>
              <span className="rating">
                <FaStar className="star" />
                {card.rating}
              </span>
            </div>
            <h4>{card.title}</h4>
            <p className="p-c-t">{card.text}</p>
            <p className="p-c-s">{card.sales}</p>
            <div>
              <del>${card.disacount}</del>
              <span className="p-c-p">${card.price}</span>
            </div>
            <div className="duration-lessons-div">
              <span>
                <IoMdAlarm className="d-l-icon" /> {card.duration}
              </span>
              <span>
                <FaBookOpen className="d-l-icon" /> {card.lessons}
              </span>
            </div>
            <a href="">
              Learn More <FaAngleRight className="a-icon" />
            </a>
          </div>
        );
      })}
    </>
  );
}

export default Course;
