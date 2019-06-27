import React, { useState } from "react";

import Actions, { ACTION } from "./Actions";
import Status, { STATUS } from "./Status";

const ACTION_STATUS = {
  [ACTION.FEED]: STATUS.FULL,
  [ACTION.SEND_MONEY]: STATUS.RICH
};

export default () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const handleSelectAction = action => {
    setStatus(ACTION_STATUS[action]);
    setTimeout(() => {
      setStatus(STATUS.IDLE);
    }, 1500);
  };
  return (
    <>
      <h1>Cat!</h1>
      <Status status={status} />
      <Actions onSelectAction={handleSelectAction} />
    </>
  );
};
