function ShapesCollection() {
    this.shapesCollection = [];
}

ShapesCollection.prototype.AddToShapesCollection = function (shape) {
    this.shapesCollection.push(shape);
};

ShapesCollection.prototype.GetShapesCollection = function () {
    return this.shapesCollection;
};

ShapesCollection.prototype.GetLastOne = function () {
    return this.shapesCollection[this.shapesCollection.length - 1];
};

ShapesCollection.prototype.GetSpecificShapes = function (shapeType) {
    return this.shapesCollection.filter(function (obj) {
        return obj.getClassName() === shapeType;
    })
    // var tempArr = this.GetShapesCollection().filter(function (obj) {
    //     return shapeType === obj;
    // });
    // var returnVar = this.shapesCollection.filter(function (obj) {
    //     return shapeType === obj;
    // });
    // console.log(tempArr);
};

