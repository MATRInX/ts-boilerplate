import React, { SFC } from 'react';

export interface GreeterProps {
  name?: string
};

export const Greeter: SFC<GreeterProps> = (props) => {
  const { name } = props;
  return (
    <div>
      Hello {name} in world of typescript!
    </div>
  );
}

export default Greeter;