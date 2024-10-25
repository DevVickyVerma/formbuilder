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

        console.log(field, "fieldfieldfield");

        switch (field.type) {
            case 'header':
                return <h1 key={field.name} className='mt-4'>{field.label}</h1>;

            case 'text':
            case 'number':
            case 'date':
            case 'file':
                return (
                    <div key={field.name} className="form-group">
                        <div>
                            <label className='input-label'>
                                {field.label}

                                {field.required && (
                                    <span class="text-danger">*</span>
                                )}
                            </label>
                            <input
                                type={field.subtype || field.type} // Handle the input type
                                name={field.name}
                                className={`form-controll ${field.className}`}
                                onChange={this.handleChange}
                                placeholder={field.placeholder || "Start typing..."}

                            />
                        </div>

                    </div>
                );

            case 'select':
                return (
                    <div key={field.name} className="form-group">
                        <div>
                            <label className='input-label'>{field.label}</label>
                            <select name={field.name} className={`form-controll ${field.className}`} onChange={this.handleChange}>
                                {field.values.map((option) => (
                                    <option key={option.value} value={option.value} selected={option.selected}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                );

            case 'checkbox-group':
                return (
                    <div key={field.name} className="form-group">
                        <div>
                            <label className='input-label'>{field.label}</label>
                            {field.values.map((checkbox) => (
                                <div key={checkbox.value} className='form-check'>
                                    <input
                                        type="checkbox"
                                        name={field.name}
                                        value={checkbox.value}
                                        className={`form-check-input ${field.className}`}
                                        defaultChecked={checkbox.selected}
                                        onChange={this.handleChange}
                                        placeholder={field.placeholder || "Start typing..."}

                                    />
                                    <label className='input-label'>{checkbox.label}</label>
                                </div>
                            ))}
                        </div>

                    </div>
                );

            case 'radio-group':
                return (
                    <div key={field.name} className="form-group">
                        <div>
                            <label className='input-label'>{field.label}</label>
                            {field.values.map((radio) => (
                                <div key={radio.value} className='form-check'>
                                    <input
                                        type="radio"
                                        name={field.name}
                                        value={radio.value}
                                        className={`form-check-input ${field.className}`}
                                        onChange={this.handleChange}
                                        placeholder={field.placeholder || "Start typing..."}

                                    />
                                    <label className='input-label'>{radio.label}</label>
                                </div>
                            ))}
                        </div>

                    </div>
                );

            case 'textarea':
                return (
                    <div key={field.name} className="form-group">
                        <div>
                            <label className='input-label'>{field.label}</label>
                            <textarea
                                name={field.name}
                                className={`form-controll ${field.className}`}
                                onChange={this.handleChange}
                                placeholder={field.placeholder || "Start typing..."}

                            />
                        </div>

                    </div>
                );

            case 'autocomplete':
                return (
                    <div key={field.name} className="form-group">
                        <div>
                            <label className='input-label'>{field.label}</label>
                            <input
                                type="text"
                                name={field.name}
                                className={`form-controll ${field.className}`}
                                onChange={this.handleChange}

                                placeholder={field.placeholder || "Start typing..."}
                            // placeholder="Start typing..."
                            />
                        </div>

                    </div>
                );

            case 'button':
                return (

                    <div key={field.name} className="form-group">
                        <div>
                            <button key={field.name} type={field.subtype} className="btn btn-primary">
                                {field.label}
                            </button>
                        </div>
                    </div>
                );

            case 'hidden':
                return (
                    <input
                        type="hidden"
                        name={field.name}
                    />
                );

            case 'paragraph':
                return (

                    <div key={field.name} className="form-group">
                        <div>
                            <label className='input-label'>
                                {field.label}

                                {field.required && (
                                    <span class="text-danger">*</span>
                                )}
                            </label>
                            {/* <input
                                type={field.subtype || field.type} // Handle the input type
                                name={field.name}
                                className={`form-controll ${field.className}`}
                                onChange={this.handleChange}
                                placeholder={field.placeholder || "Start typing..."}

                            /> */}

                            <p key={field.name}
                                className=''
                            >{field.label}</p>
                        </div>

                    </div>
                )





            default:
                return null;
        }
    };


    render() {
        const { formDataList } = this.props;

        return (
            <div>
                {formDataList ? (
                    <div className='c-form-continer'>
                        <div className='c-form-sub-continer'>
                            <div className='card'>
                                <div className='card-header genrated-form-header'>
                                    Your Dynamic Form
                                </div>
                                <div className='card-body'>
                                    <form onSubmit={this.handleSubmit}>
                                        {formDataList.map((field) => this.renderFormElement(field))}
                                        <button className='btn btn-primary mt-4' type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <p>No form data available.</p>
                )}
            </div>
        );
    }
}

export default MakeDynamicform;
