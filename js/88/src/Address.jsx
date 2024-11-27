import { Component } from 'react';

export default function Address(props) {
    const { streetAddress, city, state, zip } = props;

    return (<h1>the address is {streetAddress} {city} {state} {zip}</h1>);
}


export class Address1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { streetAddress, city, state, zip } = this.props;
        return (
            <div>my addres is {streetAddress} {city} {state} {zip}</div>
        )
    }
}