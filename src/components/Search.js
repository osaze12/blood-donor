import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Heading, HStack} from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import React, { useState } from 'react'
import './Search.css'

function Search() {
    const [search, setSearch] = useState({bloodGroup: null, city: null});
    const [error, setError] = useState(false);
    const [searchFinish, setSearchFinish] = useState(null);
    let {bloodGroup, city} = search;

    const handleSearch = () => {
        if (bloodGroup === null || city === null) return;

        const getDatabase = JSON.parse(localStorage.getItem('patient'));
        if (! getDatabase) return;

        const isSearch = getDatabase.filter(data => {
            return data.bloodGroup === bloodGroup && data.city === city.toLowerCase()
        });
         
        
        if (isSearch === null || isSearch.length < 1){
            setError(true);
            setSearchFinish(false);
            return 
        }

        setError(false);
        setSearchFinish(isSearch);
        console.log(searchFinish); 
    }

   
    const searchResults = (searchFinish ? searchFinish.map(data => {
        return <>
                <div className="box">
                    <div className="box-inner" style={{padding:'10px'}}>
                        <h1 ><b>{data.fullname} {data.bloodGroup}</b></h1>
                        <HStack>
                            <p>Gneder: <b>{data.gender}</b></p> 
                            <p>Username: <b>{data.username}</b></p>
                        </HStack>

                        <HStack>
                            <p>Phone no: <b>{data.tel}</b></p>
                            <p>Email: <b>{data.email}</b></p>
                        </HStack>

                        <HStack>
                            <p>Weight: <b>{data.weight}</b></p>
                            <p>City: <b>{data.city}</b> </p>
                        </HStack>

                        <HStack>
                            <p>Message: <b>{data.msg}</b></p>
                            <p>Last Donate Date: <b>{data.lastDonateDate}</b></p>
                        </HStack>   
                        
                    </div>
                </div>
            </>
    }) :null)


    return (
        <div className="search" style={{padding: '15px',background: '#fff', margin:' 20px', borderRadius:'10px'}}>
            <div className="top" style={{margin: "20px 0 30px 0"}}>
                <Heading>Welcome to Donor Search Tool</Heading>
                <p>Enter your Blood Group and City to proceed</p>
            </div>
           
            <div class="inputs" >
                <Select placeholder="--Blood --"
                    value={bloodGroup}
                    onChange={(e) => setSearch({...search, bloodGroup: e.target.value})}>

                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O-">O-</option>
                        <option value="O+">O+</option>
                </Select>

                <Input
                    value={city}
                    onChange={(e) => setSearch({...search, city: e.target.value})}
                    placeholder="Enter the City" />

                <Button padding="20px" 
                    className='search-btn' 
                    background="red.300"  
                    _hover={{bg: 'red.400'}}
                    onClick={handleSearch}>Search </Button>
            </div>
            {error &&
                <p className="error">No search result found</p>
            }
            {searchResults && searchResults}
        </div>
    )
}

export default Search
