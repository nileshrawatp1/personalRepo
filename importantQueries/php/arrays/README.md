### <ins>Learning Arrays</ins>
<details><summary> Index Creating Arrays </summary>

```php
$cars = array('BMW', 'Audi', 'Tata');
echo "$cars[1] $cars[2] \n";

// ! Another way of creating Arrays
$peoples = ['Radhika', 'Akash', 'Nilesh'];
echo "$peoples[0] $peoples[2] \n";

```
___
  >OUTPUT ==>> Audi Tata 
  >Radhika Nilesh 

___
</details>

<details><summary> Index Add Values Arrays </summary>

```php
$cars = array('BMW', 'Audi', 'Tata');
// ! Adding index to the last of cars var
$cars[] = 'Honda';
print_r($cars)."\n";
var_dump($cars);

```
___
  >print_r ==>> Array
(
    [0] => BMW
    [1] => Audi
    [2] => Tata
    [3] => Honda
)
___
>var_dump ==>> array(4) {
  [0]=>
  string(3) "BMW"
  [1]=>
  string(4) "Audi"
  [2]=>
  string(4) "Tata"
  [3]=>
  string(5) "Honda"
}

___
</details>


