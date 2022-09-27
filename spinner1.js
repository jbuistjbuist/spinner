const spinner = () => {
  let counter = 0;
  
  const spin = () => {
    counter ++;
    if (counter < 3) {
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
        // Need to escape the backslash since it's a special character.
        process.stdout.write('\r\\   ');
      }, 700);

      setTimeout(() => {
        spin();
      }, 700);
    }

  };
  spin();
};

spinner();