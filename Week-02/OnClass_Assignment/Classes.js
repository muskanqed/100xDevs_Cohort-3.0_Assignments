// Create a circle class

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  area() {
    return this.radius * this.radius * Math.PI;
  }

  circleColor() {
    console.log(`The color of circle is ${this.color}`);
  }
}

let circle = new Circle(2, "Blue");
console.log(circle.area());
circle.circleColor();
