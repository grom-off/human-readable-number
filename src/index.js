module.exports = function toReadable (num) {
 let Units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let secondDecimal = ['twenty', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let othersDecimal = ['Error', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (num>=0 && num<=10 ){
        return Units[num];
    }

    if (num > 10 && num < 21){
    	return secondDecimal[num.toString()[1]];
    }

    if (num > 20 && num < 100){
    	if (num.toString()[1] == "0"){
    		return othersDecimal[num.toString()[0]];
    	} else {
    		return othersDecimal[num.toString()[0]] + " " + Units[num.toString()[1]];
    	}
    }

    if (num > 99 && num < 1000){
    	if (num.toString()[1] == "0" && num.toString()[2] == "0")
    		return Units[num.toString()[0]] + " hundred";
    	if (num.toString()[1] == "0")
            return Units[num.toString()[0]] + " hundred " + Units[num.toString()[2]];
        if (num.toString()[1] == "1" && num.toString()[2] == 0) 
            return Units[num.toString()[0]] + " hundred ten";
        if (num.toString()[1] == "1") 
            return Units[num.toString()[0]] + " hundred " + secondDecimal[num.toString()[2]]
    	if (num.toString()[2] == "0")
    		return Units[num.toString()[0]] + " hundred " + othersDecimal[num.toString()[1]];
    	else 
    		return Units[num.toString()[0]] + " hundred " + othersDecimal[num.toString()[1]] + " " + Units[num.toString()[2]];
    } 
}
