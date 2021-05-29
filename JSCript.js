var database = [
{
	username: "Soul",
	password: "090909"
},

{
	username: "Roger",
	password: "33243"
},

{
	username: "John",
	password: "080808"
}

];

var newsFeed = [
{
	username: " Frank",
	timeline: "gim is coool!"
},

{
	username: " Rob",
	timeline: " I love to travel!"
},

{
	username: "Jane",
	timeline: "Life is beautiful!"
}

];

function isUserValid( username, password){
	for( var i=0; i < database.length; i++){
		if(database[i].username === username &&
			database[i].password === password){
			return true;
		}
	} 
	return false;
};

function signIn( username, password){
	if(isUserValid(username, password)){
		console.log( newsFeed);
	} else {
		alert ("Sorry, wrong username and password");
	}
};



var userNamePrompt = prompt ("What\'s your username?");
var passwordPrompt = prompt ("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);

