import React from 'react';
import Header from '../../components/Header';
import { Table, TableBody, makeStyles, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import './styles.css';
const useStyles = makeStyles({
    table: {
        maxWidth: 600
    }
});

const Skills = () => {
    const classes = useStyles();
    function createData (institution, grade, marks, year) {
        return { institution, grade, marks, year };
    }
    const rows = [
        createData('K V MEG & center,Bangalore', '10th', '10 CGPA', '2015-2016'),
        createData('K V MEG & center,Bangalore', '12th', '90.4%', '2017-2018'),
        createData('Army Institute of Technology,Pune', '12th', '8.96 CGPA', '2019-2023')
    ];
    return (
        <div className="skillContainer">
            <Header title="Education &amp; Skills" />
            <TableContainer component={Paper} elevation={3} className={classes.table}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Institution</TableCell>
                            <TableCell align="center">Grade</TableCell>
                            <TableCell align="center">percent/CGPA</TableCell>
                            <TableCell align="center">year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.year}>
                                <TableCell align="left">{row.institution}</TableCell>
                                <TableCell align="right">{row.grade}</TableCell>
                                <TableCell align="right">{row.marks}</TableCell>
                                <TableCell align="right">{row.year}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Skills;
