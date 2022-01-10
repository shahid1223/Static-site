import React, { useState, useEffect } from 'react'
import Context from './Context'

const DataContext = (props) => {
    const Host = "http://localhost:9000";

    const [crousaldata, setCrousalData] = useState([]);
    const [aboutdata, setAboutData] = useState([]);
    const [servicesdata, setServicesData] = useState([]);
    const [code, setCode] = useState();
    const [logincode, setLoginCode] = useState([]);
    const [crausalcreated , setCrausalCreated] = useState()
    const [crausaldelete , setCrausalDelete] = useState([])

    useEffect(() => {
        getcrousaldata()
        getaboutdata()
        getservicesdata()
        // localStorage.removeItem("authtoken")
    }, [crausaldelete])

    const getcrousaldata = async () => {
        const response = await fetch(`${Host}/api/crousal/getallcrousal`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        if (json.code === 200) {
            setCrousalData(json.crousal)
        } else {
            alert("Internal Server Error")
        }
    }
    // /api/about/getallabout
    const getaboutdata = async () => {
        const response = await fetch(`${Host}/api/about/getallabout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        if (json.code === 200) {
            setAboutData(json.about)
        } else {
            alert("Internal Server Error")
        }
    }
    // /api/services/getallServices
    const getservicesdata = async () => {
        const response = await fetch(`${Host}/api/services/getallServices`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        if (json.code === 200) {
            setServicesData(json.services)
        } else {
            alert("Internal Server Error")
        }
    }
    // api/contactus/contactus
    const PostFormData = async (fullname, email, textarea) => {
        const response = await fetch(`${Host}/api/contactus/contactus`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullname, email, textarea })
        });

        const formdata = await response.json();
        setCode(formdata.code)
    }
    //Admin
    const logindata = async (email, password) => {
        const response = await fetch(`${Host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const authtoken = await response.json();
        setLoginCode(authtoken)
        localStorage.setItem('authtoken', authtoken.authtoken);
    }

    // Add crousaldata

    const addcrausal = async (heading, text, image, alt) => {
        const response = await fetch(`${Host}/api/crousal/createcrousal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authtoken')
            },
            body: JSON.stringify({ image, alt , heading , text})
        });

        const json = await response.json();
        setCrausalCreated(json.code)
    }

    const DeleteCrausal = async (val) => {
        const response = await fetch(`${Host}/api/crousal/deletecrousal/${val._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authtoken')
            },
        });
        const json = await response.json();
        setCrausalDelete(json)
    }
    return (
        <Context.Provider value={{ crousaldata, aboutdata, servicesdata, PostFormData, code, logindata, logincode, addcrausal , crausalcreated , DeleteCrausal }}>
            {props.children}
        </Context.Provider>
    )
}

export default DataContext
