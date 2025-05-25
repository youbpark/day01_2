import { useState } from 'react'
import './Home.css';
import TabBtn from './Tabbtn';

export default function Home() {
  // state를 만들어서 변수와 화면을 연동(데이터바인딩)
  // const : 변경 불가 변수
  const [count, setCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  let arrButtonName = ['탭버튼1', '탭버튼2', '탭버튼3', '탭버튼4']
  const [isSelected, setIsSelected] = useState([true,false,false,false])

  const tabContents = {
    0: (
      <p style={{ color: 'yellow', backgroundColor: 'red' }}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    ),
    1: (
      <p style={{ color: 'white', backgroundColor: 'black' }}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    ),
    2: (
      <p style={{ color: 'black', backgroundColor: 'white' }}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    ),
    3: (
      <p style={{ color: 'violet', backgroundColor: 'blueviolet' }}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    )
  }


  function handleClick() {
    // 첫번째는 사용, 두번째는 변경
    setCount(count + 1)  // =을 사용하여 대입불가 소괄호를 통해 대입
  }

  function hTabClick(tabIndex) {
    // 변수에 넣어줌(state변수)
    setSelectedIndex(tabIndex)
    
    // 변수 안에 값을 바꾸기 위해선 ...으로 분해한 다음 변경하고 다시 넣어줘야함
    let arr = [...isSelected]
    // 반복문을 돌면서 모두 false 
    for(let i = 0; i < arr.length; i++){
      arr[i] = false;
    }
    // 선택한 번호만 true로 변경
    arr[tabIndex] = true;
    // selected
    setIsSelected(arr)
  }

  return (
    <div>
      <div className="home_card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <div className='home_tab_container'>
          {
            // 자바스크립트 코드를 사용하려고
            // map : 배열의 각 요소를 순회하며, 지정된 함수를 실행하고 그 결과를 새로운 배열로 반환
            // map은 변수 3개까지 사용 가능 
            // 매개변수 위치에 따라 역할이 다름
            // 보통 3번째는 에러확인이라 2번째까지 사용함

            arrButtonName.map((item, index) => {
              return (
                <TabBtn key = {item} isSelected = {isSelected[index]} 버튼명={item} 탭클릭={() => { hTabClick(index) }} />
              )
            })
          }
        </div>

        {tabContents[selectedIndex]}
      </div>
    </div>
  );
}
