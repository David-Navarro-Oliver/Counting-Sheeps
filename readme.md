# Counting Sheeps 🐑🐺

This project contains a simple JavaScript function that counts how many sheep are in a flock.

In this exercise:
- `true` represents a sheep 🐑
- `false` represents a wolf 🐺

The function counts only the sheep and ignores the wolves.

If there are no sheep in the list, it returns a warning message indicating that all sheep have been eaten.

---

## Function Description

```js
function countSheeps(list)

Input: An array of boolean values.
Output: A message printed in the console.
```

## Example Inputs
```js
[
  true, true, true, false, true, true, true, true, true, false,
  true, false, true, false, false, true, true, true, true, true,
  false, false, true, true
]

[ false, false, false ]
```

## Expected Output
```text
There are 17 sheep in total
UPS!!! Wolfs eaten Sheeps
```

## Requirements

Node.js (LTS version recommended)

## How to Run the Project

Clone the repository:
```bash
git clone https://github.com/David-Navarro-Oliver/Counting-Sheeps.git
```

Navigate to the project folder:
```bash
cd Counting-Sheeps
```

Run the script:
```bash
node index.js
```

## Author

David Navarro