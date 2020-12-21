<?php
// ! Messages Vars
    $msg = '';
    $msgClass = '';

    // ! Checking if the submit button has pressed.
    if(filter_has_var(INPUT_POST, 'submit')){

        // ? Get Form Data.
        // * htmlspecialchars() used to convert all script tags (<h2>) to &lt;b&gt; Used for security.
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        // ? Checking if Any of the field has left blank.
        if(!empty($name) && !empty($email) && !empty($message)){
            // Passed
            // Email Validator
            if(filter_var($email, FILTER_VALIDATE_EMAIL === false)){

                // * email Failed
                $msg = "Please enter the valid Email-ID !!";
                $msgClass = "alert-danger";

            } else {

                // * --------------- Going To Send Email ---------------
                $toEmail = 'nileshrawat@ameyo.com';
                $subject = 'Contact Request from '.$name;
                $body = '<h2>Contact Request</h2>
                        <h4>Name</h4><p>'.$name.'</p>
                        <h4>Email</h4><p>'.$email.'</p>
                        <h4>Message</h4><p>'.$message.'</p>
                ';

                // * ----------------- Email Headers -------------------
                $headers = "MIME-Version: 1.0" . "\r\n";
                // ? here .= will add value to it will not change the previous value.
                $headers .= "Content-Type:text/html;charset=UTF-8" . "\r\n";
                // ? Additional Headers.
                $headers .= "From: " . $name . "<" . $email . ">" . "\r\n";

                // ! Sending The Mail Here with mail() function
                if(mail($toEmail, $subject, $body, $headers)){

                    // Email Sent
                    $msg = "Your Email Has Been Sent. Thanks!";
                    $msgClass = "alert-success";

                } else {

                    // Failed
                    $msg = "Something Gone Wrong We will Look into it ASAP.";
                    $msgClass = "alert-danger";

                }
            }
        }else{
            // Failed
            $msg = "Please fill all the given fields !!";
            $msgClass = "alert-danger";
        }

    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="./bootstrap.min.css">
</head>
<body>

<!------ Navigation Bar ----------->
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <div class="navbar-header">
                <a href="index.php" class="navbar-brand">My Contact</a>
            </div>
        </div>
    </nav>

<!--------- Form Here ----------->

<div class="container" style="padding-top:50px;">

<!---------- If Any Field has left blank whi will make $msg some value else its empty. ---------------->
<?php if($msg != ''): ?>
<div class="alert <?php echo $msgClass; ?>"> <?php echo $msg; ?> </div>

<!--------- End of if condition ----------->
<?php endif; ?>

    <form action="" method="post">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" class="form-control" id="name-id" placeholder="Enter Name" value="<?php echo isset($_POST['name']) ? $name : ''; ?>">
        </div>
        <div class="form-group">
            <label for="email_Id">Email address</label>
            <!----------------------- Check the Value of Each Input To stay the data in fields if any button pressed ----------------->
            <input type="email" name="email" class="form-control" id="email_Id" aria-describedby="emailHelp" placeholder="Enter email" value="<?php echo isset($_POST['email']) ? $email : ''; ?>">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Message</label>
            <textarea name="message" id="message-id" cols="10" rows="5" class="form-control" placeholder="Let us know about You !!!" value="<?php echo isset($_POST['message']) ? $message : ''; ?>"></textarea>
        </div>
        <br>
        <button type="submit" name="submit" class="btn btn-lg btn-primary">Submit</button>
    </form>
</div>



</body>
</html>