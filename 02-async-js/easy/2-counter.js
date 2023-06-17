let count = 0;
const callback = () => setTimeout(() => { count++; console.log(count); callback() }, 1000);
callback();