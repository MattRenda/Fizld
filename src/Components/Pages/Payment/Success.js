import React, {useEffect} from "react";
import {useNavigate,useLocation,useParams} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions';
import * as selectors from '../../Redux/selectors';

const Success = ({updateUser,user}) => {
  const navigate = useNavigate();
  let {id} = useParams();
  let input ={};
  input.product = id.split('-')[1].split('_').join(' ');
  input.email = user.Email;
  input.password = user.Password;
  useEffect(()=>{
    if(input.product && input.email && input.password){
      updateUser(input);
    }
  },[updateUser,input])

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
  user: selectors.getUser(),

})

const mapDispatchToProps = (dispatch) => ({
  updateUser : (input) => dispatch(actions.updateUser(input))
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(Success);
export default withRedux;