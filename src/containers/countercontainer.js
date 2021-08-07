import React from 'react';
import Counter from '../components/counter';
import { connect} from 'react-redux';
import {increase, decrease} from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};

const mapStateToProps = state => ({
    number: state.counter.number,
});

const mapDispathchToPros = dispatch =>({
    increase: ()=>{
       dispatch(increase());
    },
    decrease: ()=>{
        dispatch(decrease())
    },
});

/**
export default connect(
    state => ({
         number: state.counter.number,
    }),
    dispatch =>({
         bindActionCreators({
             increase, decrease,
         }),
         dispatch, 
    }),
)(CounterContainer)
 */


export default connect( mapStateToProps,mapDispathchToPros,)(CounterContainer);