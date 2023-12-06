import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import App from '../App'

import User from './sidebar/user' 
// import Tweet from './tweet'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)




//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/products",
//         element: <Products />,
//         children: [
//           {
//             path: "",
//             element: <ProductsList />,
//           },
//           {
//             path: ":id",
//             element: <SingleProduct />,
//           },
//         ],
//       },
//     ],
//   },

//   }


