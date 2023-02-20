/* global BigInt */
import styled from 'styled-components';
import './App.css';
import { BiChevronRight, BiAlarmExclamation } from "react-icons/bi";
import { useState } from 'react';

const StBody = styled.div`
margin: 0px 0 0 10px;


position: ${props => props.fixed};
z-index: 0;
width: 100vw;
height: 100vh;



`

const StInput = styled.input`

width: 200px;
height: 40px;
margin-right: 30px;

border-radius: 10px;
border:1px solid;


&:focus {
  /* border:1px solid black;
  outline: none; */
  outline: 1px solid black;
   
}
padding-left: 15px;
`

const Button = styled.button`

background-color: ${props => props.size !== 'large' ? props.btcl : 'transparent'};
border: none;
margin-right: 10px;
color: ${props => props.btcl === '#FAB19F' ? '#D63030' : '#000000'};
width: ${(props) => {
    if (props.size === 'large') {
      return '200px'
    }
    if (props.size === 'medium') {
      return '130px'
    }
    if (props.size === 'small') {
      return '100px'
    }
    return '100px'
  }};
height: ${(props) => {
    if (props.size === 'large') {
      return '50px'
    }
    if (props.size === 'medium') {
      return '45px'
    }
    if (props.size === 'small') {
      return '40px'
    }
    return '40px'
  }};
border-radius: 10px;
font-weight: ${props => props.size === 'large' ? 600 : null};
padding: 10px;
border: ${props => props.size === 'large' ? `3px solid ${props.btcl}` : ''};
cursor: pointer;

&:active {
  opacity:0.6;
}


display:flex;
justify-content:center;
align-items:center;

`



const ModalBackground = styled.div`
-ms-user-select: none; 
   -moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   user-select: none;
width : 100%;
  height : 100%;
  position : fixed;
  background : rgba(228,228,228,0.8);
  
  top: 0;
  left: 0;
  
  /* padding: 30px; */
  
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`
const Modal = styled.div`
background: white;
  /* width: 29rem; */
  /* height: 17rem; */
width: ${props => {
    if (props.modal === 'first') {
      return '29rem'
    }
    if (props.modal === 'second') {
      return '16rem'
    }
  }};
  height: ${props => {
    if (props.modal === 'first') {
      return '17rem'
    }
    if (props.modal === 'second') {
      return '10rem'
    }
  }};
  border-radius: 1rem;
  position: relative;
  padding: 24px;
  

`
const CircleButton = styled.button`
width: 2.5rem;
height: 2.5rem;
border-radius: 50%;
border: 1px solid lightgray;
position: absolute;
top: 1rem;
right: 1rem;

&:hover{
  border:1px solid black;
}
`

const SelectBox = styled.div`

margin-top: 50px;


        width: 97vw;
        height: 200px;

        border: 3px solid #DDDDDD;
        z-index: 0;
        
`
const StList = styled.li`
/* style={{ listStyle: 'none', width: '100%', height: '25%', display: 'flex', alignItems: 'center' } */
list-style: none;
width: 100%;
height: 25%;
display: flex;
align-items: center;


&:hover{
  background-color: lightgray;
   
}
`
const StUl = styled.ul`
border: 1px solid lightgray;
border-radius: 10px;
background-color: white;
height: 150px;
padding:0;
overflow: hidden;
font-size: .8rem;
`
// function MyBtn({ text = '', icon = '', btcl = '', size = '' }) {
//   return (
//     <div>
//       <Button btcl={btcl} size={size}>
//         <span>{text}</span>
//         <span>{icon}</span>
//       </Button>
//     </div>
//   )

