import React, { useState } from 'react'

 const BasicForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allEntry, setAllEntry] = useState([]);
    const submitForm = (e) =>{
        e.preventDefault();
        const newEntry={email:email,password:password};

        setAllEntry([...allEntry,newEntry ]);
        console.log(allEntry);
         
    }
  return (
    <>
    <form action='' onSubmit={submitForm}>
        <div>
            <input type='text' name='email' id='email'autoComplete='off' className='name' placeholder='Email or Username'
                value={email}
                onChange={(e) =>setEmail(e.target.value) }
            />
        </div>
        <div className='second'>
            
            
            <input type='password' name='password' id='password'autoComplete='off' className='name' placeholder='Password'
                value={password}
                onChange={(e) =>setPassword(e.target.value) }
            />
        </div>
        <div >
        <button className='button-1' type='Submit'>Login</button>
        </div>
        
    </form>
    <div>
        {
                allEntry.map((curEle) =>{
                    return(
                        <div className='showdetails'>
                            <p>Email :{curEle.email}</p>
                            <p>Password :{curEle.password}</p>
                        </div>
                    )

      }
      )
  }
    </div>

    </>

  )
    
}

export default BasicForm;

