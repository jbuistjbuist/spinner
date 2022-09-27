const spin = (rotations, count) => {
  if (!count) {
    count = 0;
  }
  if (count < rotations) {
    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, 100);

    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, 300);

    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, 500);

    setTimeout(() => {
      process.stdout.write('\r\\   ');
      spin(rotations, count + 1);
    }, 700);
  }
};
spin(3);