function Circle(radius, center, fillColor, borderColor) {
    this.radius = radius;
    this.setCenter(center);
    this.setFillColor(fillColor);
    this.setBorderColor(borderColor);
}

Circle.__proto__ = Shape;

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.setRadius = function (radius) {
    this.radius = radius;
};

Circle.prototype.getRadius = function () {
    return this.radius;
};

Circle.prototype.setX = function (X) {
    this.X = X;
};

Circle.prototype.getX = function () {
    return this.X;
};

Circle.prototype.setY = function (Y) {
    this.Y = Y;
};

Circle.prototype.getY = function () {
    return this.Y;
};

Circle.prototype.calculateArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
};

Circle.prototype.calculatePerimeter = function () {
    return 2 * Math.PI * this.radius;
};

Circle.prototype.setCenter = function (point) {
    this.X = point.x;
    this.Y = point.y;
};

Circle.prototype.draw = function () {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var circle = new Path2D();
        ctx.strokeStyle = this.getBorderColor();
        ctx.fillStyle = this.getFillColor();
        circle.arc(this.getX(), this.getY(), this.getRadius(), 0, 2 * Math.PI); // x y radius division
        ctx.stroke(circle);
        ctx.fill(circle);
    }
};

Circle.prototype.getClassName = function () {
    return "Circle";
};


function CreateCircle(radius, X, Y, fillColor, borderColor) {
    return new Circle(radius, X, Y, fillColor, borderColor)
}


/*function PrintCircle(fillColor, borderColor) {
 var circle = new Circle(105, 0, 0);
 circle.setFillColor(fillColor);
 circle.setBorderColor(borderColor);
 circle.draw();

 /!*  var circle = new Circle(15, 29, 23);
 console.log("circle: ");
 console.log(circle.getRadius());
 circle.setFillColor(123);
 console.log(circle.getFillColor());
 circle.setBorderColor(321);
 console.log(circle.getBorderColor());
 console.log(circle.calculateArea());
 console.log(circle.calculatePerimeter());*!/

 // var arr = [];
 // arr.push(new Coordinate(10, 0));
 // arr.push(new Coordinate(0, 11));
 //
 // for (var i = 0; i < arr.length; i++) {
 //     var x = arr[i].x;
 //     var y = arr[i].y;
 //     console.log(x);
 //     console.log(y);
 // }


 }*/
