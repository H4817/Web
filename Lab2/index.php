<!DOCTYPE>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="styles.css">
<script type="text/javascript" src="Shape.js"></script>
<script type="text/javascript" src="Circle.js"></script>
<script type="text/javascript" src="Triangle.js"></script>
<script type="text/javascript" src="Rectangle.js"></script>
<script type="text/javascript" src="main.js"></script>
</head>



<body>
    <div class="option_container has_border has_margin">

        <div class="shape_select_container has_border scalable has_margin">
            <div class="title" id="select_shape_title">Select shape</div>
            <select class="select_shape" id="type_shape">
                <option value="">None</option>
            </select>
        </div>

        <div class="setting scalable has_border has_margin">
            <div class="title" id="setting_title">Setting</div>
            <div class="common_options">
                <div class="color_shape">
                    <div class="option_labels l_color_shape">Shape color </div>
                    <input id="color_shape">
                </div>

                <div class="color_border">
                    <div class="option_labels l_color_border">Border shape color </div>
                    <input id="color_border">
                </div>
            </div>
            <div id="setting" class="setting_shape"></div>
            <button class="draw_shape" id="draw_shape">Draw shape</button>
        </div>

        <div class="shape_characteristics has_border has_margin scalable" id="shape_data">
            <div class="title" id="shape_characteristics_title">Shape characteristics</div>
            <div class="output_perimeter" id="perimeter"></div>
            <div class="output_area" id="area"></div>
        </div>

        <div class="add_shape has_border has_margin">
            <div class="title" id="add_shape_title">Add shape</div>
            <select id="shape_type">
                <option value="Rectangle">Rectangle</option>
                <option value="Triangle">Triangle</option>
                <option value="Circle">Circle</option>
            </select>
            <button id="add_shape" onclick="AddShape(shape_type.value)">Add shape</button>
        </div>
    </div>

    <div class="canvas_container has_border has_margin scalable">
        <div class="canvas has_border scalable">
            <canvas id="canvas" width="500px" height="500px"></canvas>
        </div>
    </div>

<script type="text/javascript">
    //Execute();
</script>




</body>





</html>
