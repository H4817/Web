function Rectangle(p1, p3) {
    this.setPoints(p1, p3);
}

Rectangle.__proto__ = Shape;

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.setPoints = function (p1, p3) {
    this.p1 = p1;
    this.p3 = p3;
};

Rectangle.prototype.getPoints = function () {
    return [this.p1, this.p3];
};

Rectangle.prototype.calculatePerimeter = function () {
    return (Math.sqrt(Math.pow((this.p1.x - this.p1.x), 2) + Math.pow((this.p3.y - this.p1.y), 2)) +
            Math.sqrt(Math.pow((this.p3.x - this.p1.x), 2) + Math.pow((this.p1.y - this.p1.y), 2))) * 2;
};

Rectangle.prototype.calculateArea = function () {
    return (Math.sqrt(Math.pow((this.p1.x - this.p1.x), 2) + Math.pow((this.p3.y - this.p1.y), 2)) *
            Math.sqrt(Math.pow((this.p3.x - this.p1.x), 2) + Math.pow((this.p1.y - this.p1.y), 2)));
};

Rectangle.prototype.draw = function () {

};

function PrintRectangle() {
    var rectangle = new Rectangle(new Coordinate(0, 0), new Coordinate(10, 10));
    console.log(rectangle.calculatePerimeter());
    console.log(rectangle.calculateArea());
}


