function Circle(radius, X, Y) {
    this.radius = radius;
    this.X = X;
    this.Y = Y;
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

Circle.prototype.draw = function () {

};

function PrintCircle() {

    /*  var circle = new Circle(15, 29, 23);
     console.log("circle: ");
     console.log(circle.getRadius());
     circle.setFillColor(123);
     console.log(circle.getFillColor());
     circle.setBorderColor(321);
     console.log(circle.getBorderColor());
     console.log(circle.calculateArea());
     console.log(circle.calculatePerimeter());*/

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


}
