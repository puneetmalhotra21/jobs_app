import React from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            joblist:props.joblist,
            shwlst:"B1",
            fltrJob:"",
            value: 'select',
            srchHovr:false,
        } 
    }

    render(){
        var evt =this.state.shwlst;
        return(
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-2">
                   
                    </div>
                    <div className="col-md-2 no-gutters">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-9"  style={{float:"right"}}>
                            <select defaultValue={this.state.value} className="form-control" style={{fontSize:12}} onChange={e=>this.props.callQualFltr(e.target.value)}>
                                <option defaultValue="select">-Qualification-</option>
                                <option defaultValue="First">10th</option>
                                <option defaultValue="Second">12th</option>
                                <option defaultValue="Third">Graduate</option>
                            </select>
                        </div>
                    </div>
                    <div  className="col-md-3">
                        <input type="text" className="form-control " style={{fontSize:12}} 
                                placeholder="Job type: ssc/bank/army" onChange={e=>this.props.createFltr(e.target.value)}>
                        </input> 
                        </div>                                                                     
                    <div className="col-md-1" style={{width:50}}>
                        <span className={this.props.shwSrchShdw ? 'input-group-text shadow ':'input-group-text'}  style={{color:"white",fontSize:12,backgroundColor: "#f1a315", paddingLeft: 20,
                             fontFamily: "Roboto,sans-serif"}}   onClick={this.props.callSearch}  onMouseEnter={()=>this.props.toggleSrchShdw(true)} onMouseLeave={()=>this.props.toggleSrchShdw(false)}>
                                    SEARCH 
                        </span> 
                    </div>
                 
                    <div className="col-md-4">
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-3" style={{display:"none"}}>
                    {
                        (this.state.joblist!=null && this.state.joblist.length>0 )
                        ? 
                        this.state.joblist.filter(job => job.includes(this.state.shwlst)).map(filteredName => (
                            <li  style={{listStyleType: "none"}} >
                                {filteredName}
                            </li>
                        ))  
                        : 
                        "" 
                    }
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
           </div>
            
        )
    }
}


function mapStateToProps(state){
    return {
        inputVals: state.inputState.inputVal,
        srchStr: state.jobListState.srchStr,
        shwSrchShdw: state.toggleState.shwSrchShdw,
        qualStr: state.jobListState.qualStr,
    }
} 


function mapDispatchToProps(dispatch){
    return {
        onWrite: inputVal => dispatch({ type: 'CHANGE_INPUT', inputVal }),
        createFltr: srchStr  => dispatch({ type: 'CREATE_Filter', srchStr }),
        callSearch: srchVal  => dispatch({ type: 'CREATE_SEARCH', srchVal }),
        callQualFltr: qualStr  => dispatch({ type: 'CREATE_QUALVAL', qualStr }),
        toggleSrchShdw: srchShdw => dispatch({ type: 'TOGGLE_Search_SHADOW', srchShdw }),
    }
} 


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);