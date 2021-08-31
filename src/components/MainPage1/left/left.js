import React from 'react'
import{Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import Form from './form/form';
const left = () => {
    return (
        <div>
            <Card>
                <CardHeader style={{textAlign:'center',fontWeight:'bold'}} variant="h1" title='Water Tracker' subheader="Built by Parth and Rituj" />
                <CardContent>
                    <Divider/>
                    <Form/>
                </CardContent>
            </Card>
        </div>
    )
}

export default left