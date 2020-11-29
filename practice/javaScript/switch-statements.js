// git to refer (https://github.com/Asabeneh/JavaScript-for-Everyone#if-else-if-else)
var weather = 'rainy';
switch (weather) {
  case 'rainy':
    print('You need a rain coat. Its '+weather+" outside.");
    break;
  case 'cloudy':
    print('It might be cold, you need a jacket.');
    break;
  case 'sunny':
    print('Go out freely.');
    break;
  default:
    print(' No need for rain coat.');
    break;
}

var dayUserInput = prompt('What day is it ?');
var day = dayUserInput.toLowerCase();
switch (day) {
  case 'monday':
    print('Today is Monday');
    break;
  case 'tuesday':
    print('Today is Tuesday');
    break;
  case 'wednesday':
    print('Today is Wednesday');
    break;
  case 'thursday':
    print('Today is Thursday');
    break;
  case 'friday':
    print('Today is Friday');
    break;
  case 'saturday':
    print('Today is Saturday');
    break;
  case 'sunday':
    print('Today is Sunday');
    break;

  default:
    print('It is not a week day.');
    break;
}
