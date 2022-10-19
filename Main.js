var GuestName = document.getElementById("name1").value;
namesOfPeaple.push(GuestName);
namesOfPeaple.sort();
function searching(){
    var s= document.getElementById("s1").value;
    var found = 0;
    var j;
    for(j=0; j=namesOfPeaple.lenght; j++)
     {
        if(s==namesOfPeaple[j]){
            found = found+1;
        }
     }
     document.getElementById("p2").innerHTML="NomeEncontrado"+found+"vez(es)";
     console.log("NomeEncontrado"+found+"vez(es)");
}