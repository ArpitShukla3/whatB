"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, Button, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { updatePercentile, updateRank, updateScore } from "../GlobalRedux/Features/Scores/scoresSlice";
import { RootState } from "../GlobalRedux/store";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rank, setRank] = React.useState(useSelector((state:RootState)=>state.ScoreReducer.rank));
  const [percentile, setPercentile] = React.useState(useSelector((state:RootState)=>state.ScoreReducer.percentile));
  const [score, setScore] = React.useState(useSelector((state:RootState)=>state.ScoreReducer.score));

  const handleRankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRank = Number(e.target.value);
    if (!isNaN(newRank)) {
      setRank(newRank);
    }
  };

  const handlePercentileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPercentile = Number(e.target.value);
    if (!isNaN(newPercentile)) {
      setPercentile(newPercentile);
    }
  };

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newScore = Number(e.target.value);
    if (!isNaN(newScore)) {
      setScore(newScore);
    }
  };
  const dispatch = useDispatch();
  function SubmitData()
  {
    if(rankError || percentileError || scoreError)
      {
        return;
      }
      dispatch(updatePercentile(percentile));
      dispatch(updateRank(rank));
      dispatch(updateScore(score));
      handleClose();
  }
  const rankError = rank > 10 || rank <= 0;
  const percentileError = percentile >= 100 || percentile < 0;
  const scoreError = score > 15 || score < 0;

  return (
    <div>
      <Button variant="contained" sx={{ backgroundColor: "#132278" }} onClick={handleOpen}>
        Update
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Update Scores</h1>
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ color: "#ff9500" }}
                className="h-8"
              />
            </div>
            <div className="flex justify-between items-center">
              <Typography variant="h6">Update your Rank</Typography>
              <TextField
                variant="outlined"
                value={rank}
                onChange={handleRankChange}
                error={rankError}
                helperText={rankError ? "Enter a value between 1 and 10" : ""}
              />
            </div>
            <div className="flex justify-between items-center">
              <Typography variant="h6">Update your Percentile</Typography>
              <TextField
                variant="outlined"
                value={percentile}
                onChange={handlePercentileChange}
                error={percentileError}
                helperText={percentileError ? "Enter a value below 100" : ""}
              />
            </div>
            <div className="flex justify-between items-center">
              <Typography variant="h6">
                Update your Current Score (out of 15)
              </Typography>
              <TextField
                variant="outlined"
                value={score}
                onChange={handleScoreChange}
                error={scoreError}
                helperText={scoreError ? "Enter a value below 15" : ""}
              />
            </div>
            <div className="w-[100%] justify-self-end">
              <Button variant="outlined" onClick={handleClose}>Cancel</Button>
              <Button variant="contained" onClick={SubmitData}> Submit</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
