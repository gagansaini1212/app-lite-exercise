import { Chart } from "react-google-charts";

const ShowsGenres = ({ shows }) => {
  const options = {
    title: "",
    pieHole: 0.7,
    is3D: false,
    legend: "none",
    pieSliceText: "none",
  };

  // Create an object to store genre counts
  const genreCounts = {};

  // Count the genres
  shows.forEach((item) => {
    item.show.genres.forEach((genre) => {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
  });

  // Convert genreCounts object to an array of objects
  const genreCountsArray = Object.keys(genreCounts).map((genre) => ({
    genre,
    count: genreCounts[genre],
  }));

  // Sort the genreCountsArray by count in descending order
  genreCountsArray.sort((a, b) => b.count - a.count);

  // Get the top 5 genres
  const top5Genres = genreCountsArray.slice(0, 5);
  console.log("top5Genres", top5Genres);

  const data = top5Genres?.map((item) => [item.genre, item.count]);
  data.unshift(["Task", "Hours per Day"]);

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
export default ShowsGenres;
