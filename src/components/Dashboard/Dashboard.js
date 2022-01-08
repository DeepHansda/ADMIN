import React from 'react'
import TableRow from '../Table_Row/TableRow'

function Dashboard() {
    return(
        <div className="row" style={{padding:'10px' ,width:'100%',paddingLeft:'100px'}}>
            <div class="col-lg-6">
                                <div class="card card-statistics">
                                    <div class="card-header">
                                        <div class="card-heading">
                                            <h4 class="card-title">Payments Table</h4>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-success mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col">Handle</th>
                                                    </tr>
                                                </thead>
                                                <TableRow/>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div class="col-lg-6 col-xxl-4 m-b-30">
                                <div class="card card-statistics h-100 mb-0">
                                    <div class="card-header d-flex justify-content-between">
                                        <div class="card-heading">
                                            <h4 class="card-title">Notifications</h4>
                                        </div>
                                    
                                    </div>
                                    <div class="card-body">
                                        <div class="row active-task m-b-20">
                                            <div class="col-xs-1">
                                                <div class="bg-type mb-1 mb-xs-0 mt-1">
                                                    <span>PP</span>
                                                </div>
                                            </div>
                                            <div class="col-11">
                                                <small class="d-block mb-1">Car dealer</small>
                                                <h5 class="mb-0"><a href="#">Unread utf-8 in more quick overview</a></h5>
                                                <ul class="list-unstyled list-inline">
                                                    <li class="list-inline-item">
                                                        <small> Created by Lizzy Halfman</small>
                                                    </li>
                                                    <li class="list-inline-item">|</li>
                                                    <li class="list-inline-item">
                                                        <small>Saturday, March 17 2019</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row active-task m-b-20">
                                            <div class="col-xs-1">
                                                <div class="bg-type bg-pink mb-1 mb-xs-0 mt-1">
                                                    <span>SL</span>
                                                </div>
                                            </div>
                                            <div class="col-11">
                                                <small class="d-block mb-1">Webster HTML5 </small>
                                                <h5 class="mb-0"><a href="#">I get an error "No Direct Access Allowed!" when I enter purchase</a></h5>
                                                <ul class="list-unstyled list-inline">
                                                    <li class="list-inline-item">
                                                        <small> Created by Samuel Woods</small>
                                                    </li>
                                                    <li class="list-inline-item">|</li>
                                                    <li class="list-inline-item">
                                                        <small>Sunday, March 19 2019</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row active-task m-b-20">
                                            <div class="col-xs-1">
                                                <div class="bg-type bg-success mb-1 mb-xs-0 mt-1">
                                                    <span>MP</span>
                                                </div>
                                            </div>
                                            <div class="col-11">
                                                <small class="d-block mb-1">The corps</small>
                                                <h5 class="mb-0"><a href="#">OAuth Credentials not generating the key</a></h5>
                                                <ul class="list-unstyled list-inline">
                                                    <li class="list-inline-item">
                                                        <small> Created by Andrew nico</small>
                                                    </li>
                                                    <li class="list-inline-item">|</li>
                                                    <li class="list-inline-item">
                                                        <small>Monday, March 21 2019</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row active-task m-b-20">
                                            <div class="col-xs-1">
                                                <div class="bg-type bg-orange mb-1 mb-xs-0 mt-1">
                                                    <span>SP</span>
                                                </div>
                                            </div>
                                            <div class="col-11">
                                                <small class="d-block mb-1">Sam martin vCard</small>
                                                <h5 class="mb-0"><a href="#">Pre-Buy Questions : For bakery Shop (Mentor Android Application)</a></h5>
                                                <ul class="list-unstyled list-inline">
                                                    <li class="list-inline-item">
                                                        <small> Created by Jimmy Falicon</small>
                                                    </li>
                                                    <li class="list-inline-item">|</li>
                                                    <li class="list-inline-item">
                                                        <small>Friday, March 22 2019</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row active-task m-b-20">
                                            <div class="col-xs-1">
                                                <div class="bg-type bg-info mb-1 mb-xs-0 mt-1">
                                                    <span>AP</span>
                                                </div>
                                            </div>
                                            <div class="col-11">
                                                <small class="d-block mb-1">Mentor admin </small>
                                                <h5 class="mb-0"><a href="#">I need a payment option, for each seller per item</a></h5>
                                                <ul class="list-unstyled list-inline">
                                                    <li class="list-inline-item">
                                                        <small> Created by Brian Joedon</small>
                                                    </li>
                                                    <li class="list-inline-item">|</li>
                                                    <li class="list-inline-item">
                                                        <small>Saturday, March 17 2019</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
    )
}

export default Dashboard;