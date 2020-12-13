Table of Contents
=================

* [<ins>Convert String to the Hash<ins></ins></ins>](#convert-string-to-the-hash)


### <ins>Convert String to the Hash<ins>    

```php

$card_no = "5123451234562346";
$hashing_salt = "dreamfolks";


$card_hashed = hash('sha256', $card_no.$hashing_salt);

echo $card_hashed;

```
> <ins>Output</ins>
>
>6b6ccc44d93b489c872f1869f6b6078aa44f1c23baee9f59afaade0c794b8ea0