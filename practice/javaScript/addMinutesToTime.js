var todays = new Date();
var orgTodayDate = todays;
var minutesToAdd=5;
todays = new Date(todays.getTime() + minutesToAdd*60000);

print(orgTodayDate);
print(todays);
