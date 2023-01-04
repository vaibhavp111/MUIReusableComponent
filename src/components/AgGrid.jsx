import React, { useState} from 'react'
import { Box } from '@mui/material'
import { Link } from "react-router-dom";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LinkIcon from '@mui/icons-material/Link';


function AgGrid() {

    const [setGridApi] = useState(null);
    const [setGridColumnApi] = useState(null);
    const rowHeight = 30;
    const headerHeight = 30;

    const defaultColDef = {
        sortable: true, checkboxSelection: false, resizable: true, autoHeight: true
        , filter: true,
    }


    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }


    const [rowData] = useState([
        {
            srno: '1',
            date: '08-01-2021',
            source: "ET",
            arttitle: 'PMs energy roadmap: More than double natural gas share, diversify energy sources',
            url: "https://economictimes.indiatimes.com/industry/energy/oil-gas/pms-energy-roadmap-more-than-double-natural-gas-share-diversify-energy-sources/articleshow/80111254.cms",
            category: "Energy",
            Relevance: "OSR",
            Comment: "",
            dn: "",
        },
        {
            srno: '2',
            date: '08-01-2021',
            source: "ET",
            arttitle: 'Airtel expects new security directive to come into effect in 6-9 months',
            url: "https://economictimes.indiatimes.com/industry/telecom/telecom-news/airtel-expects-new-security-directive-to-come-into-effect-in-6-9-months/articleshow/80112479.cms",
            category: "Security",
            Relevance: "OBC",
            comment: "New Security Directive at Airtel",
            dn: "",
        },
        {
            srno: '3',
            date: '08-01-2021',
            source: "BL",
            arttitle: 'Prospects for base metals hinge on four key themes',
            url: "https://www.thehindubusinessline.com/markets/commodities/prospects-for-base-metals-hinge-on-four-key-themes/article33502995.ece",
            category: "Metal",
            Relevance: "PCU",
            comment: "Analyst Prediction on based",
            dn: "",
        },
        {
            srno: '4',
            date: '08-01-2021',
            source: "BS",
            arttitle: 'India’s economy riding against COVID-19 wave, says Finance Ministry',
            url: "https://www.thehindu.com/news/national/indias-economy-riding-against-covid-19-wave-says-finance-ministry/article33500096.ece",
            category: "Technology",
            Relevance: "OSR",
            comment: "",
            dn: "",
        },

    ])

    const columnDefs = [
        { headerName: 'Sr No.', field: 'srno', width: 90, align: 'center', cellStyle: { textAlign: 'center' } },
        { headerName: 'Date', field: 'date', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'Source', field: 'source', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'Article Title', field: 'arttitle', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'URL', field: 'url', width: 100, align: 'center', cellStyle: { textAlign: 'center' }, cellRendererFramework: (params) => <LinkIcon className='ico-color' size="small" />, },
        { headerName: 'Category', field: 'category', width: 180, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'Relevance', field: 'category', width: 180, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'Comment', field: 'comment', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: '', field: 'dn', width: 70, align: 'center', cellStyle: { textAlign: 'center' }, cellRendererFramework: (params) => <Link to='/Admin_details' className='text-deco-none'><VisibilityIcon className='ico-color' size="small" /></Link>, },
    ]

    return (
        <Box className='m-3 ag'>
            <div id='myGrid' style={{ height: '40vh', width: '100%' }} className="ag-theme-alpine" >
                <AgGridReact
                    onGridReady={onGridReady}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    rowHeight={rowHeight}
                    headerHeight={headerHeight}
                    pagination={true}
                    rowSelection={'multiple'}
                />
            </div>
        </Box>
    )
}

export default AgGrid