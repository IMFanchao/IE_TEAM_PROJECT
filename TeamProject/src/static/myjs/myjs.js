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
    if (score<= 600) {
      ac_level = 1;
			$('#printLevel').text("Lack of exercise");
    }
    else if ((score>600) && (score<= 4000)) {
      ac_level = 2;
			$('#printLevel').text("Still need more exercise");
			$("#DI").text("14%");
			$("#CC").text("10%");
			$("#IHD").text("16%");
			$("#IS").text("16%");
    }
    else if ((score>4000) && (score<=8000)) {
      ac_level = 3;
			$('#printLevel').text("Well done, keep it");
			$("#DI").text("25%");
			$("#CC").text("17%");
			$("#IHD").text("23%");
			$("#IS").text("19%");
    }
    else if ((score>8000) && (score<=10000)){
      ac_level = 4;
			$('#printLevel').text("sufficient exercise");
			$("#DI").text("28%");
			$("#CC").text("21%");
			$("#IHD").text("25%");
			$("#IS").text("26%");
    }
    else {
      ac_level = 5;
			$('#printLevel').text("Excessive exercise may hurt the body");
			$("#DI").text("28%");
			$("#CC").text("21%");
			$("#IHD").text("25%");
			$("#IS").text("26%");
    }

		$('.chart').data('easyPieChart').update((score/10000)*100);
		var printValue = 0;
		if (((score/10000)*100)>100) {
			 printValue = 100;
		}
		else {
			 printValue = (score/10000)*100;
		}

		$('#precentage').text(printValue.toFixed(2));
	})
	//health_tips below

	function randomTips(maxLength) {

		var tips_index = parseInt(Math.random()*maxLength);
		return tips[tips_index];
	}

	$("#Home_page_health_tips").text(function(){
		var tips = ["Sugary drinks are the most fattening things you can put into your body.",
								"Despite being high in fat, nuts are incredibly nutritious and healthy.",
								"All the processed junk foods in the diet are the biggest reason the world is fatter and sicker than ever before.",
								"Coffee has been unfairly demonized. The truth is that it's actually very healthy.",
								"Pretty much everyone agrees that fish is healthy.",
								"The importance of getting enough quality sleep can not be overstated.",
								"The bacteria in your gut, collectively called the gut microbiota, are sometimes referred to as the forgotten organ.",
								"Drinking enough water can have numerous benefits.",
								"Meat can be a nutritious and healthy part of the diet. It is very high in protein, and contains various important nutrients.",
								"Back in the day, most people got their vitamin D from the sun.",
								"Vegetables and fruits are the default health foods, and for good reason.",
								"Eating enough protein is incredibly important, and many experts believe that the recommended daily intake is too low.",
								"Doing aerobic exercise (or cardio) is one of the best things you can do for your mental and physical health.",
								"If you're a tobacco smoker, or abuse drugs, then diet and exercise are the least of your worries. Tackle those problems first.",
								"Extra virgin olive oil is the healthiest fat on the planet.",
								"Added sugar is the single worst ingredient in the modern diet.",
								"Don't Eat a Lot of Refined Carbohydrates",
								"The war on saturated fat was a mistake.",
								"Lifting weights is one of the best things you can do to strengthen your body and improve your body composition.",
								"Artificial trans fats are harmful, man-made fats that are strongly linked to inflammation and heart disease."];
		var tips_index = parseInt(Math.random()*tips.length);
		return tips[tips_index];
	})
})
//@ Finlay JS
