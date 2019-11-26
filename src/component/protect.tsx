import React from 'react';
import { Redirect, Route } from 'react-router-dom';


// const component: any;
export const PrivateRoute = ({})
// export const PrivateRoute = ({ component: Component, ...rest}) => (
//     <Route
//     {...rest}
//     render={props =>
//     localStorage.getItem('authToken') ? (
//         <Component {...props} />
//     ) : (
//         <Redirect
//         to={{
//             pathname:"/login",
//             state: {from: props.location}
//         }}
//         />
//     )
// }
// />
// );


export default PrivateRoute;