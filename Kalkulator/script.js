//Definisikan Variable untuk melakukan kalkulasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
//Perbarui layar saat tombol angka di tekan
const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })      
})

const inputOperator = (operator) => {
    // perbarui variable prevNumber hanya saat tombol operator diklik terlebih dahulu.
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}



const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//Tambahkan click event ke tombol sama-dengan (=)
//Jalankan Function Calculate saat tombol sama-dengna (=) di Klik
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

//Definisikan function Calculation
const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
            //Fungsi Penambahan tidak bekerja karena angka-angka tersimpan sebagai string
            // result = parseInt(prevNumber) + parseInt(currentNumber) ==== Integer
            result = parseFloat(prevNumber) + parseFloat(currentNumber) //==== FLoat
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break                        
    }
    //Simpan hasil Kalkulasi ke currentNumber
    currentNumber = result
    calculationOperator = ''
}

//Ambil Element Button dan tambahkan Click Event
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    // jalankan Function clearAll
    clearAll()
    updateScreen(currentNumber)
})
//Definisikan Function clearAll
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
//Tambahkan Click Event ke element <button>
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', () => {
    //jalankan Function inputDecimal
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
//Definisikan Function inputDecimal
inputDecimal = (dot) => {
    //Mencegah peng-inputan titik desimal berulang kali
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}