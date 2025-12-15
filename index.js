function countSheeps(list) {
  const sheepsCount = list.filter(Boolean).length;

  if (sheepsCount === 0) {
    console.log("UPS!!! Wolfs eaten Sheeps");
    return;
  }

  console.log(`There are ${sheepsCount} sheep in total`);
}

const list1 = [
  true, true, true, false, true, true, true, true, true, false,
  true, false, true, false, false, true, true, true, true, true,
  false, false, true, true
];

const list2 = [false, false, false];

countSheeps(list1);
countSheeps(list2);
