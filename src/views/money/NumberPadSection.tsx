import styled from 'styled-components';
import React, { useState } from 'react';

const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background:white;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    > button{
      font-size: 18px; 
      float: left; 
      width: 20%; 
      height: 56px; 
      border: none;
      margin: 6px;
      &.ok{ 
        width: 46%;
      }
      &.zero{ 
        width: 26%; 
      }
      &.delete {
        width: 26%;
      }
      &.empty {
        width: 46%;
      }
      &.dot {
        width: 26%;
        font-size: 30px;
        font-weight: bold;
      }
      &{
        background: #eee;
        box-shadow: -2px -2px 5px white, 3px 3px 5px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
    }
    @media(max-height:570px) {
      > button {
        height: 40px;
        &.ok {
          height: 80px;
        }
      }
    }
  }
`;

type Props = {
    value: number;
    onChange: (value: number) => void;
    onOk: () => void;
}

const NumberPadSection: React.FC<Props> = (props) => {
    const [output, _setOutput] = useState(props.value.toString());
    const setOutput = (output: string) => {
        let newOutput: string;
        if(output.length > 16) {
          newOutput = output.slice(0, 16);
        } else if(output.length === 0) {
          newOutput = '0';
        } else {
          newOutput = output
        }
        _setOutput(newOutput)
        props.onChange(parseFloat(newOutput))
    }
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if(text === null) {return}
        switch(text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
              if(output === '0') {
                  setOutput(text);
              } else {
                  setOutput(output + text);
              }
              break;
            case '.':
              if(output.indexOf('.') >= 0) {return;}
              setOutput(output + '.');
              break;
            case '删除':
              if(output.length === 1) {
                  setOutput('')
              } else {
                  setOutput(output.slice(0, -1))
              }
              break;
            case '清空':
              setOutput('');
              break;
            case '确定':
              if(props.onOk) {
                props.onOk()
                return;
              }
              break;

        }
    }

    return (
      <Wrapper>
        <div className="output">
          {output}
        </div>
        <div className="pad clearfix"
            onClick={onClickButtonWrapper}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="delete">删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="dot">.</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="zero">0</button>
          <button className="empty">清空</button>
          <button className="ok">确定</button>
        </div>
      </Wrapper>
    )
}

export {NumberPadSection};