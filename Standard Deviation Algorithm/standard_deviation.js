let std = ave = n = a = b = 0,
  x = [];

n = Number(prompt("Please Enter n"));

for(let i = 0; i < n; i ++) {
  x[i] = Number(prompt("Please Enter X[" + i + "]"));
  ave += x[i];
}

ave = ave / n;

for(let i = 0; i < n; i ++) {
  a += Math.pow(x[i] - ave, 2);
}

b = a / n;

std = Math.sqrt(b);

console.log("Standard Deviation is " + std);