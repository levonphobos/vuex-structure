export default {
    getCurrentUsers
}

import axios from 'axios'

function getCurrentUsers() {
    return new Promise((resolve, reject) => {
        axios.get('users.json').then(response => {
            resolve(response.data)
        }).catch(err => {
            reject(err);
        });
    })
}
