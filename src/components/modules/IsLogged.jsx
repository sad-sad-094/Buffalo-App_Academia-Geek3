/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


import { Navigate } from 'react-router-dom';



const PrivateRoutes = ({ auth, children }) => {
  if (auth) {
    return children;
  } else {
    return <Navigate to={'/login'} />
  }
}

const PublicRoutes = ({auth, children}) => {
  if (!auth) {
    return children;
  } else {
    return <Navigate to={'/home'} />
  }
}


export { PrivateRoutes, PublicRoutes };
