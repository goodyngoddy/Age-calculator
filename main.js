// get input elements from the dom
let daysInput = document.querySelector('#day-input')
let monthInput = document.querySelector('#month-input')
let yearInput = document.querySelector('#year-input')

let inputs = document.querySelectorAll('input')
// det display element fron the dom
let daysValue = document.querySelector('#day-value')
let monthValue = document.querySelector('#month-value')
let yearValue = document.querySelector('#year-value')

let errorMsg = document.querySelectorAll('.error')
let errorMsgAll = document.querySelector('.error-section')

let btn = document.querySelector('.svg-btn')



// get  current date values

let currentYear = new Date().getFullYear()
let currentMonth = new Date().getMonth() + 1
let currentDay = new Date().getDate()

let yearInputValue, monthInputValue, daysInputValue
let yearNum, monthNum, dayNum
let yearCount, monthCount, dayCount
let monthDays
let errorBool

function getInput() {
  yearInputValue = Number(yearInput.value)
  monthInputValue = Number(monthInput.value)
  daysInputValue = Number(daysInput.value)
  console.log('year' + yearInputValue, 'month' + monthInputValue, 'day' + daysInputValue)
  return yearInputValue, monthInputValue, daysInputValue
}

function errorCheck() {
  let dateObj = new Date(yearInput.value+'/'+monthInput.value+'/'+daysInput.value)
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      errorMsg[i].textContent = 'This Field is Required'
      errorBool = true
    } else if (Number(inputs[i].value) === NaN) {
      errorMsg[i].textContent = 'Invalid Input'
      errorBool = true
    } else {
      errorBool = false
    }
  } 
  if (isNaN(dateObj)) {
    errorMsg[0].textContent = 'Invalid Date Format'
    errorBool = true
  } else {
    errorBool = false
  }
  console.log(errorBool)
  return errorBool
}

function getAge() {
  getInput()
  monthDays = new Date(yearInputValue, monthInputValue, 0).getDate()
  if (currentMonth < monthInputValue) {
    yearNum = currentYear - yearInputValue - 1
    monthNum = 12 - monthInputValue + currentMonth
  } else {
    yearNum = currentYear - yearInputValue
    monthNum = currentMonth - monthInputValue
  }
  if (currentDay < daysInputValue) {
    daysNum = monthDays - daysInputValue + currentDay
  } else {
    daysNum = currentDay - daysInputValue
 }
 return yearNum, monthNum, daysNum
}

function countdown() {
  getAge()
  console.log(yearNum + 'years', monthNum + 'months', daysNum + 'days')
  yearCount = 0
  monthCount = 0
  daysCount = 0
  
  let count1 = setInterval(function() {
    yearValue.textContent = yearCount
    if (yearCount == yearNum) {
      yearValue.textContent = yearNum
    } else {
      yearCount++
    }
  }, 100)
  let count2 = setInterval(function() {
    monthValue.textContent = monthCount
    if (monthCount == monthNum) {
      monthValue.textContent = monthNum
    } else {
      monthCount++
    }
  }, 100)
  let count3 = setInterval(function() {
    daysValue.textContent = yearCount
    if (daysCount == daysNum) {
      daysValue.textContent = daysNum
    } else {
      daysCount++
    }
  }, 100)
}

btn.addEventListener('click', () => {
  errorCheck()
  if (!errorBool) {
    countdown()
  }
})




