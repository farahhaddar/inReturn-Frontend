import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SearchBar } from "react-native-elements";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
         search:""
        }
    }

    handleSearch=(text)=>{
        this.setState({search:text})
    }
    updateSearch(e) {
        this.setState({ page: 1 });
        this.setState({ search: e });
        fetch(
            "http://192.168.0.119:8000/api/kpiCurrent/" +
            rows +
            "?page= 1" +
            "&empName=" +
            e,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        )
            .then((res) => res.text())
            .then((res) => {
                if (JSON.parse(res).data.length == rows) {
                    this.state.page = this.state.page + 1;
                }
                // let x = JSON.parse(res);
                // if (x.data.length > 1) while (x.data.length > 1) x.data.pop();
                this.setState({ employees: JSON.parse(res) });
                count = JSON.parse(res).data.length;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    

    render() {
        return (
            <View>
                <SearchBar
                    containerStyle={{
                        backgroundColor: "wite",
                        borderTopColor: "transparent",
                        borderBottomColor: "transparent",
                        borderRightColor: "transparent",
                        borderLeftColor: "transparent",
                        borderRadius: 90,
                    }}
                    lightTheme={true}
                    round="true"
                    showLoading={true}
                    inputContainerStyle={{
                        borderWidth: 0,
                        backgroundColor: "rgba(0,0,0,0.1)",
                        borderRadius: 90,
                    }}
                    placeholderTextColor={"rgba(255,25,146)"}
                    placeholder={"Start Typing..."}
                    onChangeText={(text) => { this.handleSearch(text) }}
                     value={this.state.search}

                />

            </View>
        )
    }
}
