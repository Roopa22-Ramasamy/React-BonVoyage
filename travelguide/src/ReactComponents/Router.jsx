import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Accomadation from './Accomadation';
import Login from './Login';
import Profile from './Profile'
import Signup from'./Signup';
import Reset from './Reset';
import Enjoy from './Enjoy';
import Choice from './Choice';
import Transport from './Transport';
import Food from './Food';
import Entertainment from './Entertainment';
import Basicneeds from './Basicneeds';
import Accomodation1 from './Accomodation1';
import Food1 from './Food1';
import Transport1 from './Transport1';
import Basic1 from './Basic1';
import Likedtrips from './Likedtrips';


export default function Router() {
    return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login/>}>Login</Route>
            <Route path='signup' element={<Signup/>}>Signup</Route>
            <Route path='reset' element={<Reset/>}>Reset</Route>
            <Route path='enjoy' element={<Enjoy/>}>Enjoy</Route>
            <Route path='profile' element={<Profile/>}>Profile</Route>
            <Route path='accomadation' element={<Accomadation/>}>Accomadation</Route>
            <Route path='choice' element={<Choice/>}>Choice</Route>
            <Route path='transport' element={<Transport/>}>Transport</Route>
            <Route path='food' element={<Food/>}>Food</Route>
            <Route path='entertainment' element={<Entertainment/>}>Entertainment</Route>
            <Route path='basicneeds' element={<Basicneeds/>}>Basicneeds</Route>
            <Route path='Accomodation1' element={<Accomodation1/>}>Accomodation1</Route>
            <Route path='Food1' element={<Food1/>}>Food1</Route>
            <Route path='Transport1' element={<Transport1/>}>Transport1</Route>
            <Route path='Basic1' element={<Basic1/>}>Basic1</Route>
            <Route path='Likedtrips' element={<Likedtrips/>}>Likedtrips</Route>
            
            
        </Routes> 
      </BrowserRouter>
    )
}
