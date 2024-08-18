// reuseable function niche ache
document.getElementById('triangle-btn').addEventListener('click', function(){
    // var base = document.getElementById('triangle-base');
    // var baseValueStr = base.value;
    // var baseValueNum = parseFloat(baseValueStr);
    // base.value = '';
    var triangleBase = getInputValue('triangle-base')
    // var height = document.getElementById('triangle-height');
    // var heightValueStr = height.value;
    // var heightValueNum = parseFloat(heightValueStr);
    // height.value = '';
    var triangleHeight = getInputValue('triangle-height')
    // var area = .5 * baseValueNum * heightValueNum;
    var area = .5 * triangleBase * triangleHeight;
    area = area.toFixed(2);
    var resultField = document.getElementById('result');
    resultField.innerText = 'Triangle Area=' + '' + area;
  })

    //rectangle area
    document.getElementById('rectangle-btn').addEventListener('click', function(){
         var rectangleWidth = getInputValue('rectangle-width');
         var rectangleLength = getInputValue('rectangle-length');
         var area =rectangleWidth * rectangleLength;
         area = area.toFixed(2);
         var resultField = document.getElementById('result');
         resultField.innerText = 'Rectangle Area=' + '' + area;
    })
    //parallelogram area
    document.getElementById('parallelogram-btn').addEventListener('click', function(){
         var parallelogramBase = getInputValue('parallelogram-base');
         var parallelogramHeight = getInputValue('parallelogram-height');
         var area =parallelogramBase * parallelogramHeight;
         area = area.toFixed(2);
         var resultField = document.getElementById('result');
         
         resultField.innerText = 'Parallelogram Area=' + '' + area;
    })



// reuseable function
function getInputValue(inputId){
    var inputField = document.getElementById(inputId);
    var inputValueStr = inputField.value;
    var value = parseFloat(inputValueStr);
    inputField.value = '';
    return value;
}