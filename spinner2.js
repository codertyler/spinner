let spinnerVar = ["\r|    ", "\r/   ", "\r-   ", "\r\\    ", "\r|   ", "\r-   ", "\r/   ", "\r|   "];

for (let i = 0; i < spinnerVar.length; i++) {
  if (i < spinnerVar.length) {
    setTimeout(() => {
      process.stdout.write(spinnerVar[i]);
    }, 200 * i);
  } else {
    process.stdout.write(spinnerVar[i] + "\n");

  }
}


