//conversions are based on kelvins, kelvin is a const variable throughout the script
const kelvin = 293

//print kelvin statement
console.log('The temperature is ' + kelvin + ' degrees Kelvin.')

//celsius is 273 degress less than kelvins - calcuate conversion below by subtracting and saving a new variable
var celsius = kelvin - 273
//print celsius statement
console.log('The temperature is ' + celsius + ' degrees Celsius.')

//fahrenheit conversion = celsius * (9/5) + 32
var fahrenheitConvert = celsius * (9/5) + 32
//Math.floor to round to whole number and save to new variable
var fahrenheit = Math.floor(fahrenheitConvert)

//print fahrenheit statement 
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.')
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
