import React from 'react';

const ListElement = (props) => {
  
  return <li><span style={{color: "blue"}} >{props.data.title}</span><br /> <span>{props.data.body}</span></li>;
};

export default ListElement;
