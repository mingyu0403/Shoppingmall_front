import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class ProfileView extends Component {

    render() {
        let user = this.props.stores.UserStore.user;
        return (
            <div>
                <div>account : {user.account}</div>
                <div>username : {user.name}</div>
                <div>email : {user.email}</div>
                <div>created : {user.created}</div>
                <div>updated : {user.updated}</div>
            </div>
        );
    }
}

export default ProfileView;