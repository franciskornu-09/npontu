// (function() {

// document.addEventListener('deviceready', onDeviceReady.bind(this), false);
// function onDeviceReady() {

// document.getElementById("search").onclick = function() {
// navigator.contacts.pickContact(function(contact){
//        alert('The following contact has been selected:' + JSON.stringify(contact));

//        document.getElementById("search").value=contact.phoneNumbers[0].value;
//        alert(contact.phoneNumbers[0].value);
//    },function(err){
//        alert('Error: ' + err);
//    });
// }
// } ;
// })();

function contact(){
	var name = $("#search").val();
	
	function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
};

function onError(contactError) {
    alert('onError!');
};

// find all contacts with 'Bob' in any name field
var options      = new ContactFindOptions();
options.filter   = name;
options.multiple = true;
options.desiredFields = [navigator.contacts.fieldType.id];
options.hasPhoneNumber = true;
var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
navigator.contacts.find(fields, onSuccess, onError, options);
}