const Closure = () => {
  //   let num;
  //   num = 1;
  //   const addNum = (number) => {
  //     console.log(num + number);
  //   };
  //   addNum(5);

  //   const increase = () => {
  //     let num = 0;

  //     return ++num;
  //   };

  //   console.log(increase());
  //   console.log(increase());
  //   console.log(increase());

  const outer = () => {
    var title = "coding everybody";
    const inner = () => {
      alert(title);
    };
    inner();
  };
  outer();
};

export default Closure;
