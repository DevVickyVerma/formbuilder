import React, { Component } from 'react';

class MakeDynamicform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.formData);
    };
    renderFormElement = (field) => {
        switch (field.type) {
            case 'header':
                return <h1 key={field.name}>{field.label}</h1>;
    
            case 'text':
            case 'number':
            case 'date':
            case 'file':
                return (
                    <div key={field.name} className="form-group">
                        <label>{field.label}</label>
                        <input
                            type={field.subtype || field.type} // Handle the input type
                            name={field.name}
                            className={field.className}
                            onChange={this.handleChange}
                        />
                    </div>
                );
    
            case 'select':
                return (
                    <div key={field.name} className="form-group">
                        <label>{field.label}</label>
                        <select name={field.name} className={field.className} onChange={this.handleChange}>
                            {field.values.map((option) => (
                                <option key={option.value} value={option.value} selected={option.selected}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                );
    
            case 'checkbox-group':
                return (
                    <div key={field.name} className="form-group">
                        <label>{field.label}</label>
                        {field.values.map((checkbox) => (
                            <div key={checkbox.value}>
                                <input
                                    type="checkbox"
                                    name={field.name}
                                    value={checkbox.value}
                                    defaultChecked={checkbox.selected}
                                    onChange={this.handleChange}
                                />
                                <label>{checkbox.label}</label>
                            </div>
                        ))}
                    </div>
                );
    
            case 'radio-group':
                return (
                    <div key={field.name} className="form-group">
                        <label>{field.label}</label>
                        {field.values.map((radio) => (
                            <div key={radio.value}>
                                <input
                                    type="radio"
                                    name={field.name}
                                    value={radio.value}
                                    onChange={this.handleChange}
                                />
                                <label>{radio.label}</label>
                            </div>
                        ))}
                    </div>
                );
    
            case 'textarea':
                return (
                    <div key={field.name} className="form-group">
                        <label>{field.label}</label>
                        <textarea
                            name={field.name}
                            className={field.className}
                            onChange={this.handleChange}
                        />
                    </div>
                );
    
            case 'autocomplete':
                return (
                    <div key={field.name} className="form-group">
                        <label>{field.label}</label>
                        <input
                            type="text"
                            name={field.name}
                            className={field.className}
                            onChange={this.handleChange}
                            placeholder="Start typing..."
                        />
                    </div>
                );
    
            case 'button':
                return (
                    <button key={field.name} type={field.subtype} className="btn btn-primary">
                        {field.label}
                    </button>
                );
    
            case 'hidden':
                return (
                    <input
                        type="hidden"
                        name={field.name}
                    />
                );
    
            case 'paragraph':
                return <p key={field.name}>{field.label}</p>;
    
            default:
                return null;
        }
    };
    

    render() {
        const { formDataList } = this.props;

        return (
            <div>
                {formDataList ? (
                    <form onSubmit={this.handleSubmit}>
                        {formDataList.map((field) => this.renderFormElement(field))}
                        <button className='btn btn-primary' type="submit">Submit</button>
                    </form>
                ) : (
                    <p>No form data available.</p>
                )}
            </div>
        );
    }
}

export default MakeDynamicform;
