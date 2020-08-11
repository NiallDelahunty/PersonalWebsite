import React from "react";

const Body = (props) => (
  <div>
    <p>{props.text}</p>
    <p>{props.myFunc(3, 4)}</p>
  </div>
);

export default Body;

// OR

// export default (props) => (
//   <div>
//     <p>{props.text}</p>
//     <p>{props.myFunc(3, 4)}</p>
//   </div>
// );

// Can write more functions and export them when importing:
// import Body, {Body2} from
// With second import need to specifically export and import a specific name
