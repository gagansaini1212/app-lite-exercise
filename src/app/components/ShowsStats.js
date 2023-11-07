import Rating from "./ShowsRating";
import Schedule from "./ShowsSchedule";
import ShowsGenres from "./ShowsGenres";
import { Heading, Title } from "./atoms";

const ShowsStats = ({ shows }) => (
  <div>
    <Title title="Metrics" />
    <div className="columns">
      <div className="column m-4">
        <Heading subtitle="Average Rating" />
        <Rating shows={shows} />
      </div>
      <div className="column m-4 mb-4-mobile is-5-desktop">
        <Heading subtitle="Schedule Breakdown" />
        <Schedule shows={shows} />
      </div>
      <div className="column m-4">
        <Heading subtitle="Top Genres" />
        <ShowsGenres shows={shows} />
      </div>
    </div>
  </div>
);

export default ShowsStats;
