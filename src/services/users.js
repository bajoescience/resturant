import axios from "axios"

const baseUrl = 'http://localhost:3001/users'

// Get users from database
const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

// Get single User from database
const getOne = async id => {
    const res = await axios.get(baseUrl + '/' + id)
    return res.data
}


// Delete User from database
const update = async (id, resource) => {
    const res = await axios.put(baseUrl + '/' + id, resource)
    return res.data
}

const create = async resource => {
    const res = await axios.post(baseUrl, resource)
    return res.data
}

export default {getAll, getOne, update, create}