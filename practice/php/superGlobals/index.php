<?php include 'server-info.php' ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super Globals</title>
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1 style="padding-top:50px;">Server & File Info</h1>

        <!-- ! IF condition Starts Here -->
        <?php if($server): ?>
            
            <ul class="list-group">
                <?php foreach($server as $key => $value): ?>
                    <li class="list-group-item">
                        <strong><?php echo $key; ?>: </strong>
                        <?php echo $value; ?>
                    </li>
                <?php endforeach; ?>
            </ul>

        <!-- IF Condion Ends Here -->
        <?php endif; ?>

        <h1 style="padding-top:100px;">Client Info</h1>

        <!-- ! IF condition Starts Here -->
        <?php if($client): ?>
            
            <ul class="list-group">
                <?php foreach($client as $key => $value): ?>
                    <li class="list-group-item">
                        <strong><?php echo $key; ?>: </strong>
                        <?php echo $value; ?>
                    </li>
                <?php endforeach; ?>
            </ul>

        <!-- IF Condion Ends Here -->
        <?php endif; ?>
    </div>
    
</body>
</html>