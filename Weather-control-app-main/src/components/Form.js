import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="City" required />
                <button type="submit">get weather</button>
            </form>
        );
    }
}

export default Form;
