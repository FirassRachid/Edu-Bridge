import { FaStar } from "react-icons/fa";
import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.jpg";

import './review.css'
function Review() {
  const reviews = [
    {
      id: "1",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore hic repellat magni voluptatibus ",
      image: person1,
      name: "Gamal Ahmad",
      career: "Software Engineer",
    },
    {
      id: "2",
      text: "Inventore hic repellat magni voluptatibus asperiores eum dolortex ipsa rem maxime eius quaerat nulla. ",
      image: person2,
      name: "Mohamad Amer",
      career: "Designer",
    },
    {
      id: "3",
      text: "quaerat repellat magni voluptatibus asperiores eum dolortex ipsa rem maxime eius quaerat a asperiores. ",
      image: person3,
      name: "Mohamad Gamal",
      career: "Developer",
    },
  ];

  return (
    <div className="reviews-container">
      {reviews.map((review) => {
        return (
          <div key={review.id} className="review-container">
            <p>
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
            </p>
            <p className="p-r-t">{review.text}</p>
            <div className="i-n-c-div">
              <div className="i-r-div"><img src={review.image}/></div>
              <div>
                <p className="r-n">{review.name}</p>
                <h4>{review.career}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Review;
