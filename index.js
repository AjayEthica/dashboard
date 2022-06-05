$("#stdchat").click( function () {
	$("#tpcchat").removeClass("active");
	$("#tpcfriends").hide();
	$("#stdchat").addClass("active");
	$("#stdfriends").show();
});
$("#tpcchat").click( function () {
	$("#stdchat").removeClass("active");
	$("#stdfriends").hide();
	$("#tpcchat").addClass("active");
	$("#tpcfriends").show();
});