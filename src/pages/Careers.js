import React, { useState } from 'react'
import { useLoaderData, Link } from 'react-router-dom'


export default function Careers() {
  const posts = useLoaderData()
  const [text, setText] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function saveData() {
       if (!text || !body) {
          setError('Please fill in all fields');
          return;
      }
      const data = { text, body };

      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error('Failed to save data');
          }
          setSuccessMessage('Record added successfully');
          setText('');
          setBody('');
      })
      .catch((error) => {
          setError('An error occurred while saving data');
          console.error('Error:', error);
      });
  }

  return (
    <div className='careers'>
      <h1>add new record</h1>
      <form>
                <label><span>text :</span>
                <input type='text' name='text' value={text} onChange={(e)=>{setText(e.target.value)}} required/>
                </label>
                <label><span>message :</span>
                <input name='message' value={body} onChange={(e)=>{setBody(e.target.value)}} required/>
                </label>
                <button onClick={saveData}>Submit</button>
            </form>
      {posts.map(post => (
        
        <Link to="/" key={post.id}>
            {/* <p>ye raha id : {post.id}</p> */}
            <p><strong>ye hai text : </strong>{post.text}</p>
            <p><strong>ye thoda details : </strong>{post.body}</p>
            <p><strong>posted ID : </strong>{post.id}</p>
        </Link>        
      ))}
    </div>
  )
}


export const careersloader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()  
}


// import React, { useState } from 'react';
// import axios from 'axios';

// function PostForm() {
//     const [text, setText] = useState('');
//     const [body, setBody] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const saveData = async () => {
//         if (!text || !body) {
//             setErrorMessage('Please fill in all fields');
//             return;
//         }

//         const data = { text, body };

//         try {
//             const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data, {
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (response.status === 201) {
//                 setSuccessMessage('Record added successfully');
//                 setText('');
//                 setBody('');
//             } else {
//                 throw new Error('Failed to save data');
//             }
//         } catch (error) {
//             setErrorMessage('An error occurred while saving data');
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Post Form</h2>
//             {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//             {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//             <form onSubmit={(e) => { e.preventDefault(); saveData(); }}>
//                 <div>
//                     <label htmlFor="text">Text:</label>
//                     <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
//                 </div>
//                 <div>
//                     <label htmlFor="body">Body:</label>
//                     <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default PostForm;
