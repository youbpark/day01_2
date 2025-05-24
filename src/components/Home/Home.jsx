import { useState } from 'react'
import'./Home.css';
import TabBtn from './Tabbtn';

export default function Home() {
  // state를 만들어서 변수와 화면을 연동(데이터바인딩)
  // const : 변경 불가 변수
  const[count, setCount] = useState(0);
  const[selectedIndex, setSelectedIndex] = useState(0);

  function handleClick(){ 
    // 첫번째는 사용, 두번째는 변경
    setCount(count + 1)  // =을 사용하여 대입불가 소괄호를 통해 대입
  }

  function hTabClick(tabIndex){
    // 변수에 넣어줌(state변수)
    setSelectedIndex(tabIndex)
  }

  return(
    <div>
      <div className="home_card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <div className='home_tab_container'>
            <TabBtn 버튼명={'탭1'} 탭클릭={()=>{hTabClick(0)}}/>
            <TabBtn 버튼명={'탭2'} 탭클릭={()=>{hTabClick(1)}}/>
            <TabBtn 버튼명={'탭3'} 탭클릭={()=>{hTabClick(2)}}/>
            <TabBtn 버튼명={'탭4'} 탭클릭={()=>{hTabClick(3)}}/>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save {selectedIndex}
        </p>
      </div>
    </div>
  );
}
