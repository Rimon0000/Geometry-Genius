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
//function get title
function getTitle(titleId){
    const titleField = document.getElementById(titleId);
    const titleElement = titleField.innerText;
    return titleElement;
}

//addEventListener for triangle
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleBValue =  getInputFieldValue('triangle-b-field')
    const triangleHValue = getInputFieldValue('triangle-h-field');
    //calculate
    const triangle = 0.5 * triangleBValue * triangleHValue;
      //get title
      const title = getTitle('title-triangle');

    //   create and set value
      const container = document.getElementById('table-container');
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${1}</td>
      <td>${title}</td>
      <td>${triangle}cm <sup>2</sup></td>
      `;
      container.appendChild(tr)

})

//addEventListener for rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleWValue = getInputFieldValue('rectangleWField')
    const rectangleLValue = getInputFieldValue('rectangleLField')
    //calculate area
    const rectangle = rectangleWValue * rectangleLValue;
    //get title
    const title = getTitle('title-rectangle');

    //   create and set value
      const container = document.getElementById('table-container');
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${2}</td>
      <td>${title}</td>
      <td>${rectangle}cm <sup>2</sup></td>
      `;
      container.appendChild(tr)
})

//addEventListener for Parallelogram
document.getElementById('btn-Parallelogram').addEventListener('click', function(){
    const ParaBValue = getTextFieldValue('bParallelogram')
    const ParaHValue = getTextFieldValue('hParallelogram')
    
    //calculate
    const Parallelogram = ParaBValue * ParaHValue;
    //get title
    const title = getTitle('title-parallelogram');

    //   create and set value
      const container = document.getElementById('table-container');
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${3}</td>
      <td>${title}</td>
      <td>${Parallelogram}cm <sup>2</sup></td>
      `;
      container.appendChild(tr)
    
})

//addEventListener for Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const rhombusD1Value = getTextFieldValue('d1-rhombus');
    const rhombusD2Value = getTextFieldValue('d2-rhombus');

    //calculate
    rhombus = 0.5 * rhombusD1Value * rhombusD2Value;
    //get title
    const title = getTitle('title-rhombus');

    //   create and set value
      const container = document.getElementById('table-container');
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${4}</td>
      <td>${title}</td>
      <td>${rhombus}cm <sup>2</sup></td>
      `;
      container.appendChild(tr)
})

//addEventListener for Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const pentagonPValue = getTextFieldValue('p-pentagon');
    const pentagonBValue = getTextFieldValue('b-pentagon');

    //calculate
    const pentagon = 0.5 * pentagonPValue * pentagonBValue;
     //get title
     const title = getTitle('title-pentagon');

     //   create and set value
       const container = document.getElementById('table-container');
       const tr = document.createElement("tr");
       tr.innerHTML = `
       <td>${5}</td>
       <td>${title}</td>
       <td>${pentagon}cm <sup>2</sup></td>
       `;
       container.appendChild(tr)
})

//addEventListener for Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const ellipseAValue = getTextFieldValue('a-ellipse');
    const ellipseBValue = getTextFieldValue('b-ellipse');

    //calculate
    const ellipseValue = 3.14 * ellipseAValue * ellipseBValue;
    const ellipse = ellipseValue.toFixed(2)
     //get title
     const title = getTitle('title-ellipse');

     //   create and set value
       const container = document.getElementById('table-container');
       const tr = document.createElement("tr");
       tr.innerHTML = `
       <td>${6}</td>
       <td>${title}</td>
       <td>${ellipse}cm <sup>2</sup></td>
       `;
       container.appendChild(tr)
})





