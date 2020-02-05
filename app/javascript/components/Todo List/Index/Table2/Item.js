import React, {Component} from 'react';

const Item = (props) => {
    return (
        <div className="col-md-8">
            <div className="pt-4 pb-4">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className="cta-wrapper">
                    <button type="button" className="btn-outline-primary btn-rounded waves-effect btn cta-btn">
                        View Todo List <i className="fa fa-eye"></i>
                    </button>
                    <button type="button" className="btn-outline-primary btn-rounded waves-effect btn cta-btn">
                        Edit <i className="fa fa-pencil"></i>
                    </button>
                    <button type="button" className="btn-outline-primary btn-rounded waves-effect btn cta-btn">
                        Delete <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item