function show(array) {
    var html = '';
    html = html + '<table border="1">';
    html = html + '<tr>';
    for (var i = 0; i < array.length; i++) {
        html = html + '<td>' + array[i] + '</td>';
    }
    html = html + '</tr>';
    html = html + '</table>';
    //document.getElementById('res').innerHTML = html;
    document.getElementById('res').insertAdjacentHTML('beforeend', html);
}

function createSequentialNumbers(array, n){
    var x = 1;
    for(var j = 0; j < n; j++){
        array.push(x);
        console.log(array[x]);
        x = x + 1;
    }
}

function createRandomNumbers(array, n){
    for(var i = 0; i < n; i++){
         var x = Math.round(Math.random()*100);
         array.push(x);
         console.log(array[x]);
    }
}