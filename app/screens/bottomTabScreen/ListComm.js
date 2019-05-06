import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";

class ListComm extends Component<Props> {
    // componentDidMount() {
    //     this.props.incNumberDispatch();
    // }
    // dispatch
    render() {
        console.log(this.props);
        return (
            <View>
                <Text />
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        incNumberDispatch: () => {}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListComm);
