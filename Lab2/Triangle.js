function Triangle(p1, p2, p3, fillColor, borderColor) {
    this.setPoints(p1, p2, p3);
    this.calculateLengthOfSides(this.getPoints());
    this.setFillColor(fillColor);
    this.setBorderColor(borderColor);
}

Triangle.__proto__ = Shape;

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.setPoints = function (p1, p2, p3) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
};

Triangle.prototype.getPoints = function () {
    return [this.p1, this.p2, this.p3];
};

Triangle.prototype.calculateLengthOfSides = function (points) {
    this.lengthOfSides = [Math.sqrt(Math.pow((points[1].x - points[0].x), 2) +
        Math.pow((points[1].y - points[0].y), 2)),
        Math.sqrt(Math.pow((points[2].x - points[1].x), 2) +
            Math.pow((points[2].y - points[1].y), 2)), Math.sqrt(
            Math.pow((points[0].x - points[2].x), 2) +
            Math.pow((points[0].y - points[2].y), 2))];
    return this.lengthOfSides;
};

Triangle.prototype.calculatePerimeter = function () {
    this.perimeter = this.lengthOfSides[0] + this.lengthOfSides[1] + this.lengthOfSides[2];
    return this.perimeter;
};

Triangle.prototype.calculateArea = function () {
    this.calculatePerimeter();
    return Math.sqrt(Math.abs(this.perimeter / 2 * (this.perimeter / 2 - (this.lengthOfSides[0])) *
        (this.perimeter / 2 - (this.lengthOfSides[1])) *
        (this.perimeter / 2 - (this.lengthOfSides[2]))));
};

Triangle.prototype.draw = function () {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var points = this.getPoints();
        ctx.strokeStyle = this.getBorderColor();
        ctx.fillStyle = this.getFillColor();
        ctx.moveTo(points[0].x, points[0].y);
        ctx.lineTo(points[1].x, points[1].y);
        ctx.lineTo(points[2].x, points[2].y);
        ctx.fill();
        ctx.stroke();
    }
};

Triangle.prototype.getClassName = function () {
    return "Triangle";
};

function CreateTriangle(p1, p2, p3, fillColor, borderColor) {
    return new Triangle(p1, p2, p3, fillColor, borderColor);
}
/*
 function PrintTriangle(fillColor, borderColor) {
 var triangle = new Triangle(new Coordinate(0, 0), new Coordinate(100, 0), new Coordinate(0, 100));
 triangle.setFillColor(fillColor);
 triangle.setBorderColor(borderColor);
 triangle.draw();
 // console.log(triangle.getPoints()[1].y);
 console.log(triangle.calculateLengthOfSides(triangle.getPoints()));
 console.log(triangle.calculateArea());
 console.log(triangle.calculatePerimeter());
 }*/
