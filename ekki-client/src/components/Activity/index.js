import React,{useEffect} from 'react';
import {Title, Container, Button, Body, Loader} from '../shared';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchActivity} from '../../redux/actions/activity';

import ActivityList from './ActivityList';



const Activity = ({getActivities, activityList, fetched }) => {

    useEffect(()=>{
        console.log(!activityList && !fetched)
        if(!activityList){
            getActivities();
        };
    }, [activityList]);

    return(
        <Container>
            <Title>Activity</Title>
            <Body>
            {(activityList) ? <ActivityList activityList={activityList} /> : <Loader/>}
                <Link to="/"><Button>Back</Button></Link>
            </Body>
        </Container>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        getActivities: () => {
            dispatch(fetchActivity());
        }
    };
};

const mapStateToProps = state => {
    return {
        activityList: state.activity.data,
        fetched: state.activity.fetched
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);