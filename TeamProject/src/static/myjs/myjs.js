//@ Finlay JS
$(document).ready(function(){
	var num_ac = 1;
	$("#activity_list").on("click",".add_ac",function(){
		num_ac++
		// Determine if the user enters a valid value
		var select_option = $(this).parent().parent().find("select option:selected")[0].index;
		var hr = parseInt($(this).parent().parent().find("input").val());

		if ((select_option > 0) && (hr > 0)) {
			var temp = $("#ac_row_1").clone().attr({id:"ac_row_"+num_ac});
			temp.appendTo($("#activity_list"));
		}
		else{
			alert("Should input value");
		}
	})

	// Can't delete the first one
	$("#activity_list").on("click",".del_ac",function(){

		var row_id = $(this).parent().parent().attr("id");
		if (row_id !== "ac_row_1") {
			$(this).parent().parent().remove();
		}
		else{
			alert("Cannot remove Because This is the first row")
		}

	})

	function getAcList(ac){
		var tempAc = [];
		for (var i = 0; i <= ac.length-1; i++) {
			var acVal = parseInt(ac[i].value);
			tempAc.push(acVal);
		}
		return tempAc;
	}

	function getHrList(hr){
		var tempHr = [];
		for (var i = 0; i <= hr.length - 1; i++){
			var acHr = parseInt(hr[i].value);
			tempHr.push(acHr);
		}
		return tempHr;

	}

	function combineList(hrList, acList){
		var tempList = [];
		for (var i = 0; i <= acList.length -1; i++) {
			if (acList[i] !== 0) {
				tempList.push([acList[i],hrList[i]]);
			}
		}
		return tempList;
	}

	function calculateAcLevel(age_group, finalAcList){
		var ac_value = 0;
		for (var i = finalAcList.length - 1; i >= 0; i--) {
			var typeofac = finalAcList[i][0];
			var num_hr = finalAcList[i][1];
        ac_value = ac_value + (typeofac*num_hr*60)
			}
      return ac_value;
		}

	$("#check").click(function(){
		var printScore,acture_value;
    var ac_level = 0;
		var age_group = parseInt($("#selectAge").val());

		age_group = parseInt(age_group);
		// get object of activity
		var ac = $(".ac_row").find("select option:selected");
		// get object of hour
		var hr = $(".ac_row").find("input");

		var hrList = getHrList(hr);
		var acList = getAcList(ac);

		var finalAcList = combineList(hrList, acList);
		var score = calculateAcLevel(age_group, finalAcList);

		switch (age_group) {
			case 1:
				if (score<=6000) {
					printScore = (score/6000)*100;
					if (score < 600) {
						acture_value = 1;
					}
					else if(score >= 600 && score < 3000){
						acture_value = 2;
					}
					else {
						acture_value = 3;
					}
				}
				else if(score>6000 && score <8000){
					printScore = 100;
					acture_value = 4;
				}
				else {
					printScore = 200 - ((score/6000)*100);
					if (printScore < 60) {
						printScore = 20;
					}
					acture_value = 5;
				}

				break;
			case 2:
				if (score<=7000) {
					printScore = (score/7000)*100;
					if (score < 700) {
						acture_value = 1;
					}
					else if(score >= 700 && score < 3500){
						acture_value = 2;
					}
					else {
						acture_value = 3;
					}
				}
				else if(score>7000 && score <9000){
					printScore = 100;
					acture_value = 4;
				}
				else {
					printScore = 200-((score/7000)*100);
					if (printScore < 60) {
						printScore = 20;
					}
					acture_value = 5;
				}

				break;
			case 3:
				if (score<=8000) {
					printScore = (score/8000)*100;
					if (score < 800) {
						acture_value = 1;
					}
					else if(score >= 800 && score < 4000){
						acture_value = 2;
					}
					else {
						acture_value = 3;
					}
				}
				else if(score> 8000 && score < 10000){
					printScore = 100;
					acture_value = 4;
				}
				else {
					printScore = 200-((score/8000)*100);
					if (printScore < 60) {
						printScore = 20;
					}
					acture_value = 5;
				}

				break;
		}

		switch (acture_value) {
			case 1:
				$('#printLevel').text("Lack of exercise");

				break;
			case 2:
				$('#printLevel').text("Still need more exercise");
				$("#DI").text("14%");
				$("#CC").text("10%");
				$("#IHD").text("16%");
				$("#IS").text("16%");

				break;
			case 3:
				$('#printLevel').text("Well done, keep it");
				$("#DI").text("25%");
				$("#CC").text("17%");
				$("#IHD").text("23%");
				$("#IS").text("19%");

				break;
			case 4:
				$('#printLevel').text("sufficient exercise");
				$("#DI").text("28%");
				$("#CC").text("21%");
				$("#IHD").text("25%");
				$("#IS").text("26%");

				break;
			case 5:
				$('#printLevel').text("Excessive exercise may hurt the body");
				$("#DI").text("28%");
				$("#CC").text("21%");
				$("#IHD").text("25%");
				$("#IS").text("26%");

				break;
			default:

		}
		$('.chart').data('easyPieChart').update(printScore)
		$('#precentage').text(printScore.toFixed(2));
	})
	//health_tips below

	function randomTips(maxLength) {

		var tips_index = parseInt(Math.random()*maxLength);
		return tips[tips_index];
	}

	function randomDisplayHealthTips(){
		var tips = ["Sugary drinks are the most fattening things you can put into your body.",
								"Despite being high in fat, nuts are incredibly nutritious and healthy.",
								"All the processed junk foods in the diet are the biggest reason the world is fatter and sicker than ever before.",
								"Start the day with a healthy breakfast. It refuels the body and provides energy for the day.",
								"Pretty much everyone agrees that fish is healthy.",
								"The importance of getting enough quality sleep can not be overstated.",
								"Let kids help plan and prepare 1 meal each week.",
								"Drinking enough water can have numerous benefits.",
								"Eat together as a family as often as possible.",
								"Back in the day, most people got their vitamin D from the sun.",
								"Vegetables and fruits are the default health foods, and for good reason.",
								"Serve a variety of foods.",
								"Include physical activity in your daily routine. Walk as a family before or after meals.",
								"Make playtime with your family fun. Be active by shooting hoops or playing tag.",
								"Extra virgin olive oil is the healthiest fat on the planet.",
								"Added sugar is the single worst ingredient in the modern diet.",
								"Don't Eat a Lot of Refined Carbohydrates",
								"Include activities, such as hiking or biking, when you go on vacation.",
								"Know your daily calorie needs. Balance calories you consume with calories you burn.",
								"Artificial trans fats are harmful, man-made fats that are strongly linked to inflammation and heart disease."];
		var tips_index = parseInt(Math.random()*tips.length);
		return tips[tips_index];
	}
	$("#refreash").css("background","transparent").css("color","white").css("border", "none").css("float","right");
	$("#Home_page_health_tips").text(randomDisplayHealthTips());
	$("#tipsDiv").on("click","#refreash",function(){
		$("#Home_page_health_tips").text(randomDisplayHealthTips());
	})

})
//@ Finlay JS
