import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import SearchIcon from "../assets/Group 19.jpg";
import '../App.css';

const Banner = () => {
    const [search, setSearch] = useState("");
    const [find, setFind] = useState([]);
    const [word, setWord] = useState("");
    useEffect(() => {
        setSearch(["a","b","test", "mb"])
    }, [])
    const findSearch = (e) => {
        setWord(e.target.value)
        const filteredCountries = search.filter(item => item.indexOf(e.target.value) > -1 ? item : null);
        e.target.value.length === 0 ? setFind([]) : setFind(filteredCountries);
    }
    const findResult = () => {
        if (find.length === 0 && word.length > 0) {
            return <div className="find-search">Not Found</div>
        }
        if (find.length > 0) {
            return <div className="find-search">
                {
                    find.map(item => {
                        return <Link key={item} to="#">{item}</Link>
                    })
                }
            </div>
        }
    }
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1679866951595-00747b9ecfc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80)` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                                <h2 style={{width: "809px",height:"75px",top:"268px",left:"291px",fontFamily:"Cormorant Garamond",fontSize:"45px",fontStyle:"italic"}} >Let's find you a place of Dream</h2>
                                <div >
                                <div className="search-area" style={{borderRadius:"50px",height:"48px",width:"541px"}} >

                                    <input value={word} onChange={(e) => findSearch(e)} type="text" className="inp-search" placeholder="Search" />
                                    <img src={SearchIcon} />

                                </div>
                                {findResult()}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;