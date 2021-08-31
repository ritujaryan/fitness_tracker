import React,{useState,useContext} from 'react'
import useStyles from './style'
import {v4 as uuidv4 } from 'uuid'
import {FitnessTrackerContext} from '../../../../context/context';
import {TextField,Typography,Button,Grid,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core'
import {fitnessCategories,weatherCategories,moodCategories,activityCategories,} from '../../../../constants/category1';
const Form = () => {
    const{addAction1} = useContext(FitnessTrackerContext);
    const classes=useStyles();
    const initialState1 ={
        activity:'Running',
        weather:'',
        mood:'Male',
        fitness:'',
    }
    const[formData1,setFormData1] = useState(initialState1);

    const createAction = () =>{
        const action1 ={...formData1,id:uuidv4()}
        addAction1(action1);
        setFormData1(initialState1);
        console.log(action1);
    }
    
    const aCategories = activityCategories;
    const mCategories = moodCategories;
    const fCategories = fitnessCategories;
    const wCategories = weatherCategories;

    return (
        <Grid container spacing={2}>
           <Grid item xs={6}>
               <FormControl fullWidth>
                   <InputLabel>Weather</InputLabel>
                   <Select value ={formData1.weather} onChange={(e) => setFormData1({...formData1,weather:e.target.value})}>
                   {wCategories.map((c) => <MenuItem key ={c.weather} value={c.weather}>{c.weather}</MenuItem>)}
                    </Select>
               </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Activity</InputLabel>
                    <Select value ={formData1.activity} onChange={(e) => setFormData1({...formData1,activity:e.target.value})}>
                    {aCategories.map((c) => <MenuItem key ={c.activity} value={c.activity}>{c.activity}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Mood</InputLabel>
                    <Select value ={formData1.mood} onChange={(e) => setFormData1({...formData1,mood:e.target.value})}>
                    {mCategories.map((c) => <MenuItem key ={c.mood} value={c.mood}>{c.mood}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid> 
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Fitness</InputLabel>
                    <Select value ={formData1.fitness} onChange={(e) => setFormData1({...formData1,fitness:e.target.value})}>
                    {fCategories.map((c) => <MenuItem key ={c.fitness} value={c.fitness}>{c.fitness}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid> 
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createAction}>Create</Button>
        </Grid>
    )
}

export default Form