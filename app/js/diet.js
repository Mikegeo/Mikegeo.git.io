
var diet=(function(){
	var navList;
	var contentDiv;
	var nameHeading;
	var breakfastLi;
	var lunchLi;
	var preworkoutLi;
	var afterworkoutLi;
	var dinnerLi;
	function createHandler(day)
	{
		return function(){
			ajax.makeRequest("../data/"+day.id+".json",displayDayDetails);
		}
	}
	function displayDayDetails(day)
	{
		contentDiv.classList.remove("hide");
		navList.classList.add("hide");
		nameHeading.innerHTML=day.name;
		breakfastLi.innerHTML=day.breakfast;
		lunchLi.innerHTML=day.lunch;
		preworkoutLi.innerHTML=day.preworkout;
		afterworkoutLi.innerHTML=day.afterworkout;
		dinnerLi.innerHTML=day.dinner;
	}

	function populateList(days)
	{
		navList=document.getElementById("nav");

		days.forEach(function(day){

			var newLi=document.createElement("li");
			newLi.innerHTML=day.name;
		    newLi.addEventListener("click", createHandler(day), false)
			navList.appendChild(newLi);
		})
	}
	function backToList(){
		contentDiv.classList.add("hide");
		navList.classList.remove("hide");
	}
	function init(){
		navList=document.getElementById("nav");

		contentDiv=document.getElementById("content");
		nameHeading=document.getElementById("name");
		breakfastLi=document.getElementById("breakfast");
		lunchLi=document.getElementById("lunch");
		preworkoutLi=document.getElementById("preworkout");
		afterworkoutLi=document.getElementById("afterworkout");
		dinnerLi=document.getElementById("dinner");
		ajax.makeRequest("../data/days.json",populateList);
		backBtn=document.getElementById("backBtn");
		backBtn.addEventListener("click", backToList, false)
	}
	return{
		init:init
	}
})();

diet.init();

function GenerateTable() {
  //Build an array containing Food records.
  var food = new Array();
  food.push(["Meal No.", "Name"]);
  food.push([1, "Protein shake"]);
  food.push([2, "6 Egg whites",]);
  food.push([3, "Omelate"]);
  food.push([4, "Oats with almonds"]);

  //Create a HTML Table element.
  var table = document.createElement("TABLE");
  table.border = "1";

  //Get the count of columns.
  var columnCount = food[0].length;

  //Add the header row.
  var row = table.insertRow(-1);
  for (var i = 0; i < columnCount; i++) {
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = food[0][i];
      row.appendChild(headerCell);
  }

  //Add the data rows.
  for (var i = 1; i < food.length; i++) {
      row = table.insertRow(-1);
      for (var j = 0; j < columnCount; j++) {
          var cell = row.insertCell(-1);
          cell.innerHTML = food[i][j];
      }
  }

  var dvTable = document.getElementById("dvTable");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
}

  function GenerateTable1() {
      //Build an array containing food records.
      var food = new Array();
      food.push(["Meal No.", "Name"]);
      food.push([1, "Chicken breast with rice"]);
      food.push([2, "Pork chop with rice",]);
      food.push([3, "Salmon with pasta"]);
      food.push([4, "Tuna with salad"]);

      //Create a HTML Table element.
      var table = document.createElement("TABLE");
      table.border = "1";

      //Get the count of columns.
      var columnCount = food[0].length;

      //Add the header row.
      var row = table.insertRow(-1);
      for (var i = 0; i < columnCount; i++) {
          var headerCell = document.createElement("TH");
          headerCell.innerHTML = food[0][i];
          row.appendChild(headerCell);
      }

      //Add the data rows.
      for (var i = 1; i < food.length; i++) {
          row = table.insertRow(-1);
          for (var j = 0; j < columnCount; j++) {
              var cell = row.insertCell(-1);
              cell.innerHTML = food[i][j];
          }
      }

      var dvTable = document.getElementById("dvTable");
      dvTable.innerHTML = "";
      dvTable.appendChild(table);
  }
