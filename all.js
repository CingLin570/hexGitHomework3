// js feature 1
for(let i = 3; i < 16; i++){
    for(let j = 1; j < 16; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
// js feature 2
function getBmi (h, w) {
    let BMI = (w/(h/100*h/100)).toFixed(2);
    console.log(BMI);
}
getBmi(176, 72);
