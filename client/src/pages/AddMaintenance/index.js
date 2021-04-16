import React from "react";

import React from "react";
import API from "../../../../routes/api/addMaintenance";

classAddMaintenance extends React.Component {
    constructor () {
        super();
        this.state = {
            type: null,
            date: null,
            description: null,
            cost: null
        };
    }

    handleInputChange = event => {
        const {name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    saveAndContinue = event => {
        const {actions} = this.props;
        event.preventDefault();
    }


    render() {
        const { type, date, description, cost } = this.state;
        return (
            <div className="addMaintenance">
                <div className="addMaintenance">
                    <h1> Add a Maintenance Reminder</h1>

                    <form onSubmit={this.saveAndContinue}>
                    <div className="column is-12">
                            <TextBox
                            type="text"
                            name="type"
                            value={type}
                            placeholder="Maintenance Type"
                            onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="column is-12">
                            <TextBox
                            type="text"
                            name="description"
                            value={description}
                            placeholder="Description"
                            onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="column is-12">
                            <TextBox
                            type="text"
                            name="cost"
                            value={cost}
                            placeholder="Maintenance Cost"
                            onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="column is-12">
                            <DatePicker
                            name="date"
                            value={date}
                            icon={["fas", "calendar-alt"]}
                            placeholder="Maintenance Date"
                            onChange={this.handleInputChange}
                            />
                        </div> 
                        
                        <button
                            type="button"
                            className="button button_wide"
                            onClick={this.saveAndContinue}
                        >
                            Add Maintenance Reminder
                        </button>                  
                    </form>
                </div>
            </div>
        );

    }
}