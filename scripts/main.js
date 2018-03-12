function main() {
	
  var year = new Date().getFullYear();
  $("#copyright").html("&copy"+year);

}

$(document).ready(main);