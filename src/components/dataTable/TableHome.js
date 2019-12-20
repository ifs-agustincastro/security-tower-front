import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import awsLogo from "../../images/aws-logo.png";
import "../../styles/TableHome.css";


import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import mockData from "./mockData.json";

function TableHome() {

    mockData.sort(function (a) {
        return a.evaluateComplianceCi === "NOT_COMPLIANT" ? -1 : 1;
    });

    console.log(mockData);
    const gridData = {
        columnDefs: [{
            headerName: "Rule Id", field: "ruleId"
        },
        {
            headerName: "Rule Name", field: "ruleName"
        },
        {
            headerName: "Severity", field: "severity"
        },
        {
            headerName: "Account Id", field: "accountId"
        },
        {
            headerName: "Account full name", field: "accountFullName"
        },
        {
            headerName: "Account short name", field: "accountShortName"
        },
        {
            headerName: "Environment", field: "environment"
        },
        {
            headerName: "Region", field: "region"
        },
        {
            headerName: "Evaluate compliance ci", field: "evaluateComplianceCi"
        },
        {
            headerName: "Proof of compliance", field: "proofOfCompliance"
        }],
        rowData: mockData
    }

    const defaultColDef = {
        resizable: true,
        sortable: true,
        filter: true
    }

    const gridOptions = {
        rowHeight: 40,
        rowSelection: 'multiple',
        floatingFilter: true,
        rowClassRules: {
            // apply css class to no compliant rows
            'no-compliant-row': function (params) {
                return params.data.evaluateComplianceCi === "NOT_COMPLIANT"
            }
        }
    }

    const tableHeight = (window.innerHeight * 80) / 100;
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
                                height: `${tableHeight}px`,
                                marginTop: "3em"
                            }}>
                            <AgGridReact
                                columnDefs={gridData.columnDefs}
                                rowData={gridData.rowData}
                                gridOptions={gridOptions}
                                defaultColDef={defaultColDef}>
                            </AgGridReact>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div >
    );
}

export default TableHome;
