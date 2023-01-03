// ********** NOTES **********
// Argument passed to (count = 1) goes to
// -> "((resolve) =>" and then goes to
// -> "resolve({ data: count }" inside of "data" property
// ********** NOTES **********


const asyncCount = (count = 1) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: count }), Math.random() * 1000)
  );
};

export { asyncCount };
