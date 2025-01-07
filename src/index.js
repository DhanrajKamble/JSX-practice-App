//****************** Inline Styling for React Elements ******************/



import React from "react";
import ReactDOM from "react-dom/client";

const customStyle = {
  color: "green",
  fontSize: "30px",
  border: "2px solid yellow"
};

customStyle.color = "blue";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 style = {customStyle}>
      Hello World???????
    </h1>
    {/* <h1 style = {{color: "yellow"}}>
      Hello World???????
    </h1> */}
  </>
)






/////***************JSX attributes and Styling React Elements ********************/


// import React from 'react';
// // for concurrent rendering of the component in React@18
// import ReactDOM from 'react-dom/client'; // Update the import

// const img = "https://picsum.photos/200";

// const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
// root.render(
//   <>
//   <h1 className="heading" contentEditable="true" spellCheck="false">
//   Hello World!
//   </h1>
//   <div>
//     <img className='car-images' src='https://www.kbb.com/wp-content/uploads/2022/08/2022-mercedes-amg-eqs-front-left-3qtr.jpg?w=918'></img>
//     <img className='car-images' src='https://wallpapers.com/images/high/blue-bmw-driving-through-the-mountains-3kx8ei08bj7s4g1a.webp'></img>
//     <img className='car-images' src='https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?impolicy=resize&imwidth=480'></img>
//     <img className='car-images' src={img} />
//   </div>
//   </>
// );
