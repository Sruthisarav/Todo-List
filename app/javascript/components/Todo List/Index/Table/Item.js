import React, {Component} from 'react';
import Image from "./Image";

const Item = (props) => {
    return (
        <div className="row pt-4 pb-4">
            <div className="col-md-10 offset-md-1">
                <div>
                    <div className="card px-5">
                        <div className="row">
                            <div className="col-md-4">
                                <Image />
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item