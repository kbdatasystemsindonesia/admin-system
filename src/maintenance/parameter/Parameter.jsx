import { Component } from "react";
import { NavLink } from "react-router-dom";

class Parameter extends Component {

    componentDidMount() {
    }

    addOnClick = () => {
        window.location = "/parameterAdd";
    }

    render() {
        return(
            <>
                <div className="container-fluid">
                    <h1 className="h3 mb-1 text-gray-800">Parameter</h1>

                    <p className="mb-4" />                   

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Search</h6>
                                </div>

                                <div className="card-body">
                                    <form className="row">
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">Search By</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-6 col-form-label margin-top-rem-1 label-bold" id="inputCode">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="radioSearchBy" id="radioSearchByCode" value="code" defaultChecked  />
                                                            <label className="form-check-label" htmlFor="radioSearchByCode">
                                                                Code
                                                            </label>
                                                        </div>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="radioSearchBy" id="radioSearchByName" value="name" />
                                                            <label className="form-check-label" htmlFor="radioSearchByName">
                                                                Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6" />
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputMaintenanceSelect" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">Parameter</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-6 col-form-label margin-top-rem-1 ">
                                                        <select className="form-control" id="inputMaintenanceSelect" multiple="">
                                                            <option value="mt_gender">Gender</option>
                                                            <option value="mt_religion">Religion</option>
                                                            <option value="mt_id_type">ID Type</option>
                                                            <option value="mt_address_type">Address Type</option>
                                                            <option value="mt_education_level">Education Level</option>
                                                            <option value="mt_title">Title</option>
                                                        </select>
                                                    </div>            
                                                </div>
                                            </div>

                                            <div className="col-md-6" />
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputSearch" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">Search Criteria</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="text" className="col-sm-6 form-control margin-top-rem-1 label-bold" id="inputSearch" placeholder="Search..." />
                                                </div>
                                            </div>

                                            <div className="col-md-6" />
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group row margin-top-rem-1">
                                                <div className="col-md-8" />

                                                <div className="col-md-4">
                                                    <button type="button" className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper">Search</button>
                                                    <NavLink className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" to="/parameterAdd" >Add</NavLink>
                                                </div>
                                            </div>
                                        </div> 
                                    </form>              
                                </div>
                            </div>

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Listing</h6>
                                </div>

                                <div className="card-body">
                                    No Data Found
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr className="label-mandatory">
                                                    <th>Code</th>
                                                    <th>Description</th>
                                                    <th>Is Enable</th>
                                                    <th>Is System</th>
                                                    <th>Is Deleted</th>
                                                </tr>
                                            </thead>

                                            <tfoot>
                                                <tr className="label-mandatory">
                                                    <th>Code</th>
                                                    <th>Description</th>
                                                    <th>Is Enable</th>
                                                    <th>Is System</th>
                                                    <th>Is Deleted</th>
                                                </tr>
                                            </tfoot>
                                            
                                            <tbody>
                                                <tr>
                                                    <td><NavLink to="/parameterDetail" >M</NavLink></td>
                                                    <td>Male</td>
                                                    <td>Yes</td>
                                                    <td>No</td>
                                                    <td>No</td>
                                                </tr>
                                                <tr>
                                                    <td>F</td>
                                                    <td>Female</td>
                                                    <td>Yes</td>
                                                    <td>No</td>
                                                    <td>No</td>
                                                </tr>                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </>
        );
    }
}

export default Parameter;