import SectionHeader from "../courses/SectionHeader";
import Review from "./Review";
import "./reviews.css";
function Reviews() {
  return (
    <section id="reviews">
      <SectionHeader
        title={"Each and every cient is important"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, itaque. Illum voluptatum commodi molestiae ratione. Nostrum laborum excepturi deserunt rerum temporibus quod illum eligendi! Ipsam saepe explicabo iusto eum ullam."
        }
      />
      <Review />
    </section>
  );
}

export default Reviews;
