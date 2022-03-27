<?php

$all_params = $_SERVER['REQUEST_URI'];
$params_arrays = explode("?", $all_params);
$params = $params_arrays[1];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<script>
const mainParms = "<?php echo $params?>";
window.onload = function(){
     window.open("http://20.193.225.245/lims_dev/crmindex?"+mainParms, "_nilesh"); // will open new tab on window.onload
}
</script>
</body>
</html>