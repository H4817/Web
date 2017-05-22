function Rectangle(p1, p3, fillColor, borderColor) {
    this.setPoints(p1, p3);
    this.calculateSides();
    this.setFillColor(fillColor);
    this.setBorderColor(borderColor);
}

Rectangle.__proto__ = Shape;

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.calculateSides = function () {
    this.width = Math.sqrt(Math.pow((this.p1.x - this.p1.x), 2) + Math.pow((this.p3.y - this.p1.y), 2));
    this.height = Math.sqrt(Math.pow((this.p3.x - this.p1.x), 2) + Math.pow((this.p1.y - this.p1.y), 2));
};

Rectangle.prototype.getSides = function () {
    return [this.width, this.height];
};

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
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var rectangle = new Path2D();
        ctx.strokeStyle = this.getBorderColor();
        ctx.fillStyle = this.getFillColor();
        this.calculateSides();
        rectangle.rect(this.getPoints()[0].x, this.getPoints()[0].y, this.getSides()[0], this.getSides()[1]);// x y width height
    }
    ctx.stroke(rectangle);
    ctx.fill(rectangle);
};

Rectangle.prototype.getClassName = function () {
    return "Rectangle";
};

function CreateRectangle(p1, p3, fillColor, borderColor) {
    return new Rectangle(p1, p3, fillColor, borderColor);
}
