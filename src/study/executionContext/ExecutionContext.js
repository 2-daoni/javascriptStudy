const ExecutionContext = () => {
  const name = "zero";
  function wow(word) {
    console.log(word + " " + name);
  }
  function say() {
    const name = "nero";
    console.log(name);
    wow("hello");
  }
  say();
};

export default ExecutionContext;
