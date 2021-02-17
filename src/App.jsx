import React from 'react';
import a from './img/a.jpg';
import b from './img/b.jpg';
import c from './img/c.jpg';

function App(){
    // let cdate =new Date(2021,5,2,13,25);
let cdate =new Date();
cdate = cdate.getHours();
let ti=new Date().toLocaleTimeString();
const csStyle={};
let pic ={};
let wish = '';
if(cdate>=1 && cdate<12)
{
  wish="Good Morning";
  csStyle.color="green";
  pic=<img src={a} width='1093px' height='473px'/>;
}else if(cdate>=12 && cdate<19)
{
  wish="Good afternoon";
  csStyle.color="Orange";
  pic=<img src={b} width='1093px' height='473px'/>;
  
  
}else{
  wish='Good Night';
  csStyle.color="Black";
  pic=<img src={c} width='1093px' height='473px'/>;
}
return(<>
    <div className='div0'> 
        <div className='div1'>{pic}</div>
        <div className='div2'>
          <h1>Hello  <span style={csStyle}>{wish}</span><br/>{ti}</h1>
        </div>
    </div>
</>
)
}

export default App;