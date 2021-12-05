// Get the list of countries based on language using XMLHttpRequest
var request = new XMLHttpRequest();
request.open('GET','http://api.countrylayer.com/v2/lang/en?access_key=4734f163058a7b77d93c11dce24cf98d');
request.send();
request.onload = function(){
    var data= JSON.parse(this.response);
            console.log(data);
};


//  Get the list of countries based on currency using XMLHttpRequest

var request = new XMLHttpRequest();
request.open('GET','https://api.countrylayer.com/v2/currency/inr?access_key=4734f163058a7b77d93c11dce24cf98d');
request.send();
request.onload = function(){
    var data= JSON.parse(this.response);
            console.log(data);
};
