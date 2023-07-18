import logo from './logo.png';
import search_img from './search.png';
import './App.css';
import { useState } from 'react';

let availableKeywords = ["Adam", "Ben", "Carol", "Damian", "Stephen", "Curry", "Klay", "Thompson", "Paul", "George", "Lebron", "James", "Adam", "Ben", "Carol", "Damian", "Stephen", "Curry", "Klay", "Thompson", "Paul", "George", "Lebron", "James"];
var temp = -1;
var curText = "";

export function Home() {
  const [inputText, setInputText] = useState("");
  const [show, setShow] = useState(false);

  function colorBlue(e) {
   const liArray = document.getElementsByTagName('li');
   if (temp !== -1 && liArray.length) {
    liArray[temp].style.backgroundColor = "white";
   }
   temp = parseInt(e.target.id);
    e.target.style.backgroundColor = "lightblue";
  }

  function colorWhite(e) {
    e.target.style.backgroundColor = "white";
  }

  function Display({result}) {
    const content = result.map((list,i)=> {
      return <li className = "myListItem" key={i} id={i} onMouseMove={colorBlue} onMouseLeave={colorWhite}>{list}</li>
    });

    return (<ul className = "myList">
              {content}
            </ul>);
  }
  
  function SearchResults() {
    let result = [];
    
    if (inputText) {
      result = availableKeywords.filter((keyword)=>{
        return keyword.toLowerCase().includes(inputText.toLowerCase());
      });
    } else {
      result = availableKeywords;
    }

    if (result.length) {
    return (<>
              <div className="line" id="line"></div>
              <div className = "result-box" id="result-box">
                <Display result={result}/>
              </div>
            </>);
    } else {
      return (null);
    }
  }

  const openResults = (e) => {
    if (e.target.className === "searchbar" || e.target.className === "myList") {
      setShow(true);
    } else if  (e.target.className === "search-img") {
      const inputValue = document.getElementById("input-box").value;
      const checkText = availableKeywords.filter((keyword)=>{
        return keyword.toLowerCase() === inputValue.toLowerCase();
      });

      if (checkText.length) {
        setShow(false);
        setInputText(inputValue);
        curText = e.target.value;
        temp = -1;
      }

    } else if (e.target.className === "myListItem") {
      setShow(false);
      setInputText(e.target.innerText);
      temp = -1;
      curText = e.target.innerText;
    }else {
      setShow(false);
      setInputText(document.getElementById('input-box').value);
      temp = -1;
    }
  }

  const handleChange = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") {
      setShow(true);
      setInputText(e.target.value);
      curText = e.target.value;
      temp = -1;
    }
  };
 
  function nextSearchPhrase(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const liArray = document.getElementsByTagName('li');
      if (show && liArray.length) {
        if (temp === -1) {
          curText = document.getElementById("input-box").value;
          temp = 0;
          liArray[temp].style.backgroundColor = "lightblue";
          e.target.value = liArray[temp].innerText;
          liArray[temp].scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'start'});
        } else if (temp < liArray.length - 1) {
          liArray[temp].style.backgroundColor = "white";
          temp = temp + 1;
          liArray[temp].style.backgroundColor = "lightblue";
          e.target.value = liArray[temp].innerText;
          liArray[temp].scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'start'});
        } else {
          liArray[temp].style.backgroundColor = "white";
          document.getElementById("input-box").value = curText;
          temp = -1;
          liArray[0].scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'start'});
        }
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const liArray = document.getElementsByTagName('li');
      if (show && liArray.length) {
        if (temp === -1) {
          curText = document.getElementById("input-box").value;
          temp = liArray.length - 1;
          liArray[temp].style.backgroundColor = "lightblue";
          e.target.value = liArray[temp].innerText;
          liArray[temp].scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'start'});
        } else if (temp > 0) {
          liArray[temp].style.backgroundColor = "white";
          temp = temp - 1;
          liArray[temp].style.backgroundColor = "lightblue";
          e.target.value = liArray[temp].innerText;
          liArray[temp].scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'start'});
        } else {
          liArray[temp].style.backgroundColor = "white";
          document.getElementById("input-box").value = curText;
          temp = -1;
          liArray[0].scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'start'});
        }
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      const inputValue = document.getElementById("input-box").value;
      const checkText = availableKeywords.filter((keyword)=>{
        return keyword.toLowerCase() === inputValue.toLowerCase();
      });

      if (checkText.length) {
        setShow(false);
        setInputText(inputValue);
        curText = e.target.value;
        temp = -1;
      }
    }
  }

  return (
    <div className="App" onClick = {openResults}>
      <section>
        <img src={logo} className="logo" id="logo" alt="logo"/>
        <form className ='search-engine' id = "search-engine" action="/" method="GET">
        <div className = "actual-searchbar">
          <img className = "search-img" id="search-img" src={search_img} alt="search"/>
          <input className= "searchbar" id="input-box" onChange={handleChange} onKeyDown = {nextSearchPhrase} value={inputText} type="text" placeholder="Enter Company or Ticker" autoComplete="off"/>
        </div>
        { show ? <SearchResults/> : null }
      </form>
      </section>
    </div>
  );
}