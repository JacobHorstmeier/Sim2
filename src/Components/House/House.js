import React from 'react';
import { connect } from 'react-redux';


 function House (props){
     console.log(props)
     let answers = props.answers.map((e,i) => {
         return(
             <div key={i}>{e}</div> 
         )
     })
    return (
        <div>
            <h1>Houses</h1>
            {answers}
        </div> 
    )
}

function mapStateToProps (state) {
    return {
        
             answers:state.answers
          
    }
}

export default connect(mapStateToProps)(House)