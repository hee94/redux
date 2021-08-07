# redux

+ 기본개념
  
  **action**
  ```
    : 상태에 변화가 필요하면 발생시킨다. 객체로 표현하고 type이 꼭 있어야 한다!
       매번 액션객체를 직접 작성하기는 효율이 떨어지고 실수할수 있으므로 함수를 만들어 관리한다.
     ex) const changeInput = input =>({
              type: ※주로대문자로_고유해야함,
              input });
    ```
  **reducer**
  ```
    : 변화를 일으키는 함수. 액션이 발생되면 리듀서가 현재 state와 action을 파라미터로 받아온다. 
      그리고 두 값을 참고해 새로운 state를 반환한다.
      ex) const reducerfunc = (state , action)=>{
              switch (action.type){
                  case A:
                      return{ console.log('A')}; 
                  case B:
                      return{console.log('B') };
                      default:
                      return state; }};
   ```
 
  **store**
    ```
    : 프로젝트에 리덕스를 적용하기 위해 스토어를 만든다. 한개의 프로젝트는 하나의 스토어만 가질 수 있다.
  ```
  
  **dispatch**
  ```
    :스토어의 내장 함수로 액션을 파라미터로 받아서 호출한다. 디스패치가 호출되면 스토어는 리듀서함수를 실행시켜 새로운 상태를 만든다.
  ```
 
  **subscribe**
    ```
    : 스토어의 내장 함수로 리스너함수를 파라미터로 넣어 호출하면, 리스너함수가 액션이 디스패치되어 상태가 업데이트 될때마다 호출한다.
    ex) const listener =() =>{ console.log('업데이트');
        const unsubscribe = store.subscribe(listener);
        unsubscribe();
    ```
    
# react-redux
  + 리액트 리덕스를 사용할때 가장 많이 사용하는 패턴 \
    : 프레젠테이셔널컴포넌트(view전용컴포넌트) - 컨테이너컴포넌트(리덕스스토어와 연결된 컴포넌트)  \
      이렇게 분리하여 사용하면 컴포넌트의 재사용성을 높여줄 수 가 있다.
  + 스토어와 리덕스 적용
    : 최상위 index.js에서 스토어를 만들어주고 리덕스에서 제공하는 Provider로 감싸준다\
    그리고 provider안에 store를 props로 전달해준다.\
    
    ```
    const store = createStore(Reducer)
        ReactDOM.render(
            <Provider store={store}>
            <App />
            </Provider>>,
          document.getElementById('root')
        );
    ```
 
  + connect
    :  리덕스와 연동하기 위해 사용되는 함수. \
      connect(mapStateToProps, mapDispatchToProps)(연동할컴포넌트)
      + mapStateToProps(스토어 안의 state를 컴포너트의 props로 넘겨주는 함수 state값을 파라미터로받아옴)
      +  mapDispatchToProps(액션함수를 컴포넌트의 props로 넘겨주는 함수 dispatch함수를 파라미터로받아옴)
  
    
