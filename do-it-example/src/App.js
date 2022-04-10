import React from 'react';

import TodaysPlan from './03/02/TodaysPlan';
import ChildComponent from './03/03/ChildComponent';
import PropsComponent from './03/03/PropsComponent';
import BooleanComponent from './03/03/BooleanComponent';
import ChildProperty from './03/03/ChildProperty';

class App extends React.Component {
  render() {
    return (
      // <div className='body'>
      //   <TodaysPlan />
      // </div>
      // <PropsComponent name="두잇 리액트" />
      // 문자열 외의 값은 중괄호를 이용하여 전달
      <div>
        <ChildComponent
          boolValue={true}
          numValue={1}
          arrayValue={[1, 2, 3]}
          objValue={{ name: '제목', age: 30 }}
          nodeValue={<h1>노드</h1>}
          funcValue={() => { console.log('메시지'); }}
        />
        <div><b>지루할 때:</b><BooleanComponent bored/></div>
        <div><b>즐거울 때:</b><BooleanComponent/></div>

        <ChildProperty>
          <div><span>자식 노드</span></div>
        </ChildProperty>
      </div>
    );
  }
}

export default App;