import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import awsLogo from "../../images/aws-logo.png";
import "../../styles/TableHome.css";


import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import mockData from "./mockData.json";

function TableHome() {


    const gridData = {
        columnDefs: [{
            headerName: "Rule Id", field: "ruleId", sortable: true, filter: true
        },
        {
            headerName: "Rule Name", field: "ruleName", sortable: true, filter: true
        },
        {
            headerName: "Severity", field: "severity", sortable: true, filter: true
        },
        {
            headerName: "Account Id", field: "accountId", sortable: true, filter: true
        },
        {
            headerName: "Account full name", field: "accountFullName", sortable: true, filter: true
        },
        {
            headerName: "Account short name", field: "accountShortName", sortable: true, filter: true
        },
        {
            headerName: "Environment", field: "environment", sortable: true, filter: true
        },
        {
            headerName: "Region", field: "region", sortable: true, filter: true
        },
        {
            headerName: "Evaluate compliance ci", field: "evaluateComplianceCi", sortable: true, filter: true
        },
        {
            headerName: "Proof of compliance", field: "proofOfCompliance", sortable: true, filter: true
        }],
        rowData: mockData
    }


    return (

        <div >
            <Container>
                <Row>
                    <Col sm="2">
                        <img className="dashboard-cloud-logo" alt="aws logo" src={awsLogo} />
                    </Col>
                    <Col sm="10" style={{ textAlign: "center" }}>
                        <span className="table-home-title">Database Reports</span>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div
                            className="ag-theme-balham"
                            style={{
                                height: '500px',
                                marginTop: "3em"
                            }}>
                            <AgGridReact
                                columnDefs={gridData.columnDefs}
                                rowData={gridData.rowData}>
                            </AgGridReact>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default TableHome;
