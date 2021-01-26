function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#input>textarea');

   function onClick () {
      let arr = JSON.parse(input.value);
      let restaurants = {};
      arr.forEach(line => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         let workers = [];
         let averageSalary = 0;
         for(let worker of workersArr) {
            let workerTokens = worker.split(' ');
            let salary = Number(workerTokens[1]);
            workers.push({
               name: workerTokens[0],
               salary: Number(workerTokens[1])
            })
         }
         if(restaurants[name]) {
            workers.concat(restaurants[name].workers);
         }
         workers.sort((a, b) => b.salary - a.salary);
         let bestSalary = workers[0].salary;
         averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }

      });
      
   }
   console.log(restaurants);
}