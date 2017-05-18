var shapesCollection = new ShapesCollection();

function FillShapesSelector(shape) {
    var shapes_selector = document.getElementById("type_shape");
    var option = document.createElement("option");
    option.text = shape;
    shapes_selector.add(option);
}


function ProcessInput() {
    var list = document.getElementById("shape_type");
    return list.options[list.selectedIndex].value;
}

function AddShape(shapeType, fillColor, borderColor) {
    console.log("shape type: " + shapeType);
    console.log("fill color: " + fillColor);
    console.log("border color: " + borderColor);
    switch (shapeType) {
        case "Rectangle":
            shapesCollection.AddToShapesCollection(CreateRectangle(new Coordinate(0, 0), new Coordinate(100, 100), fillColor, borderColor));
            break;
        case "Triangle":
            shapesCollection.AddToShapesCollection(CreateTriangle(new Coordinate(0, 0), new Coordinate(100, 0), new Coordinate(0, 100), fillColor, borderColor));
            break;
        case "Circle":
            shapesCollection.AddToShapesCollection(CreateCircle(100, new Coordinate(0, 0), fillColor, borderColor));
            break;
        default:
            console.log("Add shape error: unknown shape type");
            break;
    }
    shapesCollection.GetLastOne().draw();
}

function RedrawShape(specificShape, newParameters) {

}


function SelectShape(shapeType) {
    // console.log(shapeType);
    var result = shapesCollection.GetSpecificShapes(shapeType);
    console.log(result);
    // console.log("shape type is: " + shapeType);
    // var concreteShape = shapesCollection.GetLastOne();
    // console.log(concreteShape);
    // console.log("concrete shape is : " + concreteShape.constructor.name)
}


function Execute() {
    // AddShape(ProcessInput());
    // PrintCircle();
    // PrintTriangle();
    // PrintRectangle();
}
