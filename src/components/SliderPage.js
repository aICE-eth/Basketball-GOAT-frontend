import { Box} from "@mui/material";
import React, { useState } from "react";
import Category from './Category'

export default function SliderPage(){
    const [stat, setStat] = useState([
        {label:"Points", attr:"pts", value: 50, expl: "Accounts both Total Points \nand PPG together"},
        {label:"Assist", attr:"ast", value: 50, expl: "Accounts both Total Assists \nand APG together"},
        {label:"Rebounds", attr:"reb", value: 50, expl: "Accounts both Total Rebounds \nand RPG together"},
        {label:"Championships", attr:"champ", value: 50, expl: "How many Championships \ndo they have"},
        {label:"Championship \nDifficulty", attr:"champDiff", value: 50, expl: "Accounts of all Championship difficulty \nin each of their Championship run"},
        {label:"Most Valuable \nPlayer (MVPs)", attr:"mvp", value: 50, expl: "How many MVPs do they have"},
        {label:"Defensive Player of \nthe Year (DPOYs)", attr:"dpoy", value: 50, expl: "How many DPOYs they have"},
        {label:"All-NBA teams", attr:"allNba", value: 50, expl: "How many times they starred \nin an All-NBA team"},
    ])
    
    //Setting the state to an array of objects
    //Each objects has it's own props within it that you want to set for each category
    //Create a new component that would use those categories
    //Map through the objects to display the newly made components with each unique obj attributes

    const handleChange = (e, newValue, attr) => {
        setStat((prevValue) => {
            console.log(attr, newValue)
            let arr = [...prevValue]
            arr.forEach((obj)=> {
                if(obj.attr === attr){
                    obj.value = newValue
                }
            });
            return arr;
        })
    }

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
                <li style={{fontSize: '35px', color:'white'}}>GOATED OUT</li> 
             </ul>
             <div style={{
                padding: '30px 30px 0 30px',
                display:'flex', 
            
             }}>
                <Box style={{
                    backgroundColor: 'lightgray',
                    height: '82.5vh',
                    width: '40%',
                    padding: '20px',
                }}>
                    <ul style={{
                        listStyleType:'none',
                        display:'flex',
                        flexDirection: 'column',
                        justifyContent:'space-between',
                        height: '100%'
                    }}>
                        {stat.map((obj)=>{
                            return (
                            <Category 
                            expl={obj.expl.includes('\n') ? obj.expl.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>) : obj.expl}
                            key={obj.attr}
                            handleChange={handleChange}
                            attr={obj.attr}
                            value={obj.value}
                            label={obj.label.includes('\n') ? obj.label.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>) : obj.label}
                            />
                            )
                        })}
                          
                    </ul>
                </Box>
             </div>
        </div>
    )
}

