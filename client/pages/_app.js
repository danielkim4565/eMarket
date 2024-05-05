import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { createContext, useContext } from 'react';
import NavBar from '../components/navbar'

export const CurrentUser = createContext(null);


const AppComponent = ({ Component, pageProps, currentUser }) => {
    console.log(currentUser)
    return (
        <CurrentUser.Provider value={currentUser}> 
            <NavBar/>
            <Component {...pageProps} />
        </CurrentUser.Provider>
    )
}

AppComponent.getInitialProps = async (ctx) => {
    try {
        // const response = await axios.get(`http://${process.env.NEXT_PUBLIC_API_ADDRESS}/api/users/currentUser`)
        // return response.data;
        return { currentUser: 'testuser'};
    } catch (err){
        console.log(err);
        return {};
    }
}

export default AppComponent
