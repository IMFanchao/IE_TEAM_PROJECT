//@ Finlay JS
$(document).ready(function(){
	var num_ac = 1
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
			switch(typeofac){
				case 0:
					break;
				case 1:
					ac_value = ac_value + (3*num_hr);
					break;
				case 2:
					ac_value = ac_value + (2*num_hr);
					break;
				case 3:
					ac_value = ac_value + (2.5*num_hr);
					break;
			}

		}
		return ac_value;

	}


	$("#check").click(function(){
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
		$("p").text(score);
	})




})
//@ Finlay JS
