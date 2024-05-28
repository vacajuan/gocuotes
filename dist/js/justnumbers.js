$(window).ready(function(){
	$("#card").keypress(function(e){
		if ((e.which < 48 || e.which > 57)) {
			return false;
		}
	})
	$("#expiry").keypress(function(e){
		if ((e.which < 48 || e.which > 57)) {
			return false;
		}
	})
	$("#cvv").keypress(function(e){
		if ((e.which < 48 || e.which > 57)) {
			return false;
		}
	})

	$("#card").keyup(function(e){
		if (($("#card").val().length == 4)) {
			$("#card").val($("#card").val() + " ");
		}
		if (($("#card").val().length == 9)) {
			$("#card").val($("#card").val() + " ");
		}
		if (($("#card").val().length == 14)) {
			$("#card").val($("#card").val() + " ");
		}
		if (($("#card").val().length == 19)) {
			$("#card").val($("#card").val() + " ");
		}
		if ((e.which == 8 )) {
			$("#card").val("");
		}
	})
	$("#expiry").keypress(function(e){
		if (($("#expiry").val().length == 2)) {
			$("#expiry").val($("#expiry").val() + "/");
		}
		if ((e.which == 8)) {
			return false;
		}
	})
})