
function AddToShapesCollection(shape) {

}

function GetShapesCollection() {

}

function ProcessInput() {
    var list = document.getElementById("shape_type");
    return list.options[list.selectedIndex].value;
}

function AddShape(shapeType) {
    console.log("shape type: " + shapeType);
    switch (shapeType) {
        case "Rectangle":
            PrintRectangle();
            break;
        case "Triangle":
            PrintTriangle();
            break;
        case "Circle":
            PrintCircle();
            break;
        default:
            console.log("Add shape error: unknown shape type");
            break;
    }
}

function RedrawShape(specificShape, newParameters) {

}

function SelectShape() {

}


function Execute() {
    // AddShape(ProcessInput());
    // PrintCircle();
    // PrintTriangle();
    // PrintRectangle();
}
