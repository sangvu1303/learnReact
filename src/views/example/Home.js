import React from "react";
//import { withRouter } from "react-router";
import Color from "../HOC/Color"; 
import Img from "../../assets/images/Img1.jpg"

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    //HOC: higher order component
    render() {
        console.log('>>> check props: ', this.props)
        return (
            <>
                <div>
                    Hello world from Homepage
                </div>
                <div>
                    <img src={ Img } alt="img" width={ '500px' }/>
                </div>
            </>
            
        )
    }
}

//export default withRouter(Home);
export default Color(Home);