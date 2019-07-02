import React from "react";
import { SingleSpaContext } from "single-spa-react";

export const ACTION = {
  FEED: "Feed",
  PAY: "Pay"
};

export default ({ onSelectAction = () => { } }) => {
  const ActionButton = ({ action }) => {
    const handleActionButtonClick = () => onSelectAction(action);
    return (
      <button onClick={handleActionButtonClick} style={{ fontSize: "2rem" }}>
        {action}
      </button>
    );
  };

  return (
    <ul>
      <li>
        <ActionButton action={ACTION.FEED} />
      </li>
      <li>
        <ActionButton action={ACTION.PAY} />
      </li>
      <li>
        <SingleSpaContext.Consumer>
          {({ history }) => <button onClick={() => history.push('/dog/feed')}>Feed dog</button>}
        </SingleSpaContext.Consumer>
      </li>
    </ul>
  );
};
