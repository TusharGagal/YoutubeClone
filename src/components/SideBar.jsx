/* eslint-disable no-unused-vars */
import React from 'react'
import { Stack } from '@mui/material'
import { categories} from './utils/Constants'


const SideBar = ({selectedCagtegory,setSelectedCagtegory}) => (
    <Stack
        direction="row"
        sx={{
            overflowY:'auto',
            height:{sx:'auto',md:'95%'},
            flexDirection:{sx:"row", md:"column"},
        }}
    >
        {categories.map((category)=>(
            <button
                className='category-btn'
                onClick={()=>setSelectedCagtegory(category.name)} 
                style={{
                    background:category.name===selectedCagtegory && '#FC1503',
                    color:'#fff'
                }}
                key={category.name}
            >
                <span
                style={{
                    color:category.name===selectedCagtegory?'white':'red',
                    marginRight:'15px'
                }}
                >{category.icon}</span>
                <span
                style={{
                    opacity:category.name===selectedCagtegory?'1':'0.8'
                }}
                >{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default SideBar