// }

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('');

  const [showModal, SetShowModal] = useState(0);

  const green = '#54EFC3';
  const orange = '#FAB19F';

  const [fixed, setFixed] = useState('');

  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);

  const [list, setList] = useState('hide')

  const [selectTitle, setSelectTitle] = useState('리액트');
  const [selectTitle2, setSelectTitle2] = useState('리액트');



  return (<>


    <StBody fixed={fixed} onClick={() => { setShowList(false); setShowList2(false); setList('hide') }}>

      {showModal === 1 ? <ModalBackground>
        <Modal modal='first'>
          <div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
          </div>
          <div style={{ display: 'flex', position: 'absolute', bottom: '20px', right: '10px' }}>
            <Button btcl={orange} onClick={() => {

              SetShowModal(0);
              setFixed('')
            }}>닫기</Button>
            <Button btcl={green}>확인</Button>
          </div>
        </Modal>
      </ModalBackground> : ''}
      {showModal === 2 ? <ModalBackground onClick={(e) => {

        if (e.target === e.currentTarget) {
          SetShowModal(0);
          setFixed('')

        }

      }}>
        <Modal modal='second' >
          <div>닫기 버튼 1개가 있고,<br></br>
            외부 영역을 누르면 모달이 닫혀요.</div>
          <CircleButton onClick={() => {
            SetShowModal(0);
            setFixed('')
          }}>X</CircleButton>

        </Modal>
      </ModalBackground> : ''}



      <div >
        <h1>Button</h1>
        <div style={{
          display: 'flex',
          marginTop: '40px'
        }}>
          {/* large 200 50
          mediun 130 45
          small 100 40 */}

          <Button btcl={green} size='large' onClick={() => {
            alert('버튼을 만들어보자')
          }}> Large Primary Button <BiChevronRight></BiChevronRight> </Button>
          <Button btcl={green} size='medium' >Medium</Button>
          <Button btcl={green} size='small'>Small</Button>
          {/* <MyBtn text={'나만의 버튼'} icon={'🌸'}></MyBtn>
          <MyBtn text={'나만의 버튼'} icon={<BiChevronRight></BiChevronRight>}></MyBtn>
          <MyBtn text={'나만의 버튼'} ></MyBtn> */}

        </div>
        <div style={{
          display: 'flex',
          marginTop: '10px'
        }}>
          <Button btcl={orange} size='large' onClick={() => {
            prompt('어렵니?')
          }}>Large Negative Button <BiAlarmExclamation></BiAlarmExclamation> </Button>
          <Button btcl={orange} size='medium'>Medium</Button>
          <Button btcl={orange} size='small'>Small</Button>
        </div>
      </div>


      <div>
        <h1>Input</h1>
        <div style={{
          display: 'flex',
          // alignItems: 'center',





        }}>
          <label style={{ display: 'flex', alignItems: 'center' }}>이름</label> <StInput id='nameVal' type='text' value={name} onChange={(e) => {
            // const value = e.target.value.replaceAll(/[0-9]/g, '')
            setName(e.target.value)
            // setName(value)
          }}></StInput>
          <label style={{ display: 'flex', alignItems: 'center' }}>가격</label> <StInput
            id='priceVal' value={price} onChange={(e) => {

              const value = e.target.value.replaceAll(/[^0-9]/g, '')

              const removedCommaValue = BigInt(value.replaceAll(",", ""));
              setPrice(removedCommaValue.toLocaleString());




            }} type='text' autoComplete='off'></StInput> <Button size='small' btcl={green} onClick={() => {
              if (!name || !price) {
                alert('공백채워라')
              } else {
                alert(`name:${name}, price:${price.replaceAll(',', '')}`)
                setName('')
                setPrice('')
              }

            }}> 저장</Button>

        </div>



      </div>
      <div>
        <h1>Modal</h1>
        <div style={{ display: 'flex' }}>
          <Button btcl={green} size='small' onClick={() => {
            setFixed('fixed');
            SetShowModal(1);
          }}>open modal</Button>
          <Button btcl={orange} size='large' onClick={() => {
            SetShowModal(2);
            setFixed('fixed');
          }}>open modal</Button>
        </div>

      </div>
      <SelectBox className={list}>
        <h1>Select</h1>
        <div style={{
          display: 'flex',
        }}>
          <div style={{ marginRight: '10px', }}>
            <button onClick={(e) => {
              setShowList(!showList);
              setShowList2(false);
              setList('')

              e.stopPropagation();

            }} style={{ backgroundColor: 'inherit', border: '1px solid lightgray', width: '300px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 30px' }}>{selectTitle}<div>▼</div></button>
            {showList === true ?
              <StUl>
                <StList onClick={() => { setSelectTitle('리액트') }}>&nbsp;&nbsp;&nbsp; 리액트</StList>
                <StList onClick={() => { setSelectTitle('자바') }}>&nbsp;&nbsp;&nbsp; 자바</StList>
                <StList onClick={() => { setSelectTitle('스프링') }}>&nbsp;&nbsp;&nbsp; 스프링</StList>
                <StList onClick={() => { setSelectTitle('리액트 네이티브') }}>&nbsp;&nbsp;&nbsp; 리액트 네이티브</StList>
              </StUl> : null}



          </div>
          <div>
            <button onClick={(e) => {
              setShowList2(!showList2);
              setShowList(false);
              e.stopPropagation();
              setList('hide')

            }} style={{ backgroundColor: 'inherit', border: '1px solid lightgray', width: '300px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 30px' }}>{selectTitle2}<div>▼</div></button>
            {showList2 === true ? <StUl>
              <StList onClick={() => { setSelectTitle2('리액트') }}>&nbsp;&nbsp;&nbsp; 리액트</StList>
              <StList onClick={() => { setSelectTitle2('자바') }}>&nbsp;&nbsp;&nbsp; 자바</StList>
              <StList onClick={() => { setSelectTitle2('스프링') }}>&nbsp;&nbsp;&nbsp; 스프링</StList>
              <StList onClick={() => { setSelectTitle2('리액트 네이티브') }}>&nbsp;&nbsp;&nbsp;리액트 네이티브</StList>
            </StUl> : null}

          </div>
        </div>


      </SelectBox>

    </StBody >
  </>
  );
}






export default App;

