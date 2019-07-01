import {observable, action} from "mobx";
import axios from 'axios';

class ProductStore {
    static __instance = null;
    static getInstance(){
        if(ProductStore.__instance === null)
            ProductStore.__instance = new ProductStore();
        return ProductStore.__instance;
    }
    constructor() {
        ProductStore.__instance = this;
    }

    @observable items = null;
    @action fetchItems = async () => {
        try {
            this.items = null;
            let response = await axios({
                url: 'http://localhost:8080/product/getAll',
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            console.log(response);
            if(response.status === 200 && response.data !== ''){
                this.items = response.data;
            }

        } catch (e) {
            alert(e.toLocaleString());
        }
    }

    @observable item = null;
    @action fetchItem = async (id) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/product/get/${id}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            console.log(response);
            if(response.status === 200)
                this.item = response.data;
        } catch (e) {
            alert(e.toLocaleString());
        }
    }

    @action addComment = async (comment) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/comment/add`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: JSON.stringify(comment)
            });
            console.log(response);
            if(response.status === 200)
                console.log(response.data);
                return response.data;
        } catch (e) {
            alert(e.toLocaleString());
        }
    }

}

export default ProductStore.getInstance();