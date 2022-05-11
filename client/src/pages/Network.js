import Navigation from '../component/Navigation'
import ListProfile from '../component/ListProfile'
import React from 'react'
import {useState, useEffect} from 'react'
import { TextField } from '@mui/material'

function Network(props) {

    const [userList, setUserList] = useState([])
    const [filterList, setFilterList] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("/user/all")
            .then((res) => res.json())
            .then((resJson) => {
                setUserList(resJson)
                setFilterList(resJson)
            })
    }, [])

    const handleInputChange = (e) => {
        const value = e.target.value
        setSearch(value)
    }

    useEffect(() => {
        filterData(search)
    }, [search])

    const filterData = (search) => {
        const searchLowerCase = search.toLowerCase().trim();
        const filteredData = userList.filter(user => {
            return (user.first_name.toString().concat(' ', user.last_name.toString()).toLowerCase().includes(searchLowerCase))
        })
        setFilterList(filteredData)
    }

    return (
        <div>
            <Navigation/>
            <div style={{padding: 100}}>
                <div>
                    <TextField 
                        name="search"
                        label="Search"
                        value={search}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <br></br><br></br>
                </div>
                <div>
                {
                    filterList.map((user) => <ListProfile
                        image_url={user.image_url}
                        first_name={user.first_name}
                        last_name={user.last_name}
                        user_account_id={user.user_account_id}
                    />)
                }
                </div>
            </div>
        </div>

    )
}

export default Network;