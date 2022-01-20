import React,{useState,useEffect} from 'react';
import TableRow from '../Users_Row/TableRow';
function NormalTable()
{

    return(
        <>
        
        <div class="page-title mr-4 pr-4 border-right" style={{paddingLeft:'85px'}}>
                                        <h1>Users</h1>
                                    </div>
        <div className="row editable-wrapper" style = {{paddingLeft:'90px'}}>
                            <div className="col-lg-12 ">
                                <div className="card card-statistics">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table id="tableedit" className="table display responsive nowrap table-light table-bordered">
                                                <thead className="thead-light">
                                                    <tr>
                                                    <th>Date Of Joining</th>                                                
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Phone Number</th>

                                                        <th>Address</th>
                                                    </tr>
                                                </thead>
                                                <TableRow/>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
    );

    
}

export default NormalTable;