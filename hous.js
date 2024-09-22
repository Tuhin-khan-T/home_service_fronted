
// const loadData = () => {
//   fetch('https://homeess.onrender.com/services/')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();  // assuming the API returns JSON data
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// };
// loadData();





const loadData = (global) =>{
    
    fetch('https://homeess.onrender.com/services/')
    .then((res) => res.json())
    .then((data) =>displayData(data));
};



const displayData = (data) =>{


    const mels = document.getElementById("meals-contanir");
   
    

data.forEach((meal) => {
    console.log(meal);
    const card = document.createElement("div");
          card.classList.add("box");
    card.innerHTML=`
       
       <img class="box-img" src="${meal.image}" alt="">
        <h2>${meal.name}</h2>
        <p>${meal.description.slice(0,30)}</p>


        
    `;
    mels.appendChild(card)
    
});

};




loadData();