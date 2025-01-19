function firstRecurringCharacter(input) {
  const hash = {};
  if (!input) {
    console.log("Invalid Array");
  } else {
    for (let i = 0; i < input.length; i++) {
      const item = input[i];
      if (hash[item]) {
        console.log(item);
        return item;
      }
      hash[item] = true;
    }
    return undefined;
  }
}

firstRecurringCharacter([[], 2, [], "d", 4, 2, 5, 6]);
firstRecurringCharacter(["a+b", 2, "a+b", 1, 4, 2, 34]);
firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter(null);
