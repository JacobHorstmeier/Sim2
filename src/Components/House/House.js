import React from 'react';
import { connect } from 'react-redux';


 function House (){
    return (
        <div>
            
        </div> 
    )
}

function mapStateToProps (state) {
    return {
        
              id: state.id,
              name: state.name,
              address: state.address,
              city: state.city,
              state: state.state,
              zip: state.zip,
              img: state.img,
              mortgage: state.mortgage,
              rent: state.rent
          
    }
}

export default connect(mapStateToProps)(House)