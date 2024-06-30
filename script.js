function multiplication_table(){
    var value = parseFloat(document.getElementById("value").value)
    if(isNaN(value)){
      document.getElementById('result').innerHTML = "Coloque algum número por favor!"
    } 
    else {
      var result = ''
      for (var i = 1; i <= 10; i++){
          result += value + " x " + i + " = " + (value * i) + "<br>";
      }
      document.getElementById('result').innerHTML = result
    }
}









