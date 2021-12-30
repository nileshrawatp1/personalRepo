Table of Contents
=================

   * [Table of Contents](#table-of-contents)  
         * [Get the selected in dropdown for Loops](#get-the-selected-in-dropdown-for-loops)   
         * [ Ternary Operators ](#-ternary-operators-)  
            * [1. if-else Conditions](#1-if-else-conditions)  
            * [2. if-elseif Conditions](#2-if-elseif-conditions)  
         * [ PHP OOPS Concepts ](#-php-oops-concepts-)  
         * [Number Masking Function](#number-masking-function)  
         * [Get All The Params of URL](#get-all-the-params-of-url)  
         * [Convert Array to Url String](#convert-array-to-url-string)  
         * [Echo PHP errors on page](#echo-php-errors-on-page)  
         * [Pass Varibles To File Locally](#pass-varibles-to-file-locally)  

### Get the selected in dropdown for Loops
---
```php
<td width="5%" ></td>
<td width="16%" class="textlight">Center </td>
<td width="2%" >:</td>
<td width="27%" class="textdark">
<?php
    $host = "localhost";
    $port = "5432";
    $dbname = "ameyodb";
    $user = "postgres";
    $connection = pg_connect("host=$host user=$user password=$password dbname=$dbname");
    $query = pg_query("SELECT * FROM center ORDER BY center ASC");
    $rowCount = pg_num_rows($query);
?>

<select class="form-control" name="center" id="id">
    <option value="">Select Center</option>
        <?php
            if($rowCount > 0)
            {
                while($row = pg_fetch_array($query))
                {
                    if($data['center_name'] == $row['center'])
                    {
                        echo '<option value="'.$row['id'].'" selected>'.$row['center'].'</option>';
                    } else 
                    {
                        echo '<option value="'.$row['id'].'">'.$row['center'].'</option>';
                    }
                }
            }
        ?>
        <?php if(!empty($center)) :?>
    <option value="<?php echo $center['center'];?>" selected><?php echo $center; ?> </option>
        <?php endif;?>
</select>
```
###  Ternary Operators 
---
#### 1. if-else Conditions   
```php
$input = "18";
$pressed = ($input == '1' ? 'yes' : 'no');

echo $pressed;
```
> no   
#### 2. if-elseif Conditions   
```php
$input = "3";

$acd = ($input == '1' ? 'one'   : 
       ($input == '2' ? 'two'   :
       ($input == '3' ? 'three' :
       ($input == '4' ? 'four'  :
       ($input == '5' ? 'five'  : 
       'NotValid')))));
       
echo $acd;
```
> three     

###  PHP OOPS Concepts     
---
1. The  PHP Object-Oriented Programming concepts are:    
    - Class 
    - Objects
    - Inheritance
    - Interface
    - Abstraction
    - Magic Methods
#### 1. To Get Only Parameters.  
```php
$all_params = $_SERVER['REQUEST_URI'];
$params_arrays = explode("?", $all_params);
$params = $params_arrays[1];
```
#### 2. To Get Full URL with HTTPs and HTTP support.  
```php
$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
```

 ### Echo PHP errors on page    
 ---
```php
global $enablecrmdebug;
$enablecrmdebug = 1;       // possible values are  0 / 1 / 2  to diabled / enable / enable with echo
$php_debug_enable = false; // possible values are  true / false
```
 ### Pass Varibles To File Locally    
 ---
 - Here, `STDIN` is a constant that is defined when php is running from command line.  
 - The `$argv[0]` AND `$argv[1]` are the Array of arguments passed to script.  
 - The command to run the file will be `php getAccountId.php +91-9876543210 nilesh`
```php
$phone = (defined('STDIN') ? $argv[1] : $_GET["customerPhone"]);
$phone = substr($phone, -10);

$new_one = $argv[2];
echo $phone,"\n";
echo $new_one, "\n ";
```
> <b><ins>Output</ins></b>  
> 9876543210  
> nilesh  
