import logo from './logo.png';
import search_img from './search.png';
import './Result.css';
import { useState, useEffect } from 'react';
import { Actualtabs } from './Actualtabs'

let availableKeywords = [];
var temp = -1;
var curText = "";

export function Result(props) {
    const [inputText, setInputText] = useState(props.company + " (" + props.companies[props.company] +  ")");
    const [show, setShow] = useState(false);
    const [finance_info_summary_dict, setFinance_info_summary_dict] = useState({});
    const [profile_data, setProfile_data] = useState({});
    const [news, setNews] = useState({});


    availableKeywords = getAvailableKeywords(props.companies);

    useEffect(()=> {
      let API_Call = `/finance_summary/${props.company}`;
      let API_Call_2 = `/profile_data/${props.company}`;
      let API_Call_3 = `/news/${props.company}`;

      fetch(API_Call)
          .then(
              function(response) {
                  return response.json();
              }
          )
          .then(
              function(data) {
                  //console.log(data["finance_summary"]);
                  setFinance_info_summary_dict(data["finance_summary"]);
              }
          )

      fetch(API_Call_2)
          .then(
              function(response) {
                  return response.json();
              }
          )
          .then(
              function(data) {
                  console.log(data["profile_data"]);
                  setProfile_data(data["profile_data"]);
              }
          )
        
        fetch(API_Call_3)
          .then(
              function(response) {
                  return response.json();
              }
          )
          .then(
              function(data) {
                  console.log(data["news"]);
                  setNews(data["news"]);
              }
          )
    }, [props.company])

    function getAvailableKeywords(company_dict) {
      var temp = [];
      for (var key in company_dict) {
        temp.push(key + " (" + company_dict[key] +  ")")
      }
  
      return temp;
    }

    function getCompany(val, company_dict) {
        for (var key in company_dict) {
          if (val.toLowerCase().includes(key.toLowerCase())) {
            return key;
          }
        }
        return "";
      }
  
      function rerouteToResultPage(inputValue) {
        const comp = getCompany(inputValue, props.companies);
        const endpoint = '/' + comp;
        fetch(endpoint, {
          method: 'POST', // or 'PUT' depending on your needs
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: inputValue }),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the Flask backend
            // ...
            console.log(data);
            
            window.location.href = '/' + data["company"];
          })
          .catch((error) => {
            console.error('Error sending data:', error);
          });
      }
  
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
        return <li className = "myListItem2" key={i} id={i} onMouseMove={colorBlue} onMouseLeave={colorWhite}>{list}</li>
      });
  
      return (<ul className = "myList2">
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

      const search_engine2 = document.getElementById("search-engine2");
  
      if (result.length) {
      search_engine2.style.borderRadius = "0px";
      search_engine2.style.borderTopLeftRadius = "15px";
      search_engine2.style.borderTopRightRadius = "15px";    

      return (<>
                <div className="line2" id="line2"></div>
                <div className = "result-box2" id="result-box2">
                  <Display result={result}/>
                </div>
              </>);
      } else {
        search_engine2.style.borderRadius = "15px";
        return (null);
      }
    }
  
    const openResults = (e) => {
      if (e.target.className === "searchbar2" || e.target.className === "myList2") {
        setShow(true);
      } else if  (e.target.className === "search-img2") {
        const inputValue = document.getElementById("input-box2").value;
        const checkText = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase() === inputValue.toLowerCase();
        });
  
        if (checkText.length) {
          const search_engine2 = document.getElementById("search-engine2");
          search_engine2.style.borderRadius = "15px";

          setShow(false);
          setInputText(inputValue);
          curText = e.target.value;
          temp = -1;
          rerouteToResultPage(inputValue);
        }
  
      } else if (e.target.className === "myListItem2") {
        const search_engine2 = document.getElementById("search-engine2");
        search_engine2.style.borderRadius = "15px";

        setShow(false);
        setInputText(e.target.innerText);
        temp = -1;
        curText = e.target.innerText;
        rerouteToResultPage(e.target.innerText);
      } else if (e.target.className === "logo2") {
        window.location.href = '/';
      } else {
        const search_engine2 = document.getElementById("search-engine2");
        search_engine2.style.borderRadius = "15px";
        setShow(false);
        setInputText(document.getElementById('input-box2').value);
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
            curText = document.getElementById("input-box2").value;
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
            document.getElementById("input-box2").value = curText;
            temp = -1;
            liArray[0].scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'start'});
          }
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const liArray = document.getElementsByTagName('li');
        if (show && liArray.length) {
          if (temp === -1) {
            curText = document.getElementById("input-box2").value;
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
            document.getElementById("input-box2").value = curText;
            temp = -1;
            liArray[0].scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'start'});
          }
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        const inputValue = document.getElementById("input-box2").value;
        const checkText = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase() === inputValue.toLowerCase();
        });
  
        if (checkText.length) {
          const search_engine2 = document.getElementById("search-engine2");
          search_engine2.style.borderRadius = "15px";
          setShow(false);
          setInputText(inputValue);
          curText = e.target.value;
          temp = -1;
          rerouteToResultPage(inputValue);
        }
      }
    }  

    return (
      <div className="results" onClick = {openResults}>
        <div className="top">
            <img src={logo} className="logo2" id="logo2" alt="logo"/>
            {/*<h1 className='company'> { props.company } </h1>*/}
            <div className='test'>
                <form className ='search-engine2' id = "search-engine2" action="/" method="GET">
                    <div className = "actual-searchbar2">
                        <img className = "search-img2" id="search-img2" src={search_img} alt="search"/>
                        <input className= "searchbar2" id="input-box2" onChange={handleChange} onKeyDown = {nextSearchPhrase} value={inputText} type="text" placeholder="Enter Company or Ticker" autoComplete="off"/>
                    </div>
                    { show ? <SearchResults/> : null }
                </form>
            </div>
        </div>
        <div className="middle">
          <Actualtabs company = {props.company} finance_info_summary_dict={finance_info_summary_dict} profile_data={profile_data} news={news}></Actualtabs>
        </div>
      </div>
    );
}
