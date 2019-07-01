import {observable, action} from "mobx";
import axios from 'axios';

class ShoppingCartStore {
    static __instance = null;
    static getInstance(){
        if(ShoppingCartStore.__instance === null)
            ShoppingCartStore.__instance = new ShoppingCartStore();
        return ShoppingCartStore.__instance;
    }
    constructor(){
        ShoppingCartStore.__instance = this;
    }

    @observable shoppingCartList = null;
    @action getAllByUserId = async (userId) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/shoppingCart/getAll/${userId}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
            });
            if(response.status === 200){
                this.shoppingCartList = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }

    @action addShoppingCart = async (ShoppingCart) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/shoppingCart/add`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: JSON.stringify(ShoppingCart)
            });
            if(response.status === 200){
                return response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }

    @action deleteById = async (id) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/shoppingCart/delete/${id}`,
                method: 'delete',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            return (response.status === 200);
        } catch (e) {
            alert(e.toLocaleString());
            return false;
        }
    }
}

export default ShoppingCartStore.getInstance();