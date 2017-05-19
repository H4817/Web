var shapesCollection = new ShapesCollection();
var oldShape = null;
var oldShapeType = null;
var counter = 0;
var specificShapes = null;

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
    switch (shapeType) {
        case "Rectangle":
            shapesCollection.AddToShapesCollection(CreateRectangle(new Coordinate(300, 300), new Coordinate(100, 100), fillColor, borderColor));
            break;
        case "Triangle":
            shapesCollection.AddToShapesCollection(CreateTriangle(new Coordinate(0, 0), new Coordinate(100, 0), new Coordinate(0, 100), fillColor, borderColor));
            break;
        case "Circle":
            shapesCollection.AddToShapesCollection(CreateCircle(100, new Coordinate(randomInteger(0, 400), randomInteger(0, 400)), fillColor, borderColor));
            break;
        default:
            console.log("Add shape error: unknown shape type");
            break;
    }
    shapesCollection.GetLastOne().draw();
}

function RedrawShape(specificShape, newParameters) {
    switch (specificShape.getClassName()) {
        case "Rectangle":
            break;
        case "Triangle":
            break;
        case "Circle":
            specificShape.clear();
            specificShape.setCenter(newParameters);
            specificShape.draw();
            break;
        default:
            console.log("RedrawShape: error, unknown shape type");
            break;
    }
    specificShape.draw();
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function HighlightSelectedShape(shape) {
    // var tmpShape = JSON.parse(JSON.stringify(specificShapes[counter]));
    // tmpShape.setFillColor("#00ff00");
    // tmpShape.draw();

    var copiedObject = jQuery.extend({}, shape);
    copiedObject.setFillColor("#00ff00");
    copiedObject.draw();


    // var old_color = shape.getFillColor();
    // console.log(shape);
    // shape.setFillColor("#00ff00");
    // shape.draw();
}

function DrawShapes(shapes) {
    for (var i = 0; i < shapes.length; ++i) {
        shapes[i].draw();
    }
}


function SelectShape(shapeType) {

    if (shapeType && oldShapeType === shapeType) {
        // RedrawShape(specificShapes[counter], new Coordinate(150, 150));
        ++counter;
    }
    else {
        specificShapes = shapesCollection.GetSpecificShapes(shapeType);
        counter = 0;
    }

    DrawShapes(shapesCollection.GetShapesCollection());

    if (counter >= specificShapes.length)
        counter = 0;

    HighlightSelectedShape(specificShapes[counter]);

    oldShapeType = shapeType;

    // specificShapes[counter].draw();

}


function Execute() {
}
