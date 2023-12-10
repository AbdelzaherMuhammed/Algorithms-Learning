let n = xSum = ySum = xySum = nxySum =  a = xtr = ytr = nxtr = nytr = xSumtr = ySumtr = sum = result1 = result2 = c = 0,
  x = [],
  y = []

n = Number(prompt("Please Enter n"));

for(let i = 0; i < n; i ++) {
  x[i] = Number(prompt("Please Enter X[" + i + "]"));  
  y[i] = Number(prompt("Please Enter Y[" + i + "]"));
  console.log(x[i], y[i]);
  xSum += x[i];
  ySum += y[i];

  xySum += x[i] * y[i];

  xtr += x[i] * x[i];
  ytr += y[i] * y[i];
}
console.log(xSum, ySum, xySum, xtr, ytr);

nxySum = n * xySum;

sum = xSum * ySum;

a = nxySum - sum;

nxtr = n * xtr;
nytr = n * ytr;

xSumtr = xSum * xSum;
ySumtr = ySum * ySum;

result1 = nxtr - xSumtr;
result2 = nytr - ySumtr;

b = Math.sqrt(result1) * Math.sqrt(result2);

c = a / b;

console.log(c);