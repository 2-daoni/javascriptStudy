const Callback = () => {
  console.log("1");
  setTimeout(() => console.log("2"), 1000);
  console.log("3");

  const synchronous = (print) => {
    print();
  };
  synchronous(() => console.log("동기 콜백!"));

  const asynchronous = (print, timeout) => {
    setTimeout(print, timeout);
  };
  asynchronous(() => console.log("비동기 콜백!"), 2000);
};

export default Callback;
