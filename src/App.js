import "./App.css";
import Throttle from "./study/throttle&debounce/Throttle";
import Debounce from "./study/throttle&debounce/Debounce";
import ExecutionContext from "./study/executionContext/ExecutionContext";
import Hoisting from "./study/Hoisting&Closure/Hoisting";
import Closure from "./study/Hoisting&Closure/Closure";
import EventLoop from "./study/eventLoop/EventLoop";
import Callback from "./study/Asynchronous/Callback";

function App() {
  return (
    <>
      {/* 디바운스와 쓰로틀 */}
      <Throttle />
      <Debounce />

      {/* 실행 컨텍스트 */}
      {/* <ExecutionContext /> */}

      {/* 호이스팅과 클로저 */}
      {/* <Hoisting /> */}
      {/* <Closure /> */}

      {/* 이벤트루프 */}
      {/* <EventLoop /> */}

      {/* 비동기 처리 */}
      {/* <Callback /> */}
    </>
  );
}

export default App;
