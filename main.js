const array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

console.log(array);

if (array.length) {
  let positiveSum = 0;
  let positiveAmount = 0;
  let negativeAmount = 0;
  let positiveEvenAmount = 0;
  let positiveOddAmount = 0;
  let positiveEvenSum = 0;
  let positiveOddSum = 0;
  let positiveMultiplication = 0;
  //1 task
  for (const element of array) {
    if (element > 0) {
      positiveAmount++;
      positiveSum += element;
      positiveMultiplication *= element;

      if (element % 2 === 0) {
        positiveEvenAmount++;
        positiveEvenSum += element;
      } else {
        positiveOddAmount++;
        positiveOddSum += element;
      }
    } else if (element < 0) {
      negativeAmount++;
    }
  }
  console.log(`Sum of positive element is ${positiveSum}`);
  console.log(`Quantity of positive element is ${positiveAmount}`);
  //2 task
  let minimumElemement = Math.min(...array);
  let minimumElemementPosition = array.indexOf(minimumElemement) + 1;
  console.log(`Minimal element is ${minimumElemement}`);
  console.log(`Minimal element's position is ${minimumElemementPosition}`);
  //3 task
  let maximumElement = Math.max(...array);
  let maximumElementPosition = array.indexOf(maximumElement) + 1;
  console.log(`Maximum element is ${maximumElement}`);
  console.log(`Maximum element's position is ${maximumElementPosition}`);

  //4 task
  console.log(`Amount of negative number is ${negativeAmount}`);
  //5 task
  console.log(`Amount of odd positive number is ${positiveOddAmount}`);
  //6 task
  console.log(`Amount of even positive number is ${positiveEvenAmount}`);
  //7 task
  console.log(`Sum of even positive number is ${positiveEvenSum}`);
  //8 task
  console.log(`Sum of odd positive number is ${positiveOddSum}`);
  //9 task
  positiveAmount
    ? console.log(`Mult of positive number is ${positiveMultiplication}`)
    : console.log("Empty positive number");
  //10 task
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== maximumElement) {
      array[i] = 0;
    }
  }
  console.log(array);
} else {
  console.log("Array is empty");
}
