import React from "react";

export const ACTION = {
  FEED: "Feed",
  SEND_MONEY: "Send money"
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
        <ActionButton action={ACTION.SEND_MONEY} />
      </li>
    </ul>
  );
};
