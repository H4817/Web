function Shape(fillColor, borderColor) {
    this.fillColor = fillColor;
    this.borderColor = borderColor;
    this.draw();
    this.calculateArea();
    this.calculatePerimeter();
}

Shape.prototype.setFillColor = function (fillColor) {
    if (!fillColor)
        this.fillColor = "#000000";
    else
        this.fillColor = fillColor;
};

Shape.prototype.getFillColor = function () {
    return this.fillColor;
};

Shape.prototype.setBorderColor = function (borderColor) {
    if (!borderColor)
        this.borderColor = "#000000";
    else
        this.borderColor = borderColor;
};

Shape.prototype.getBorderColor = function () {
    return this.borderColor;
};

function Coordinate(x, y) {
    this.x = x;
    this.y = y;
}
