# <ins>Logs Functions With Unique Flowid</ins>
```php
function id() {
    $server = str_pad(hexdec(basename(__FILE__)) ^ $_SERVER['SERVER_ADDR'] % 99, 2, '0', STR_PAD_LEFT);
    $pid = str_pad(substr(getmypid(), -2), 2, '0', STR_PAD_LEFT);
    $time = str_pad(str_replace('.', '', microtime(TRUE)), 2, '0');
    $uId = (int)($time . $server . $pid . mt_rand(0, 9));
    $uniqueIdOne = substr($uId, -9);
    $uniqueIdTwo = substr($uId, 9);
    $uniqueId = "$uniqueIdOne.$uniqueIdTwo";
    return $uniqueId;
}
$logs_flow_id = id();

/// Defining For Better Logs.................
define("LOG_PATH","/dacx/var/ameyo/dacxdata/log/testingLogs");
define("LOG_LEVEL","Low");
define("LOG_LEVEL","highOne");
define("LOG_ENABLE","true");
define("LOG_IVR_ID","F.$logs_flow_id");

function debugLog($message, $level = LOG_LEVEL, $logfile = LOG_PATH, $enable = LOG_ENABLE) {
    if ($enable) {
        global $logs_flow_id;
        file_exists($logfile) ?: mkdir($logfile, 0777, true);
        $log_file_data = $logfile . '/' . date('d-M-Y') . '.log';
        $now     = "\n[" . date("Y-M-d H:i:s") . "] ";
        $message = $now . '[' . $level . '] ' . '[' . LOG_IVR_ID . "] " . $message;
        error_log($message, 3, $log_file_data);
    }
}

```


# <ins>Get the selected in dropdown for Loops</ins>

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
# <ins> Comman String Functions </ins>

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
>��� �V, U�#z #�t��o_nё����d�3�]r�O�����bt�\9��c�H��3Q,������

* To decompress the same.
```php
$decompressed = gzuncompress($compressed);
echo $decompressed;
```
> sgdvfjyrfbuytuygjkugjbgukyiluikytdrxcyvbjkjljhfgxgcgvhjmkl,n nbkl vhjnkljmnbv   


# <ins> Ternary Operators </ins>
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

# <ins> PHP OOPS Concepts </ins>    
1. The  PHP Object-Oriented Programming concepts are:    
    - Class 
    - Objects
    - Inheritance
    - Interface
    - Abstraction
    - Magic Methods