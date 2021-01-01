calculate= () =>{
  var bill =Number(document.getElementById("total-bill").value);
  var people= Number(document.getElementById("total-no").value);
  var feedback= Number(document.getElementById("survey1").value);
  if (bill==0 || people==0){
    alert("One of the input is incomplete" );
  }
  else
  {
    if (people==1){
      document.getElementById("result").innerHTML="";
    }
    else
    {
      var value = (bill+(bill*feedback));
      var per_cost=value/people;
      document.getElementById("result").innerHTML = "\n"  +per_cost;
      document.getElementById("t_people").innerHTML= people;
      document.getElementById("show").style.display="flex";

    }
  }
}
