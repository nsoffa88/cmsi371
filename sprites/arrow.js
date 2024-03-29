(function () {
	
	window.SpriteLibrary = window.SpriteLibrary || { };

	var FLETCH_MIDDLE_X = 76;
	var FLETCH_MIDDLE_Y = 16;
	var FLETCH_BOTTOM = 50;

	SpriteLibrary.arrow = function (arrowSpecification) {
		var ctx = arrowSpecification.ctx || document.getElementById("canvas").getContext("2d");

		var opacity = arrowSpecification.opacity || 1;

		//fletching
		ctx.beginPath();
		ctx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
		ctx.scale(0.7, 0.7);
		ctx.moveTo(FLETCH_MIDDLE_X, FLETCH_MIDDLE_Y);
		ctx.lineTo(FLETCH_BOTTOM, 30);
		ctx.lineTo(FLETCH_BOTTOM, 0);
		ctx.closePath();
		ctx.fill();

		//Shaft
		ctx.fillStyle = "rgba(165, 42, 42, " + opacity + ")";
		ctx.rotate(-Math.PI / 2);
		ctx.translate(-95, 35);
		ctx.fillRect(FLETCH_MIDDLE_X, FLETCH_MIDDLE_Y, 5, 120);

		//Arrow Tip
		ctx.beginPath();
		ctx.fillStyle = "rgba(190, 190, 190, " + opacity + ")";
		ctx.translate(95, 87);
		ctx.rotate(Math.PI / 2);
		ctx.moveTo(FLETCH_MIDDLE_X, FLETCH_MIDDLE_Y);
		ctx.lineTo(FLETCH_BOTTOM, 30);
		ctx.lineTo(FLETCH_BOTTOM, 0);
		ctx.closePath();
		ctx.fill();

	};
}());