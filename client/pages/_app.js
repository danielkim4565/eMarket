import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { createContext, useContext } from 'react';
import NavBar from '../components/navbar'
import https from 'https';
import buildClient from '../api/build-client';

export const CurrentUser = createContext(null);

// export const getServerSideProps = async ({ req }) => {
//     console.log('serverside')
//     try {
//         const response = await axios.get(
//             "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentUser",
//             {
//               headers: req.headers,
//             }
//         );
//         return {
//             props: {
//               currentUser: response.data,
//             },
//         };
//     } catch (err){
//         console.log(err);
//         return {};
//     }
// }

const AppComponent = ({ Component, pageProps, currentUser }) => {
    console.log(currentUser)
    return (
        <CurrentUser.Provider value={currentUser}> 
            <NavBar/>
            <Component {...pageProps} />
        </CurrentUser.Provider>
    )
}

AppComponent.getInitialProps = async appContext => {
    const client = buildClient(appContext.ctx);
    const response = await client.get('/api/users/currentuser');
    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    return {
        pageProps,
        ...response?.data
    };

}

export default AppComponent
