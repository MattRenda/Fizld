import React, {useEffect} from "react";
import {useNavigate,useLocation,useParams} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions';

const Success = ({updateUser}) => {
  useEffect(()=>{
    //updateUser(product)
  },[])
 const navigate = useNavigate();
    let {id} = useParams();
  let product = id.split(',')[2].split('-').join(' ');
  return (
    <div className="container" style={{width:'100%', height:'90vh',display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <img src='/imgs/Logo.webp' width={'150px'} height={'auto'} alt='fizzld logo' style={{paddingBottom:'50px'}}/>
        <h1>Thanks for your order!</h1>
        <p>
        We appreciate your business!
        If you have any questions, please email
        <a href="mailto:notifications@Fizld.com"> notifications@Fizld.com</a>.
        </p>
        <small style={{cursor:'pointer'}} onClick={()=>navigate('/Account')} className='btn btn-light'>return to account</small>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
})

const mapDispatchToProps = (dispatch) => ({
  updateUser : (input) => dispatch(actions.updateUser(input))
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(Success);
export default withRedux;