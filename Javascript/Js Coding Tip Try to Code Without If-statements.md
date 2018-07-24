# Js Coding Tip: Try to Code Without If-statements

> There is nothing wrong with using if-statements, but avoiding them can *sometimes* make the code a bit more readable to humans. This is definitely not a general rule as sometimes avoiding if-statements will make the code a lot less readable. You be the judge.
>
> Avoiding if-statements is not just about readability. There is some science behind the concept. As the challenges below will show, not using if-statements gets you closer to the [code-as-data](https://en.wikipedia.org/wiki/Code_as_data) concept, which opens the door for unique capabilities like modifying the code as it is being executed!

- example1

Count the odd integers in an `array`

```js
const arrayOfIntegers = [1, 4, 5, 9, 0, -1, 5];

// with if-statements
let counter = 0;
arrayOfIntegers.forEach((integer) => {
  const remainder = Math.abs(integer % 2);
  if (remainder === 1) {
    counter++;
  }
});

// without if-statements
let counter = 0;
arrayOfIntegers.forEach((integer) => {
  const remainder = Math.abs(integer % 2);
  counter += remainder;
});
console.log(counter);
```

- example2

The weekendOrWeekday function

```js
// with if-statements
const weekDayORweekend = () => {
	const today = new Date().getDay()
    if (today === 0 || today === 6) {
        return 'weekend'
    }
    return 'weekday'
    
    // Or, for ternary fans:
    return (day === 0 || day === 6) ? 'weekend' : 'weekday';
}

// without if-statements
const weekDayORweekend = () => {
    const today = new Date().getDay()
    return weekendOrWeekday.labels[day] || 
         weekendOrWeekday.labels['default'];
}
weekDayORweekend.labels = {
    0: 'weekend', 
  	6: 'weekend', 
  	default: 'weekday' 
}
```

