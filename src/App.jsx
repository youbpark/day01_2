
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'



// 변수 : 값을 재활용하기 위해 담는 공간
// 함수 : 코드를 재활용하기 위해 담는 공간
// 컴포넌트 : 화면을 재활용하기 위해 담는 공간 [첫글자는 영어 대문자 필수]

function App() {
  

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
