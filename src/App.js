
import './App.css';
// import { createBrowserRouter, Routes, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home';
// import About from './pages/About';
// import Rootlayout from './pages/Rootlayout';
// import Helplayout from './pages/Helplayout';
// import Faq from './pages/Faq';
// import Contact from './pages/Contact';
// import Notfound from './pages/Notfound';
// import Careerlayout from './pages/Careerlayout';
// import Careers, { careersloader } from './pages/Careers';
// import CareerDetails from './pages/CareerDetails';


// //createbrowserrouter
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Rootlayout />}>
//          <Route index element={<Home />}/>
//          <Route path='about' element={<About />}/>
//        </Route>
//   )
// )

// // Nested Routes and Layout
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Rootlayout />}>
//       <Route index element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='help' element={<Helplayout />}>
//         <Route path='faq' element={<Faq />} />
//         <Route path='contact' element={<Contact />} />
//       </Route>
//     </Route>
//   )
// )

// // Custom 404 error
// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Rootlayout />}>
//         <Route index element={<Home />} />
//         <Route path='about' element={<About />} />
//         <Route path='help' element={<Helplayout />}>
//           <Route path='faq' element={<Faq />} />
//           <Route path='contact' element={<Contact />} />
//         </Route>
//         <Route path='*' element={<Notfound />} />
//       </Route>
//     )
//   )


// // Loader
// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Rootlayout />}>
//         <Route index element={<Home />} />
//         <Route path='about' element={<About />} />
//         <Route path='help' element={<Helplayout />}>
//           <Route path='faq' element={<Faq />} />
//           <Route path='contact' element={<Contact />} />
//         </Route>
//         <Route path='careers' element={<Careerlayout />}>
//             <Route index element={<Careers />} loader={careersloader}/>
//         </Route>

//         <Route path='*' element={<Notfound />} />
//       </Route>
//     )
//   )


// // Route parameter
// const router = createBrowserRouter(
//       createRoutesFromElements(
//         <Route path='/' element={<Rootlayout />}>
//           <Route index element={<Home />} />
//           <Route path='about' element={<About />} />
//           <Route path='help' element={<Helplayout />}>
//             <Route path='faq' element={<Faq />} />
//             <Route path='contact' element={<Contact />} />
//           </Route>
//           <Route path='careers' element={<Careerlayout />}>
//               <Route index element={<Careers />} loader={careersloader}/>
//           </Route>
//         <Route path=":id" element={<CareerDetails />}>
//         </Route>
//           <Route path='*' element={<Notfound />} />
//         </Route>
//       )
//     )

// function App() {
//   return (
    // // simple browser router exampl
    // <BrowserRouter>
    // <header>
    //   <nav>
    // <h2>das</h2>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="about">About</NavLink>
    //   </nav>
    // </header>
    // <main>
    //   <Routes>
    //     <Route path='/' element={<Home />}/>
    //     <Route path='about' element={<About />}/>
    //   </Routes>
    // </main>
    // </BrowserRouter>

    // //createbrowserrouter
    // <RouterProvider router={router} />


// // Nested Routes and Layout
    // <RouterProvider router={router} />

// // Custome 404 error
    // <RouterProvider router={router} />

// // Looaders
    // <RouterProvider router={router} />

    // // Route parameters
    // <RouterProvider router={router} />
    function App() {
      return (
         <>
            <div className='container'>
                <h1></h1>
                <div className='plusemine'>
                  <a className='minus' title='Decrement'><span> - </span></a>
                  <input name='quntity' type='text' value='0'/>
                  <a className='plus' title='Increment'><span> + </span></a>


                </div>
            </div>
        </>
  )
}

export default App;
