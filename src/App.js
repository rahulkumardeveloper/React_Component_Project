import React from 'react';



//let ct = new Date(2021, 10, 31, 20); for checking time result
let ct = new Date();
ct = ct.getHours();
let result = " ";
let cssStyle = {};
if (ct >= 1 && ct < 12) {
  result = "Good Morning";
  cssStyle.color = "green";
} else if (ct >= 12 && ct < 19) {
  result = "Good Evening";
  cssStyle.color = "yellow";
}
else {
  result = "Good Night";
  cssStyle.color = "black";
}

function App(){
    return(
        <div id="div">
        <h1 id="heading">Hello Sir !<span style={cssStyle}> {result}</span></h1>
        </div>
    )
}
export default App;