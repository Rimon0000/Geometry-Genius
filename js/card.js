//function get input field value 
function getInputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value ;
    const inputValue = parseFloat(inputString);
    inputField.value = "";
    return inputValue;
}

//function get text field value
function getTextFieldValue(textId){
    const textField = document.getElementById(textId);
    const textValueString = textField.innerText;
    const textValue = parseFloat(textValueString);
    return textValue;
}

//addEventListener for triangle
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleBValue =  getInputFieldValue('triangle-b-field')
    const triangleHValue = getInputFieldValue('triangle-h-field');
    //calculate
    const triangle = 0.5 * triangleBValue * triangleHValue;
    console.log(triangle)
})

//addEventListener for rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleWValue = getInputFieldValue('rectangleWField')
    const rectangleLValue = getInputFieldValue('rectangleLField')
    //calculate area
    const rectangle = rectangleWValue * rectangleLValue;
    console.log(rectangle)
})

//addEventListener for Parallelogram
document.getElementById('btn-Parallelogram').addEventListener('click', function(){
    const ParaBValue = getTextFieldValue('bParallelogram')
    const ParaHValue = getTextFieldValue('hParallelogram')
    
    //calculate
    const Parallelogram = ParaBValue * ParaHValue;
    console.log(Parallelogram)
})

//addEventListener for Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const rhombusD1Value = getTextFieldValue('d1-rhombus');
    const rhombusD2Value = getTextFieldValue('d2-rhombus');

    //calculate
    rhombus = 0.5 * rhombusD1Value * rhombusD2Value;
    console.log(rhombus);
})

//addEventListener for Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const pentagonPValue = getTextFieldValue('p-pentagon');
    const pentagonBValue = getTextFieldValue('b-pentagon');

    //calculate
    const pentagon = 0.5 * pentagonPValue * pentagonBValue;
    console.log(pentagon);
})

//addEventListener for Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const ellipseAValue = getTextFieldValue('a-ellipse');
    const ellipseBValue = getTextFieldValue('b-ellipse');

    //calculate
    const ellipseValue = 3.14 * ellipseAValue * ellipseBValue;
    const ellipse = ellipseValue.toFixed(2)
    console.log(ellipse)
})





