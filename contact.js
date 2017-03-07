(function() {

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
document.getElementById("findContact").addEventListener("click", findContact);

function findContacts() {
   var options = new ContactFindOptions();
   options.filter = "";
   options.multiple = true;

   fields = ["Babe"];
   navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
    
   function contactfindSuccess(contacts) {
      for (var i = 0; i < contacts.length; i++) {
         alert("Display Name = " + contacts[i].displayName);
      }
   }
	
   function contactfindError(message) {
      alert('Failed because: ' + message);
   }
	
}
})();


