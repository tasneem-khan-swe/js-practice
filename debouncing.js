function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
fn.apply(this, args)}, delay);
  };
}

// // Usage
// const handleInput = debounce((val) => console.log("Search:", val), 500);
// - Debounce: Wait until user stops typing/clicking → then run. eg. Search input API call


// Interview Q
// “How would you prevent an API from firing on every keypress?” → Answer: Debounce.
// “How to improve scroll performance in React?” → Answer: Throttle.