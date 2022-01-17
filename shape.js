// import using require
const Shape = require('./shape');
// declare class

class Circle extends Shape {
	constructor() {
		super();
	}  
	calculateArea() {}
}

// export class using module.exports
module.exports = Circle;


// declare class

class Shape {
  constructor() {
    this.color = "red";
  }
  calculateArea() {}
  drawShape() {}
}

// Shape.color = '...' //! Static properties

module.exports = Shape;
// export class using module.exports
