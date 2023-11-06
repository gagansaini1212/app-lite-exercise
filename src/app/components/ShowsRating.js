import GaugeChart from "react-gauge-chart";

const Rating = ({ shows }) => {
  // Calculate the sum of ratings
  const sumOfRatings = shows.reduce(
    (total, item) => total + item.show.rating.average,
    0
  );

  // Calculate the average rating
  const averageRating = sumOfRatings / shows.length;
  return (
    <GaugeChart
      id="gauge-chart5"
      nrOfLevels={300}
      arcsLength={[1, 2, 3, 4, 4, 5, 6, 7, 8, 10]}
      colors={["#5BE12C", "#F5CD19", "#EA4228"]}
      percent={averageRating}
      arcPadding={0.02}
      cornerRadius={1}
      hideText={true}
    />
  );
};

export default Rating;
