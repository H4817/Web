function Shape(fillColor, borderColor) {
    this.fillColor = fillColor;
    this.borderColor = borderColor;
    this.draw();
    this.calculateArea();
    this.calculatePerimeter();
}

Shape.prototype.setFillColor = function (fillColor) {
    this.fillColor = fillColor;
};

Shape.prototype.getFillColor = function () {
    return this.fillColor;
};

Shape.prototype.setBorderColor = function (borderColor) {
    this.borderColor = borderColor;
};

Shape.prototype.getBorderColor = function () {
    return this.borderColor;
};

function Coordinate(x, y) {
    this.x = x;
    this.y = y;
}

