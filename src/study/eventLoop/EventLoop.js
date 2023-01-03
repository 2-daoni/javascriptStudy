const EventLoop = () => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 0);
  console.log(3);

  // 순서
  //   console.log("script start");

  //   setTimeout(function () {
  //     console.log("setTimeout");
  //   }, 0);

  //   Promise.resolve()
  //     .then(function () {
  //       console.log("promise1");
  //     })
  //     .then(function () {
  //       console.log("promise2");
  //     });

  //   requestAnimationFrame(function () {
  //     console.log("requestAnimationFrame");
  //   });
  //   console.log("script end");
};

export default EventLoop;
