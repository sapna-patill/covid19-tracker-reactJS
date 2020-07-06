import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import {PRIMARY_STATISTICS,STATE_NAMES,getStatistic,capitalize} from '../utils/commonfunc';
import { IconButton, Collapse, Box, TableFooter } from '@material-ui/core';

class Row extends React.Component{
    constructor(props){
        super(props)
        this.state={
            code:this.props.code,
            data:this.props.data,
            open:false
        }
    }

    toggleSubTable = ()=> {
        this.setState({open:!this.state.open})
    }

    

    render(){
        return (
            <React.Fragment>
                <TableRow>
                    <TableCell>
                        {this.state.code != 'TT' ? 
                            <IconButton aria-label="expand row" size="small" onClick={this.toggleSubTable}>
                                {this.state.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
                            </IconButton>
                        :""}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {STATE_NAMES[this.state.code]}
                    </TableCell>
                    {PRIMARY_STATISTICS.map((statistics,index) => (
                        <TableCell key={statistics}  align="right">
                            <h4 className={` is-${statistics}`}> {getStatistic(this.state.data , 'delta',statistics) > 0 ? `+`+getStatistic(this.state.data , 'delta',statistics) : ` `} </h4>
                            <h3> {getStatistic(this.state.data , 'total',statistics)} </h3>
                        </TableCell>
                    ))}
                    
                </TableRow>
                {this.state.open && this.state.data.districts  ? 
                <TableRow>
                    <TableCell colSpan={6}>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <Box margin={1} className="subTable">
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>District</TableCell>
                                            <TableCell>C</TableCell>
                                            <TableCell>A</TableCell>
                                            <TableCell>R</TableCell>
                                            <TableCell>D</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        { this.state.data.districts ?  
                                            Object.keys(this.state.data.districts)
                                            .map((district,index)=>(
                                                <TableRow>
                                                    <TableCell component="th" scope="row">
                                                        {district}
                                                    </TableCell>
                                                    {PRIMARY_STATISTICS.map((statistics,index) => (
                                                        <TableCell key={statistics}  align="right">
                                                            <h4 className={` is-${statistics}`}> {getStatistic(this.state.data.districts[district] , 'delta',statistics) > 0 ?`+`+getStatistic(this.state.data.districts[district] , 'delta',statistics):" "} </h4>
                                                            <h3> {getStatistic(this.state.data.districts[district] , 'total',statistics)} </h3>
                                                        </TableCell>
                                                    ))}
                                                    
                                                </TableRow>

                                            ))
                                            
                                        :""
                                        }

                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell colSpan={5}>
                                                End of {STATE_NAMES[this.state.code]} Districts
                                            </TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>

                            </Box>
                        </Collapse>
                    </TableCell>

                </TableRow>:""}
            </React.Fragment>


            // <div>
            //     {this.state.code}

            // </div>
        )
    }
}

export default Row;