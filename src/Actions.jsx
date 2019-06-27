import React from "react";

export const ACTION = {
  FEED: "Feed",
  PAY: "Pay"
};

export default ({ onSelectAction = () => {} }) => {
  const ActionButton = ({ action }) => {
    const handleActionButtonClick = () => onSelectAction(action);
    return <button onClick={handleActionButtonClick}>{action}</button>;
  };

  return (
    <ul>
      <li>
        <ActionButton action={ACTION.FEED} />
      </li>
      <li>
        <ActionButton action={ACTION.PAY} />
      </li>
    </ul>
  );
};
