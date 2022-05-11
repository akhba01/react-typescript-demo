import React from "react";
type GreetProps = {
  name: string;
  messageCount?: number;
  IsLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props; 
  return (
    <div>
      <h2>
        {props.IsLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread message`
          : `Hello Guest`}
      </h2>
    </div>
  );
};
