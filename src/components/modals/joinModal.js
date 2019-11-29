import React, { Component } from 'react';
import Pause1 from "../img/Pause1.jpg";


class JoinModal extends Component {
  
  render(){
    return(
    
      <div className="modal fade" id="joinModal" tabIndex="-1" role="dialog" aria-labelledby="joinLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="contentLabel">Get Exclusive Access</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <img src={ Pause1 } className="img-fluid Pause1 "></img>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="formWrap">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput"> Whats your name?</label>
                                                <input type="text" className="form-control" id="formName" placeholder="Name"></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput2">Where should we send Content?</label>
                                                <input type="text" className="form-control" id="formEmail" placeholder="Email"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary btnUpdates">Send Me Updates!</button>

                    </div>
                </div>
            </div>
        </div>
    
    );
    
    
  }
  
  
  
}

export default JoinModal;