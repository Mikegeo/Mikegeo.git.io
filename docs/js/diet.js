
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
			ajax.makeRequest("../docs/data/"+day.id+".json",displayDayDetails);
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
		ajax.makeRequest("../docs/data/days.json",populateList);
		backBtn=document.getElementById("backBtn");
		backBtn.addEventListener("click", backToList, false)
	}
	return{
		init:init
	}
})();

diet.init();
