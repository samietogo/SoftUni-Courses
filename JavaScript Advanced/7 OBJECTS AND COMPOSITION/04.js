// Object Factory
// function print() {
//     console.log(`${this.name} is printing a page`);
// }
// function scan() {
//     console.log(`${this.name} is scanning a document`);
// }
// const printer = {
//     name: 'ACME Printer',
//     print
// };
// const scanner = {
//     name: 'Initech Scanner',
//     scan
// };
// const copier = {
//     name: 'ComTron Copier',
//     print,
//     scan
// };

// printer.print();
// scanner.scan();
// copier.print();
// copier.scan();

// function createRect(width, height) {
//     const rect = { width, height };
//     rect.getArea = () => {
//         return rect.width * rect.height;
//     };
//     return rect;
// }
// const myRect = createRect(15, 10);
// console.log(myRect);
// console.log(myRect.getArea());

// const getArea = myRect.getArea;

// console.log(getArea());

function solve(library, orders) {
    const result = [];
    for(let order of orders) {
        const composed = Object.assign({}, order.template);
        for(let part of order.parts) {
            composed[part] = library[part];
        }
        result.push(composed);
    }
    return result;
}
const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    },
  ];
  const products = solve(library, orders);
  console.log(products);
  