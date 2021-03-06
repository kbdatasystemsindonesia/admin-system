import { Component } from "react";
import TableTemplate from "../TableTemplate";
import { BsSearch as Search, BsTrash as Trash } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { MdDone, MdModeEdit } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";

class CountryDetail extends Component {
    //saat dipanggil, langsung render awal dengan country list yang kosong karena belum ada pencarian
    constructor(props) {
        /*save state for searched keywords:
         * option 1: onChange searched immediately
         * option 2: onSubmitted searched
         * option 3: both
         * */
        super(props);
        //console.log(this.props.params);
        this.state = {
            countryList: [],
            idChosen: this.props.params.id,
            countryChosen: {},
        };
        //tableContent must array of array of string
    } //saat setelah dirender, seorang dapat mencari country dengan mengetik dalam input text, nama / code country.
    componentDidUpdate(prevProps, prevState, snapShot) {
        //
        //console.log(this.state.countryChosen);
    }
    componentDidMount() {
        // const script = document.createElement("script");

        // script.src = "js/kb.js";
        // script.async = true;

        // document.body.appendChild(script);

        // const scriptKb1 = document.createElement("script");

        // scriptKb1.src = "js/kb1.js";
        // scriptKb1.async = true;

        // document.body.appendChild(scriptKb1);

        // document.addEventListener("readystatechange", function (event) {
        //   if (document.readyState === "complete") {
        //     document.body.setAttribute("data-theme", "colored");
        //   }
        // });
        //dipanggil pas render pertama selesai
        //console.log(this.state.countryList);
        fetch("/countryData.json")
            .then((response) => response.json())
            .then((result) => {
                //console.log(result);
                for (let i = 0; i < result.length; i++) {
                    var obj = result[i];
                    if (obj.code === this.state.idChosen) {
                        this.setState({
                            countryList: result,
                            countryChosen: obj,
                        });
                        break;
                    }
                }
            });
    }
    render() {
        return (
            <>
                {this.state.countryList.length > 0 ? (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card shadow mb-4">
                                    <h1 className="card-header p-1 col-12 text-dark text-center bg-shadow-dark ">Country Detail</h1>
                                    <div className="card-body">
                                        <form>
                                            <div className="row gx-0 align-items-center col-md-12 bg-ginger">
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label ">
                                                            Country Code
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.countryChosen.code == null ? "" : `${this.state.countryChosen.code}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
                                                            Name
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.countryChosen.name == null ? "" : `${this.state.countryChosen.name}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 col-md-12 bg-light align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Description
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.countryChosen.description == null ? "" : `${this.state.countryChosen.description}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Alternate Description
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.countryChosen.alternate_description == null ? "" : `${this.state.countryChosen.alternate_description}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 col-md-12 bg-ginger align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label ">
                                                            Is Default
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.countryChosen.default_value == null ? "" : `${this.state.countryChosen.default_value}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label"></label>
                                                        <label className="col-sm-1 col-form-label"></label>
                                                        <label className="col-sm-7 col-form-label"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 align-items-center col-md-12 bg-light">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label ">
                                                            Is System
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.countryChosen.system == null ? "" : `${this.state.countryChosen.system}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
                                                            Is Delete
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.countryChosen.deleted == null ? "" : `${this.state.countryChosen.deleted}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gx-0 row col-md-12 bg-ginger align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label">
                                                            Is Approved
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.countryChosen.approved == null ? "" : `${this.state.countryChosen.approved}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputName" className="col-sm-3 col-form-label "></label>
                                                        <label className="col-sm-1 col-form-label "></label>
                                                        <label className="col-sm-7 col-form-label "></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gx-0 row col-md-12 bg-light align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Approved By
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.countryChosen.approved_by == null ? "" : `${this.state.countryChosen.approved_by}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label ">
                                                            Approved Date
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.countryChosen.approved_date == null ? "" : `${this.state.countryChosen.approved_date}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 col-md-12 bg-ginger align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label ">
                                                            Created By
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.countryChosen.created_by == null ? "" : this.state.countryChosen.created_by}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label ">
                                                            Created Date
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.countryChosen.created_date == null ? "" : `${this.state.countryChosen.created_date}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 col-md-12 bg-light align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label ">
                                                            Created IP
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.countryChosen.created_ip_address == null ? "" : `${this.state.countryChosen.created_ip_address}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label ">
                                                            Created Content Type
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">application/json</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gx-0 row col-md-12 bg-ginger align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label ">
                                                            Updated By
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.countryChosen.updated_by == null ? "" : `${this.state.countryChosen.updated_by}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label ">
                                                            Updated Date
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.countryChosen.updated_date == null ? "" : `${this.state.countryChosen.updated_date}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gx-0 row col-md-12 bg-light align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label ">
                                                            Updated IP
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.countryChosen.updated_ip_address == null ? "" : `${this.state.countryChosen.updated_ip_address}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Updated Content Type
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.countryChosen.updated_content_type == null ? "" : `${this.state.countryChosen.updated_content_type}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 col-md-12 bg-ginger align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label ">
                                                            Version
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.countryChosen.version == null ? "" : `${this.state.countryChosen.version}`}</label>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-6">
                          <div className="form-group gx-0 row">
                            <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label "></label>
                            <label className="col-sm-1 col-form-label"></label>
                            <label className="col-sm-7 col-form-label"></label>
                          </div>
                        </div> */}
                                            </div>
                                            {/* <div class="col-12">
                                            <div className="form-group row mt-2">
                                                <div className="col-sm-10">
                                                </div>
                                                <div className="col-sm-1">
                                                    <button type="submit" className="btn btn-primary btn-min-width"><MdDone /></button>
                                                </div>
                                                <div className="col-sm-1">
                                                    <button type="button" className="btn btn-primary btn-min-width" onClick={this.editOnClick}><MdModeEdit></MdModeEdit></button>
                                                </div>
                                            </div>
        </div> */}
                                            <div className="flex-wrap d-flex flex-row justify-content-center col-sm-12 mt-2">
                                                <div className="btn-center mx-2">
                                                    <Link to="/country-approve">
                                                        <button className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" title="Approve">
                                                            <MdDone></MdDone>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="btn-center mx-2">
                                                    <Link to={`/country/${this.state.idChosen}/edit`}>
                                                        <button className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" title="Edit">
                                                            <MdModeEdit></MdModeEdit>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="btn-center mx-2">
                                                    <Link to="/country" className="text-decoration-none">
                                                        <button className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper " title="Delete ">
                                                            <Trash />
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <TableTemplate />

                                <div className="card shadow mb-4">
                                    {/* <div className="card-header bg-shadow-dark py-3">
                                    <h3 className="m-0 font-weight-bold text-light">Host Mapping</h3>
      </div>*/}
                                    <h5 className="p-1 card-header col-12 bg-shadow-dark text-white">Mapping Code to Host System</h5>
                                    <div className="card-body">
                                        <div className="row gx-0 col-md-12 bg-ginger">
                                            <div className="col-md-6">
                                                <div className="form-group gx-0 row">
                                                    <label htmlFor="inputHostSystem1" className="col-sm-3 ms-2 col-form-label">
                                                        OJK System
                                                    </label>
                                                    <label className="col-sm-1 col-form-label">:</label>
                                                    <label className="col-sm-7 col-form-label">DKI</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gx-0 col-md-12 bg-light">
                                            <div className="col-md-6">
                                                <div className="form-group row gx-0">
                                                    <label htmlFor="inputHostSystem2" className="ms-2 col-sm-3 col-form-label">
                                                        BI System
                                                    </label>
                                                    <label className="col-sm-1 col-form-label">:</label>
                                                    <label className="col-sm-7 col-form-label">JKT</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gx-0 col-md-12 bg-ginger">
                                            <div className="col-md-6">
                                                <div className="form-group gx-0 row">
                                                    <label htmlFor="inputHostSystem3" className="ms-2 col-sm-3 col-form-label">
                                                        LPS SYstem
                                                    </label>
                                                    <label className="col-sm-1 col-form-label ">:</label>
                                                    <label className="col-sm-7 col-form-label ">DKI</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-align-center">Loading...</h1>
                )}
                <div className="modal-dialog modal-dialog-centered">...</div>
            </>
        );
    }
}
export default (props) => <CountryDetail {...props} params={useParams()} />;
