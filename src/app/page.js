"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import { Heading, Title } from "./components/atoms";
import Slider from "./components/Slider";
import { fetchShows } from "@/redux/reducers/shows";
import Rating from "./components/ShowsRating";
import Schedule from "./components/ShowsSchedule";
import ShowsGenres from "./components/ShowsGenres";

const Container = styled.div`
  .column {
    border: 1px solid #b7bfc8;
  }
`;

export default function Home() {
  const shows = useSelector((state) => state.shows.data);
  const loading = useSelector((state) => state.shows.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShows());
  }, []);

  return (
    <Container className="section">
      <div className="container">
        <Navbar />
        <Title title="Featured Shows" />
        {loading && <h1>Loading...</h1>}
        <Slider data={shows} />
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
    </Container>
  );
}
