import styled from "styled-components";

const Container = styled.div`
  .progress {
    height: 0.5rem;
  }
`;

const Schedule = ({ shows }) => {
  const showCounts = {
    Sunday: 0,
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
  };

  // Getting shows from each day
  shows.forEach((item) => {
    item.show.schedule.days.forEach((day) => {
      showCounts[day] += 1;
    });
  });

  // Create an array of objects for each day with show counts
  const result = Object.keys(showCounts).map((day) => ({
    day,
    showCount: showCounts[day],
  }));
  return (
    <Container>
      {result?.map((item, index) => {
        return (
          <div key={index} className="pb-3">
            <p>{item.day}</p>
            <progress
              class="progress is-warning"
              value={item.showCount}
              max="10"
            ></progress>
          </div>
        );
      })}
    </Container>
  );
};

export default Schedule;
