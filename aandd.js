function show(obj) {
    if (Array.isArray(obj)) {
        var html = '';
        html = html + '<table border="1">';
        html = html + '<tr>';
        for (var i = 0; i < obj.length; i++) {
            html = html + '<td>' + obj[i] + '</td>';
        }
        html = html + '</tr>';
        html = html + '</table>';
        //html = html + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', html);
    } else {
        var string = JSON.stringify(obj);
        string = string + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', string);
    }
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
        console.log(x);
    }
}
function createTenRandomNumbers(array, n){
    for(var i = 0; i < n; i++){
        var x = Math.round(Math.random()*10);
        array.push(x);
        console.log(x);
    }
}