
  document.getElementById('orphan_registration').addEventListener('submit');
  

  // variable setup
      var firstName= "";
      var lastName= "";
      var Address= "";
      var state ="";
      var city= "";
      var zip = "";
      var telephone= "";
      var email="";

      // where a user click the submit
  $("#addUser").on("click", function(event){
    event.preventDefault();
      	// get the input values
       firstName = $("#inputFirstName").val().trim();
       lastName = $("#inputLastName").val().trim();
       address = $("#inputAddress").val().trim();
       state= $("#inputState").val().trim();
       city= $("#inputCity").val().trim();
       zip = $("#inputZip").val().trim();
       telephone = $("#inputTelephone").val().trim();
       email = $("#inputEmail").val().trim();
      
  firebase.database().ref().set({
    var orphanSupporter = {
        firstName:firstName,
        lastName:lastName,
        address:address,
        state:state,
        city:city,
        zipCode:zipCode,
        telephone: telephone,
        email:email,
        dateAdded:firebase.database.ServerValue.TIMESTAMP
      }
       	
	
   	});   
    database.ref().push(orphanSupporter);
      $("#firstNameInput").val("");
      $("#lastNameInput").val("");
      $("#addressInput").val("");
      $("#stateInput").val("");
      $("#cityInput").val("");
      $("#zipInput").val("");
      $("#telephoneInput").val("");
       $("#emailInput").val("");
  });
    
 //    //trafirebase.database().ref().on("value", function(snapshot){
    firebase.database().ref().on("child_added", function(snapshot){
     	$(".theList").append("<p>"+snapshot.val().firstName+"</p>");
     	$(".theList").append("<p>"+snapshot.val().lastName+"</p>");
       $(".theList").append("<p>"+snapshot.val().address+"</p>");
       $(".theList").append("<p>"+snapshot.val().state+"</p>");
      $(".theList").append("<p>"+snapshot.val().city+"</p>");
      $(".theList").append("<p>"+snapshot.val().zipCode+"</p>");
      $(".theList").append("<p>"+snapshot.val().telephone+"</p>");
     	$(".theList").append("<p>"+snapshot.val().email+"</p>");
     	$(".theList").append("/hr");
     });

   firebase.database().ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
 // firebase.database().ref().on("value", function(snapshot){ 
    $("#firstNameDisplay").html(snapshot.val().firstName);
    $("#lastNameDisplay").html(snapshot.val().lastName);
     $("#cityDisplay").html(snapshot.val().city);
     $("#zipCodeDisplay").html(snapshot.val().zipCode);  
    console.log(snapshot.val());
  
});















//============================================================

const myBrand = document.getElementsByTagName("h1")[0];
myBrand.addEventListener('click', ()  =>{
    myBrand.style.color='red';
});
// const message = document.querySelectorAll('p:nth-child(odd)');
// for(let i=0; i<message.length; i+=1) {
//     message[i].style.backgroundColor='lightgray';
// }

const abu_Nat = document.querySelector('h2');
abu_Nat.addEventListener('mouseover', ()=>{
    abu_Nat.style.backgroundColor="green";
})

$("h2").on("mouseover", function(){
    $("h2").css("color", "purple" );
});
var myAnimation = $("#navbarSupportedContent").on("mouseover" , function(){
    $("#navbarSupportedContent").css("color", "blue");
});
// $(myAnimation).on("click", function(){
//     $("#navbarDropdown").toggle();
// });
$("dropdown-menu").on("mouseover", function(){
    $("dropdown-menu").css("backgroundColor", "red");
});
