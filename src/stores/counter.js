import axios from 'axios'
const API_URL = import.meta.env.VITE_API_BASE_URL

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        userData: [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                }
            }
        ]
    }),
    getters: {
        doubleCount: (state) => {
            return state.count * 2
        }
    },
    actions: {
        addCount() {
            this.count += 3
        },
        async upCount() {
            await axios(`${API_URL}/users`)
                .then((res) => {
                    this.userData.push(...res.data)
                    console.log(this.userData)
                })
        }
    }
})