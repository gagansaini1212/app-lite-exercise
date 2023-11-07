"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Header from "./components/Header";
import { Title } from "./components/atoms";
import Slider from "./components/Slider";
import { fetchShows } from "@/redux/reducers/shows";
import ShowsStats from "./components/ShowsStats";

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
        <Header />
        <Title title="Featured Shows" />
        {loading && <h1>Loading...</h1>}
        <Slider data={shows} />
        <ShowsStats shows={shows} />
      </div>
    </Container>
  );
}
