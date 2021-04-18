//OUTER
import {connect} from "react-redux";
import React from 'react'


//LOCAL
import './App.css';
import PageTeacher from "./components/teacherComponents/PageTeacher";


function AppComponent() {

    return <PageTeacher/>

}


const mapStateToProp = state => {
    return {
        state: state.userData
    }
}
const App = connect(mapStateToProp, null)(AppComponent)


export default App;
