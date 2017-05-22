var shapesCollection = new ShapesCollection();
var oldSelectedShape = null;
var oldShapeType = null;
var counter = 0;
var specificShapes = null;


function FillShapesSelector(shape) {
    var shapes_selector = document.getElementById("type_shape");
    var option = document.createElement("option");
    option.text = shape;
    shapes_selector.add(option);
}

/**
 * @return {boolean}
 */
function IsItShape(shapeType) {
    return shapeType === "Rectangle" || shapeType === "Triangle" || shapeType === "Circle";
}

function SynchronizeSecondSelect(shapeType) {
    if (IsItShape(shapeType)) {
        document.getElementById("shape_type").value = shapeType;
    }
}

function FillSettingsBlock(shapeType) {
    if (IsItShape(shapeType)) {
        var shape_coordinates_block = document.getElementById(shapeType + "_coordinates");
        shape_coordinates_block.classList.toggle("hidden");
        oldSelectedShape ? document.getElementById(oldSelectedShape + "_coordinates").classList.toggle("hidden") : document.getElementById("Rectangle_coordinates").classList.toggle("hidden"); /////
        oldSelectedShape = shapeType;
    }
}

function FillShapesCharacteristicsBlock(selectedShape) {
    if (selectedShape instanceof Shape) {
        document.getElementById("perimeter").innerText = selectedShape.calculatePerimeter();
        document.getElementById("area").innerText = selectedShape.calculateArea();
        document.getElementById("color_shape").value = selectedShape.getFillColor();
        document.getElementById("color_border").value = selectedShape.getBorderColor();

        switch (selectedShape.getClassName()) {
            case "Rectangle":
                var rPoints = selectedShape.getPoints();
                document.getElementById("rectangle_p1x").value = rPoints[0].x;
                document.getElementById("rectangle_p1y").value = rPoints[0].y;
                document.getElementById("rectangle_p3x").value = rPoints[1].x;
                document.getElementById("rectangle_p3y").value = rPoints[1].y;
                break;
            case "Triangle":
                var tPoints = selectedShape.getPoints();
                document.getElementById("triangle_p1x").value = tPoints[0].x;
                document.getElementById("triangle_p1y").value = tPoints[0].y;
                document.getElementById("triangle_p2x").value = tPoints[1].x;
                document.getElementById("triangle_p2y").value = tPoints[1].y;
                document.getElementById("triangle_p3x").value = tPoints[2].x;
                document.getElementById("triangle_p3y").value = tPoints[2].y;
                break;
            case "Circle":
                document.getElementById("circle_center_x").value = selectedShape.getX();
                document.getElementById("circle_center_y").value = selectedShape.getY();
                document.getElementById("radius").value = selectedShape.getRadius();
                break;
            default:
                console.log("Add shape error: unknown shape type");
                break;

        }

    }
    else {
        document.getElementById("color_shape").value = "#000000";
        document.getElementById("color_border").value = "#000000";
        if (oldSelectedShape)
            document.getElementById(oldSelectedShape + "_coordinates").reset();
        // document.getElementById(oldSelectedShape + "_coordinates").classList.toggle("hidden");
    }
}

function ProcessInput() {
    var list = document.getElementById("shape_type");
    return list.options[list.selectedIndex].value;
}

function AddShape(shapeType, fillColor, borderColor) {
    switch (shapeType) {
        case "Rectangle":
            shapesCollection.AddToShapesCollection(
                CreateRectangle(
                    new Coordinate(document.getElementById("rectangle_p1x").value, document.getElementById("rectangle_p1y").value),
                    new Coordinate(document.getElementById("rectangle_p3x").value, document.getElementById("rectangle_p3y").value),
                    fillColor, borderColor));
            break;
        case "Triangle":
            shapesCollection.AddToShapesCollection(CreateTriangle(
                new Coordinate(document.getElementById("triangle_p1x").value, document.getElementById("triangle_p1y").value),
                new Coordinate(document.getElementById("triangle_p2x").value, document.getElementById("triangle_p2y").value),
                new Coordinate(document.getElementById("triangle_p3x").value, document.getElementById("triangle_p3y").value),
                fillColor, borderColor));
            break;
        case "Circle":
            shapesCollection.AddToShapesCollection(CreateCircle(
                document.getElementById("radius").value,
                new Coordinate(document.getElementById("circle_center_x").value, document.getElementById("circle_center_y").value),
                fillColor, borderColor));
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
    if (shape instanceof Shape) {
        var copiedObject = jQuery.extend({}, shape);
        copiedObject.setFillColor("#00ff00");
        copiedObject.draw();
    }
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

    return specificShapes[counter];

}


function Execute() {
}
