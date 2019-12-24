export default {
    login
}

import axios from 'axios'

function login(user) {
    return new Promise((resolve, reject) => {
        axios.get('reg.json').then(response => {
            resolve(response.data.find(currentUser => {
                return (currentUser.email === user.email && currentUser.password === user.password)
            }))
        }).catch(err => {
            reject(err);
        });
    })
}
