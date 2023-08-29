import {Box, Button, Divider} from "@mui/material";
import React, { useState, useEffect } from "react";
import Category from './Category';
import Ranking from './Ranking'
import { Link } from "react-router-dom";
import CustomPieChart from "./CustomPieChart";
import { useDataContext } from "./DataContext";

export default function SliderPage(){
    const [stat, setStat] = useState([
        {label:"Points💯", attr:"pts", value: 50, expl: "Accounts both Total Points \nand PPG together"},
        {label:"Assist🅰️", attr:"ast", value: 50, expl: "Accounts both Total Assists \nand APG together"},
        {label:"Rebounds🛹", attr:"reb", value: 50, expl: "Accounts both Total Rebounds \nand RPG together"},
        // {label: "Steals🥷", attr:"stl", value: 50, expl: "All time steals and \nSPG together"},
        // {label: "Blocks🤚", attr:"blk", value: 50, expl: "All time blocks and \nBPG together"},
        {label:"Championships💍", attr:"champ", value: 50, expl: "How many Championships \ndo they have"},
        {label:"Championship \nDifficulty🏆", attr:"champDiff", value: 50, expl: "Accounts of all Championship difficulty \nin each of their Championship run"},
        {label:"Most Valuable \nPlayer (MVP)🏅", attr:"mvp", value: 50, expl: "How many MVPs do they have"},
        {label:"Defensive Player of \nthe Year (DPOY)🎖️", attr:"dpoy", value: 50, expl: "How many DPOYs they have"},
        {label:"Finals MVP (FMVP)🥇", attr:"fmvp", value: 50, expl: "How many FMVPs do they have"},
        {label:"All-NBA teams⛹️", attr:"allNba", value: 50, expl: "How many times they starred \nin an All-NBA team"},
    ])
    
    //Setting the state to an array of objects
    //Each objects has it's own props within it that you want to set for each category
    //Create a new component that would use those categories
    //Map through the objects to display the newly made components with each unique obj attributes

    const handleChange = (e, newValue, attr) => {
        setStat((prevValue) => {
            let arr = [...prevValue]
            arr.forEach((obj)=> {
                if(obj.attr === attr){
                    obj.value = newValue
                }
            });
            return arr;
        })
    }

    const { updateData } = useDataContext();

    const [data, setData] = useState([])

      const handleRankingClick = async () => {
        try {
            const valuesArray = stat.map(item => item.value);
             // Extracting 'value' from each object
            const response = await fetch('https://bball-ranking-api.onrender.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    values: valuesArray,
                }) 
                // Sending the array of 'value' to the backend, must be in an object instead of array
            });
    
            if (response.ok) {
                const rankedPlayers = await response.json();
                updateData(rankedPlayers)
                console.log('Ranked players:', rankedPlayers);
            } else {
                console.error('Failed to fetch data from the server.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const [pieChartData, setPieChartData] = useState([]);

    useEffect(() => {
      // Create pie chart data from the stat array
      const chartData = stat.map((obj) => ({ label: obj.label, value: obj.value }));
      setPieChartData(chartData);
    }, [stat]);


    return(
        <div>
            <ul 
                style={{listStyleType:'none', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '10px 30px 15px 30px',
                backgroundColor: 'black'
                }}>
                <li style={{fontSize: '35px'}}>🏀🐐</li>
                <li style={{fontSize: '35px', color:'white', fontWeight:'500'}}>GOATED OUT</li>
                <li><Link to = '/'><Button variant="contained">HOME</Button></Link></li>
             </ul>
             <div style={{
                padding: '20px 25px 0 25px', 
                display:'flex', 
             }}>
                <Box style={{
                    backgroundColor: 'lightgray',
                    height: '100%',
                    width: '100%',
                    padding: '7px 10px 10px 10px',
                    borderRadius: 15
                }}>
                    <ul style={{
                        listStyleType:'none',
                        display:'flex',
                        flexDirection: 'column',
                        justifyContent:'space-between',
                        height: '100%',
                        gap: 0.4
                    }}>
                        <li><strong>How it works🏀</strong><br />Each category has a scale from 0 to💯. Adjust the values as much as you like with 0 being the least important, and 100 being the most important to becoming the G.O.A.T.🐐🔥 </li>
                        <Divider style={{color:'black', marginTop:'10px'}} />
                        {stat.map((obj)=>{
                            return (
                            <Category 
                            expl={obj.expl.includes('\n') ? obj.expl.split('\n').map((line, index) => 
                            <React.Fragment key={index}>{line}<br /></React.Fragment>) : obj.expl}
                            key={obj.attr}
                            handleChange={handleChange}
                            attr={obj.attr}
                            value={obj.value}
                            label={obj.label.includes('\n') ? obj.label.split('\n').map((line, index) => 
                            <React.Fragment key={index}>{line}<br /></React.Fragment>) : obj.label}
                            />
                            )
                        })}
                        <Link to = '/Ranking'>
                            <Button 
                            variant="contained"
                            onClick={handleRankingClick}
                            style={{marginTop: 10, width:'100%'}}>
                            🔥FIND OUT YOUR TOP 10🔥
                            </Button>
                        </Link> 
                    </ul>
                </Box>
                
                <CustomPieChart data={pieChartData} />

               
             </div>
        </div>
    )
}

