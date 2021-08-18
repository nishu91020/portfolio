import React from 'react';
import { Table, Grid, TableCell, TableContainer, TableHead, TableRow, Paper, TableBody, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        maxWidth: 750
    },
    headerElement: {
        padding: '3%',
        fontFamily: 'Atkinson Hyperlegible',
        fontWeight: '800',
        fontSize: '110%'
    },
    outer: {
        padding: '1%'
    },
    element: {
        padding: '3%',
        fontFamily: 'Atkinson Hyperlegible',
        fontSize: '100%'
    }
});

const Education = () => {
    const classes = useStyles();
    function createData (institution, grade, marks, year) {
        return { institution, grade, marks, year };
    }
    const rows = [
        createData('K V MEG & Center,Bangalore', '10th', '10 CGPA', '2015-2016'),
        createData('K V MEG & Center,Bangalore', '12th', '90.4%', '2017-2018'),
        createData('Army Institute of Technology,Pune', 'BE', '8.96 CGPA', '2019-2023')
    ];
    return (
        <Grid item container direction="column" sm={6} xs={12}>
            <h2>Education</h2>
            <TableContainer component={Paper} elevation={3} className={classes.table}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.headerElement} align="center">
                                Institution
                            </TableCell>
                            <TableCell className={classes.headerElement} align="center">
                                Course
                            </TableCell>
                            <TableCell className={classes.headerElement} align="center">
                                Grades
                            </TableCell>
                            <TableCell className={classes.headerElement} align="center">
                                Year
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.year}>
                                <TableCell className={classes.element} align="left">
                                    {row.institution}
                                </TableCell>
                                <TableCell className={classes.element} align="right">
                                    {row.grade}
                                </TableCell>
                                <TableCell className={classes.element} align="right">
                                    {row.marks}
                                </TableCell>
                                <TableCell className={classes.element} align="right">
                                    {row.year}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default Education;
