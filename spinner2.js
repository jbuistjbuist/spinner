// const spin = (rotations, count) => {
//   if (!count) {
//     count = 0;
//   }
//   if (count < rotations) {
//     setTimeout(() => {
//       process.stdout.write('\r|   ');
//     }, 100);

//     setTimeout(() => {
//       process.stdout.write('\r/   ');
//     }, 300);

//     setTimeout(() => {
//       process.stdout.write('\r-   ');
//     }, 500);

//     setTimeout(() => {
//       process.stdout.write('\r\\   ');
//       spin(rotations, count + 1);
//     }, 700);
//   }
// };
// spin(3);

//@alex0616 helped with this refactor, i did the original (above implementation) independently
const spin = function(ms) {
  let timer = 100;
  const chars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  while (timer <= ms) {
    for (let char of chars) {
      setTimeout(() => process.stdout.write(char), timer);
      timer += 200;
    }
  }
};

spin(3000);