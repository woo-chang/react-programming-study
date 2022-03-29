import React from 'react';

import TodaysPlan from './03/02/TodaysPlan';
import ChildComponent from './03/03/ChildComponent';
import PropsComponent from './03/03/PropsComponent';

class App extends React.Component {
  render() {
    return (
      // <div className='body'>
      //   <TodaysPlan />
      // </div>
      // <PropsComponent name="두잇 리액트" />
      // 문자열 외의 값은 중괄호를 이용하여 전달
      <ChildComponent
        boolValue={true}
        numValue={1}
        arrayValue={[1, 2, 3]}
        objValue={{ name: '제목', age: 30 }}
        nodeValue={<h1>노드</h1>}
        funcValue={() => { console.log('메시지'); }}
      />
    );
  }
}

export default App;