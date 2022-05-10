import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'


ReactDOM.render(
    <App />
    ,
    document.querySelector('#root')
)


// let progressBar = document.querySelectorAll('.shape')
// let valueContainer = document.querySelectorAll('.number')

// console.log(progressBar)
// valueContainer.forEach(each => {
//     console.log(each.innerHTML)
// })

// let progressValue = 0
// let progressEndValue1 = 35;
// let progressEndValue2 = 55;
// let progressEndValue3 = 70;
// let progressEndValue4 = 100;
// let speed = 50;

// let progress = setInterval(() => {
//     progressValue++;

//     // valueContainer.forEach(mov => {
//     //     mov.textContent = `${progressValue}`
//     // })

//     valueContainer.forEach(each => {
//         progressBar.forEach(mov => {

//             mov.style.background = `conic-gradient(
//                         #4d5bf9 ${progressValue * 3.6}deg,
//                         #F9D923 ${each.innerHTML * 3.6}deg
//                     )`;
//         })

//     })


//     if (progressValue === progressEndValue3) {
//         clearInterval(progress)
//     }

// }, speed);