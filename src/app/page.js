"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GaugeChart from "react-gauge-chart";
import { Chart } from "react-google-charts";

import Navbar from "./components/Navbar";
import { Title } from "./components/atoms";
import Slider from "./components/Slider";
import { fetchShows } from "@/redux/reducers/shows";
export default function Home() {
  const shows = useSelector((state) => state.shows.data);
  const loading = useSelector((state) => state.shows.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShows());
  }, []);

  console.log("shows", shows);

  // Filter the objects with the specific 'name' you want to calculate the average for

  // Calculate the sum of ratings
  const sumOfRatings = shows.reduce(
    (total, item) => total + item.show.rating.average,
    0
  );

  // Calculate the average rating
  const averageRating = sumOfRatings / shows.length;

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
  ];

  const options = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div className='"section'>
      <div className="container">
        <Navbar />
        <Title title="Featured Shows" />
        {loading && <h1>Loading...</h1>}
        <Slider data={shows} />

        <Title title="Metrics" />
        <div className="columns">
          <div className="column">
            <GaugeChart
              id="gauge-chart5"
              // nrOfLevels={420}
              // arcsLength={[0.3, 0.5, 0.2]}
              // colors={["#5BE12C", "#F5CD19", "#EA4228"]}
              // percent={0.37}
              // arcPadding={0.02}
              nrOfLevels={300}
              arcsLength={[1, 2, 3, 4, 4, 5, 6, 7, 8, 10]}
              colors={["#5BE12C", "#F5CD19", "#EA4228"]}
              percent={averageRating}
              arcPadding={0.02}
              cornerRadius={1}
              hideText={true}
            />
          </div>
          <div className="column">
            <p>Sunday</p>
            <progress class="progress is-warning" value="15" max="100">
              15%
            </progress>

            <p>Sunday</p>
            <progress class="progress is-warning" value="15" max="100">
              15%
            </progress>

            <p>Sunday</p>
            <progress class="progress is-warning" value="15" max="100">
              15%
            </progress>
            <p>Sunday</p>
            <progress class="progress is-warning" value="15" max="100">
              15%
            </progress>
            <p>Sunday</p>
            <progress class="progress is-warning" value="15" max="100">
              15%
            </progress>
            <p>Sunday</p>
            <progress class="progress is-warning" value="15" max="100">
              15%
            </progress>
            <p>Sunday</p>
            <progress class="progress is-warning" value="15" max="100">
              15%
            </progress>
          </div>
          <div className="column">
            {" "}
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
