console.log(
  [50, 10, 100, 1, 6, 7, 200, 45].sort((a, b) => {
    console.log(a, b, a - b);

    return b - a;
  })
);
