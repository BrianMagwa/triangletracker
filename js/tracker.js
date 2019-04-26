function validate(){
    var a = parseInt(document.getElementById("fname").value);
    var b = parseInt(document.getElementById("lname").value);
    var c = parseInt(document.getElementById("tname").value);

    if (a+b<=c || a+c<=b || b+c<=a) {
        document.getElementById("answer").innerHTML='This cannot form a triangle.';
    }   else if(a === b && a === c && b === c){
        document.getElementById("answer").innerHTML='Equilateral: All sides are equal!';
        }   
        else if(a === b || a === c || b === c){
            document.getElementById("answer").innerHTML='Isosceles: Two sides are equal!';
        }
        else if (a !== b && b !== c && a !== c ) {
            document.getElementById("answer").innerHTML='Scalene: No equal sides!';
        }
}