import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const paginate = (event, page) => {
    setCurrentPage(page);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
