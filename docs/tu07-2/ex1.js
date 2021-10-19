function Calculator(num1, num2) {
  this.numA = num1;
  this.numB = num2;
  this.avg = () => (this.numA + this.numB) / 2;
  this.sum = () => this.numA + this.numB;
  this.mul = () => this.numA * this.numB;
}
export default Calculator;
