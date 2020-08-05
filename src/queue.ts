const queue: any[] = [];

console.log(1);
setTimeout(() => {
  queue.push("queue 1");
}, 0);
console.log(2);
setTimeout(() => {
  queue.push("queue 2");
}, 0);
console.log(3);
setTimeout(() => {
  queue.push("queue 3");
}, 0);
setTimeout(() => {
  console.log(`Confirm queue: ${queue}`);
}, 0);

console.log(queue);
