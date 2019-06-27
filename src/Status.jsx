import React from "react";

export const STATUS = {
  IDLE: "https://media.giphy.com/media/mlvseq9yvZhba/200w_d.gif",
  FULL: "https://media.giphy.com/media/AwNGX4XvvODO8/giphy.gif",
  RICH: "https://media.giphy.com/media/cLLgfNJiKppgA/giphy-downsized.gif"
};

export default ({ status = STATUS.IDLE }) => (
  <>
    <h2>Status:</h2>
    <img src={status} />
  </>
);
