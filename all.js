// js feature 1 印出乘法表，從 3~15，從 3x1、3x2~一直到 15x15
for(let i = 3; i < 16; i++){
    for(let j = 1; j < 16; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
// js feature 2 請建立一個 BMI 函式，裡頭有兩個參數(身高,體重)，執行時會印出對應 BMI，並取小數點後一位。
function getBmi (h, w) {
    let BMI = (w/(h/100*h/100)).toFixed(1);
    console.log(BMI);
}
getBmi(176, 72);
// js feature 3 請用 for 迴圈，1 加到 10，最後用 console 印出總數
for(let i = 1; i < 11; i++){
    console.log(i);
}