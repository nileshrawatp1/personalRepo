Table of Contents
=================

   * [Table of Contents](#table-of-contents)     
   * [<ins> Comman String Functions </ins>](#-comman-string-functions-)     
            * [Get the selected in dropdown for Loops](#get-the-selected-in-dropdown-for-loops)     
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
