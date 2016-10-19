
// 	$("logg").click(function(){
//     alert("The paragraph was clicked.");
//     console.log($('#send_user').text());
// });
	$(document).ready(function(){
//$("#logout").hide();
	$.get("/display",function(data){
		//console.log(data);
		data.forEach(function(value,key){
			$("#taj_mahal").append('\<div >\
				<div class="col-xs-1 "></div>\
		<div class="col-xs-10 appending_div">\
			<h2>'+value.title+'</h2>\
			<img class="col-xs-6" src= "'+value.img+'">\
			<p class="content col-xs-6">'+value.des+'</p>\
			<div class="bottom_data">\
			<p class="pull-left">Author : '+value.an+'</p>\
			<p class="pull-right">Date : '+value.doc+'</p>\
			</div>\
		</div>\
		<div class="col-xs-1"></div>\
		<div class="clear"></div>\
	</div>');

		})
			data.forEach(function(value,key){
			$("#blog_page").append('\<div >\
				<div class="col-xs-1 "></div>\
		<div class="col-xs-10 appending_div">\
		<a href="#" class="pull-right edit glyphicon glyphicon-edit" >Edit</a>\
			<h2>'+value.title+'</h2>\
			<img class="col-xs-6" src= "'+value.img+'">\
			<p class="content col-xs-6">'+value.des+'</p>\
			<div class="bottom_data">\
			<p class="pull-left">Author : '+value.an+'</p>\
			<p class="pull-right">Date : '+value.doc+'</p>\
			</div>\
		</div>\
		<div class="col-xs-1"></div>\
		<div class="clear"></div>\
	</div>');

		})
	})
var m;
	//console.log(window.location.href);
	// if(window.location.href=="http://localhost:5000/home"){
	// 	alert("kkk");
	// 	$('.edit').css("visibility","visible");
	// }
	$( document ).on( 'click', '.edit', function() {
   document.getElementById("blog_page").contentEditable = true;
});
	$("#save").click(function(){
		document.getElementById("blog_page").contentEditable = false;
	})


});
