import { CiMap } from "react-icons/ci";

import { FaImages } from "react-icons/fa";

import { FaCreditCard } from "react-icons/fa";

import "./card.css";
function Card() {
  const cards = [
    {
      id: 1,
      icon: <CiMap />,
      bgColor: "#b2e3ff",
      color: "#23a6f0",
      title: "Bookes Library",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt repellat voluptate, alias nisi, sapiente veritatis",
    },
    {
      id: 2,
      icon: <FaImages />,
      bgColor: "#ff7c8f",
      color: "#e74040",
      title: "Market Analyses",
      text:"  exercitationem consectetur veniam, libero et qui hic nesciunt cupiditate sed. Pariatur, doloremque nam",
    },
    {
      id: 3,
      icon: <FaCreditCard />,
      bgColor: "#b9eaa8",
      color: "#2dc071",
      title: "+50 Online Courses",
      text: " Officiis excepturi aut ab obcaecati explicabo, beatae rerum enim possimus! Fugit laborum dolorum quasi possimus",
    },
  ];
  return (
    <>
      {cards.map((card) => {
        return (
          <div key={card.id} className="card-container">
            <p
              className="icon"
              style={{ backgroundColor: card.bgColor, color: card.color }}
            >
              {card.icon}
            </p>
            <h3>{card.title}</h3>
            <span>______________</span>
            <p>{card.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default Card;
