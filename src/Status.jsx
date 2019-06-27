import React from "react";

const STATUS = {
  IDLE: "https://media.giphy.com/media/mlvseq9yvZhba/200w_d.gif"
};

export default ({ status = STATUS.IDLE }) => (
  <>
    <h2>Status:</h2>
    <img src={status} />
  </>
);
