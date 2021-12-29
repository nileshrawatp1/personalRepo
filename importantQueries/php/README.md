Table of Contents
=================

   * [Table of Contents](#table-of-contents)  
         * [Converting milliseconds to hh::mm::ss.a](#converting-milliseconds-to-hhmmssa)  
         * [Logs Functions With Unique Flowid](#logs-functions-with-unique-flowid)  
         * [Get the selected in dropdown for Loops](#get-the-selected-in-dropdown-for-loops)  
         * [ Comman String Functions ](#-comman-string-functions-)  
            * [1. Get Particular Part Of a String ==&gt;&gt; substr()](#1-get-particular-part-of-a-string--substr)  
            * [2. To get the length of a string ==&gt;&gt; strlen($var)](#2-to-get-the-length-of-a-string--strlenvar)  
            * [3. To find the index of any particular letter in a String ==&gt;&gt; strpos($var, 'word')](#3-to-find-the-index-of-any-particular-letter-in-a-string--strposvar-word)  
            * [4. To remove All The Space in String ==&gt;&gt; trim()](#4-to-remove-all-the-space-in-string--trim)  
            * [5. Convert a string to all uppercase ==&gt;&gt; strtoupper()](#5-convert-a-string-to-all-uppercase--strtoupper)  
            * [6. Convert a string to all Lowercase ==&gt;&gt; strtolower()](#6-convert-a-string-to-all-lowercase--strtolower)  
            * [7. To make capital First word of a string ==&gt;&gt; ucword()](#7-to-make-capital-first-word-of-a-string--ucword)  
            * [8. To replace one letter or one word ==&gt;&gt; str_replace()](#8-to-replace-one-letter-or-one-word--str_replace)  
            * [9. To Check if its string or not ==&gt;&gt; is_string()](#9-to-check-if-its-string-or-not--is_string)  
            * [10. To check values under array is string or not.](#10-to-check-values-under-array-is-string-or-not)  
            * [11. To Compress and deCompress ==&gt;&gt; gzcompress() &amp;&amp; gzdecompress()](#11-to-compress-and-decompress--gzcompress--gzdecompress)  
         * [ Ternary Operators ](#-ternary-operators-)  
            * [1. if-else Conditions](#1-if-else-conditions)  
            * [2. if-elseif Conditions](#2-if-elseif-conditions)  
         * [ PHP OOPS Concepts ](#-php-oops-concepts-)  
         * [Number Masking Function](#number-masking-function)  
         * [Get All The Params of URL](#get-all-the-params-of-url)  
         * [Convert Array to Url String](#convert-array-to-url-string)  
         * [Echo PHP errors on page](#echo-php-errors-on-page)  
         * [Get the complete url](#get-the-complete-url)  
         * [JSON in backslaches \ formats](#json-in-backslaches--formats)  
         * [API Functions](#api-functions)  
         * [Pass Varibles To File Locally](#pass-varibles-to-file-locally)  

### Converting milliseconds to hh::mm::ss.a
---
```php
//? function for Coverting the milliseconds to hh:mm:ss.u
function formatMilliseconds($milliseconds) {
    $seconds = floor($milliseconds / 1000);
    $minutes = floor($seconds / 60);
    $hours = floor($minutes / 60);
    $milliseconds = $milliseconds % 1000;
    $seconds = $seconds % 60;
    $minutes = $minutes % 60;

    $format = '%u:%02u:%02u.%03u';
    $time = sprintf($format, $hours, $minutes, $seconds, $milliseconds);
    return rtrim($time, '0');
}
```

### Logs Functions With Unique Flowid
---
```php
function generate_guid(){
    $uid = mt_rand('1111111', '99999999');
    $uidTwo = mt_rand('11111111', '999999999');
    $uniqueId = "$uid.$uidTwo";
    return $uniqueId;
}
$logs_flow_id = generate_guid();

/// Defining For Better Logs.................
define("LOG_PATH","/dacx/var/ameyo/dacxdata/log/testingLogs");
define("LOG_LEVEL","Low");
define("LOG_ENABLE","true");
define("LOG_IVR_ID","F.$logs_flow_id");

function debugLog($message, $level = LOG_LEVEL, $logfile = LOG_PATH, $enable = LOG_ENABLE) {
    if ($enable) {
        date_default_timezone_set('Asia/Kolkata');
        global $logs_flow_id;
        file_exists($logfile) ?: mkdir($logfile, 0777, true);
        $log_file_data = $logfile . '/' . date('d-M-Y') . '.log';
        $now     = "\n[" . date("Y-M-d H:i:s") . "] ";
        $message = $now . '[' . $level . '] ' . '[' . LOG_IVR_ID . "] " . $message;
        error_log($message, 3, $log_file_data);
    }
}

```


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
###  Comman String Functions 
---
#### 1. Get Particular Part Of a String ==>> `substr()`
* Getting Particular part of a string 
    - **First** is the variable or string.
    - **Second** is the start index of the string.
    - **Third** is the end index of the string.


```php
$str = "hello";
echo substr($str, 1, 3);
```
> ell

* To Start from the back start with Negative number.   

```php 
$str = "hello";
echo substr($str, -5, -2);
```
> hel   

#### 2. To get the length of a string ==>> strlen($var)
```php
$str = 'Hello World';
echo strlen($str);
```
> 11

#### 3. To find the index of any particular letter in a String ==>> strpos($var, 'word')
* Used to get the First position of that word.
```php
$output = strpos('Hello World', 'o');
echo $output;
```
> 4

* Used to get the Last position of that word.
```php
$output = strrpos('Hello World', 'o');
echo $output;
```
> 7

#### 4. To remove All The Space in String ==>> trim()   
* It will remove only last space of the string not inbetweens of the string.
```php
$txt = 'Hello       World           ';
var_dump($txt);

echo '<br>';
echo 'trimmed <br>';

$trimmed = trim($txt);
var_dump($trimmed);
```
> string(28) "Hello World "    
> trimmed    
> string(17) "Hello World"    

#### 5. Convert a string to all uppercase ==>> strtoupper()   
```php
$txt = 'Hello World';
echo strtoupper($txt);
```
> HELLO WORLD

#### 6. Convert a string to all Lowercase ==>> strtolower()    
```php
$txt = 'HeLLo WORLD';
echo strtolower($txt);
```
> hello world

#### 7. To make capital First word of a string ==>> ucword()    
```php
$txt = 'hello new world';
echo ucwords($txt);
```
> Hello New World

#### 8. To replace one letter or one word ==>> str_replace()     
* Getting Particular part of a string      
    - **First** is the word you want to replace.     
    - **Second** is the word which will be the new word.     
    - **Third** is the input or variable.     
```php
>$txt = 'hello new world';
echo str_replace('o', 'z', $txt);

echo '<br>';

$words = 'hello new hello world';
echo str_replace('hello', 'wow', $words);
```
> hellz new wzrld   
> wow new wow world   

#### 9. To Check if its string or not ==>> is_string()   
```php
$text = 'hello world';
echo is_string($text);
```
> 1 if string else nothing   

#### 10. To check values under array is string or not.     
```php
$arr = [true, false, null, 'abc', 33, '43', 22.4, '32.4', '', ' ', 0, '0'];

foreach($arr as $value)
{
  if(is_string($value))
  {
      echo "{$value} is a string.<br>";
    }
}
```
> abc is a string.    
> 43 is a string.    
> 32.4 is a string.    
> is a string.    
> is a string.    
> 0 is a string.    

#### 11. To Compress and deCompress ==>> gzcompress() && gzdecompress()   
```php
$text = 'sgdvfjyrfbuytuygjkugjbgukyiluikytdrxcyvbjkjljhfgxgcgvhjmkl,n nbkl vhjnkljmnbv';
$compressed = gzcompress($text);
echo $compressed;
```
> x�
>��� �V, U�###z ###�t��o_nё����d�3�]r�O�����bt�\9��c�H��3Q,������

* To decompress the same.
```php
$decompressed = gzuncompress($compressed);
echo $decompressed;
```
> sgdvfjyrfbuytuygjkugjbgukyiluikytdrxcyvbjkjljhfgxgcgvhjmkl,n nbkl vhjnkljmnbv   


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

### Number Masking Function    
---
```php
function numberMasking($num_to_mask) {
    $stars_get = '';
    for ($i = 0; $i < strlen($num_to_mask) - 2; $i++) {
        $stars_get .= '*';
    }
    $lastTwo = substr($num_to_mask, -2);
    $num_to_mask = $stars_get . $lastTwo;

    return $num_to_mask;
}
$masked_number = numberMasking($phone);
```

 ### Get All The Params of URL    
---
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

 ### Convert Array to Url String    
 ---
```php
$data = [
    'foo' => 'bar',
    'baz' => 'boom',
    'cow' => 'milk',
    'php' => 'hypertext processor'
]
echo http_build_query($data); // output: foo=bar&baz=boom&cow=milk&php=hypertext+processor

echo http_build_query($data, '', '&amp;'); // output: foo=bar&amp;baz=boom&amp;cow=milk&amp;php=hypertext+processor
```

 ### Echo PHP errors on page    
 ---
```php
global $enablecrmdebug;
$enablecrmdebug = 1;       // possible values are  0 / 1 / 2  to diabled / enable / enable with echo
$php_debug_enable = false; // possible values are  true / false
```

 ### Get the complete url    
 ---
```php
function getUrl() {
        $url = @( $_SERVER["HTTPS"] != 'on' ) ? 'http://'.$_SERVER["SERVER_NAME"] : 'https://'.$_SERVER["SERVER_NAME"]; 
        $url .= ( $_SERVER["SERVER_PORT"] !== 80 ) ? ":".$_SERVER["SERVER_PORT"] : ""; 
        $url .= $_SERVER["REQUEST_URI"]; 
        return $url; 
    }
$full_url = getUrl();
```
 ### JSON in backslaches \\\\ formats    
 ---
 - `"[{\"name\": \"bill\", \"score\": 0.7948127388954163}, {\"name\": \"john\", \"score\": 0.782698392868042}]"`;
 - for json in above format try this
```php
$r=json_decode(stripcslashes(trim($response,'"')));
```
 ### API Functions    
 ---
```php
function callAPIPOST($url, $data, $headr) {
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 
);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headr);
$response = curl_exec($ch);
return $response;
}

function callAPIGET($url, $headr) {
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 
);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headr);
$response = curl_exec($ch);
return $response;
}
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
