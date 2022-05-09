const calculator = {
  read: function (valor1, valor2) {
    this.a = valor1;
    this.b = valor2;
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  },
};

calculator.read(5, 10);

console.log(calculator.a, calculator.b, calculator.sum(), calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // muestra el peldaño actual
    console.log(this.step);
    return this;
  },
};

const calculator2 = {
  read: function () {
    this.a = +prompt('Ingrese el primer valor');
    this.b = +prompt('Ingrese el segundo valor');
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  },
};

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    let numUser = +prompt('Ingrese un valor');
    this.value += numUser;
  };
}
