var xs = document.querySelector(".xs .row");
var sm = document.querySelector(".sm .row");
var md = document.querySelector(".md .row");
var lg = document.querySelector(".lg .row");
var xl = document.querySelector(".xl .row");

var inputs = document.getElementsByTagName("input");

var colXS = new RegExp(/(col\-[0-9]+)\b/g)
var colOther = new RegExp(/(col\-[a-z]+\-[0-9]+)\b/g)
var tempArray = [];
var newColXS = "";
var newColSM = "";
var newColMD = "";
var newColLG = "";
var newColXL = "";

function interpret() {

	for(var i = 0; i < inputs.length; i++) {

		newColXS = "\<div class\=\'col-12\'\/\>";
		newColSM = "\<div class\=\'col-12\'\/\>";
		newColMD = "\<div class\=\'col-12\'\/\>";
		newColLG = "\<div class\=\'col-12\'\/\>";
		newColXL = "\<div class\=\'col-12\'\/\>";

		if(inputs[i].value != '') {
			console.log("value " + inputs[i].value)
			// inputs[i].value = inputs[i].value.match(colXS)[0]
			tempArray = inputs[i].value.split(" ");
			console.log("array " + tempArray)
			for(var k = 0; k < tempArray.length; k++) {


				if(colXS.test(tempArray[k]) == true) {
					newColXS = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					newColSM = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					newColMD = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					newColLG = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
				}
				if(colOther.test(tempArray[k]) == true) {
					if(tempArray[k].includes("-xs-") == true) {
						tempArray[k] = tempArray[k].replace("-xs-", "-");
						newColXS = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColSM = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColMD = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColLG = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					}
					if(tempArray[k].includes("-sm-") == true) {
						tempArray[k] = tempArray[k].replace("-sm-", "-");
						newColSM = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColMD = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColLG = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					}
					if(tempArray[k].includes("-md-") == true) {
						tempArray[k] = tempArray[k].replace("-md-", "-");
						newColMD = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColLG = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					}
					if(tempArray[k].includes("-lg-") == true) {
						tempArray[k] = tempArray[k].replace("-lg-", "-");
						newColLG = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					}
					if(tempArray[k].includes("-xl-") == true) {
						tempArray[k] = tempArray[k].replace("-xl-", "-");
						newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					}
				}
				// else {
				// 	console.log(tempArray[k])
				// 	sm.innerHTML = sm.innerHTML + "\<div class\=\'" + tempArray[k] + "\'\/\>";
				// 	md.innerHTML = md.innerHTML + "\<div class\=\'" + tempArray[k] + "\'\/\>";
				// 	lg.innerHTML = lg.innerHTML + "\<div class\=\'" + tempArray[k] + "\'\/\>";
				// 	xl.innerHTML = xl.innerHTML + "\<div class\=\'" + tempArray[k] + "\'\/\>";
				// }
				
				colXS.lastIndex = 0;
				colOther.lastIndex = 0;
			}
			xs.innerHTML = xs.innerHTML + newColXS
			sm.innerHTML = sm.innerHTML + newColSM
			md.innerHTML = md.innerHTML + newColMD
			lg.innerHTML = lg.innerHTML + newColLG
			xl.innerHTML = xl.innerHTML + newColXL

			newColXS = "";
			newColSM = "";
			newColMD = "";
			newColLG = "";
			newColXL = "";

		}

	}

}