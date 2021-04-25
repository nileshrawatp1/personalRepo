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
    console.log('Today is Monday');
    break;
  case 'tuesday':
    console.log('Today is Tuesday');
    break;
  case 'wednesday':
    console.log('Today is Wednesday');
    break;
  case 'thursday':
    console.log('Today is Thursday');
    break;
  case 'friday':
    console.log('Today is Friday');
    break;
  case 'saturday':
    console.log('Today is Saturday');
    break;
  case 'sunday':
    console.log('Today is Sunday');
    break;

  default:
    console.log('It is not a week day.');
    break;
}
