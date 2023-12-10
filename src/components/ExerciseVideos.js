import React from "react";
import { Stack, Box, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (exerciseVideos === undefined || !exerciseVideos.length)
    return (
      <Typography fontWeight="bold" variant="h3">
        Loading...
      </Typography>
    );

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
      <Typography variant="h3" mb="43px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        flexWrap="wrap"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0px" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
