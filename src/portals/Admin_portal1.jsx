import React, { useState, useEffect } from 'react'
import { Box, Card, Grid, CardContent, Typography, Container, Divider, TextField, FormControl, Button } from '@mui/material'
import Header from '../components/Header'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SearchIcon from '@mui/icons-material/Search';


export default function Admin_portal1() {

    const [value, setValue] = React.useState(null);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 600;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);


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

    const [isShown, setIsShown] = useState(false);
    const handleSearch = event => {
        setIsShown(current => !current);
    };

    const [rowData] = useState([
        {
            rank: '1',
            date: 'Jan 07, 2021, 12:24 IST',
            source: "Economic Times",
            arttitle: 'PMs energy roadmap: More than double natural gas share, diversify energy sources',
            author: "",
            url: "https://economictimes.indiatimes.com/industry/energy/oil-gas/pms-energy-roadmap-more-than-double-natural-gas-share-diversify-energy-sources/articleshow/80111254.cms",
            artcontent: "New Delhi: Prime Minister Narendra Modi on Tuesday set out his government's energy roadmap, envisaging more than double the share of cleaner natural gas in the consumption basket, diversifying sources of energy, connecting the nation with one gas pipeline grid and bringing affordable fuel to people and industry. ",
            artsummary: "Inaugurating a 450-km natural gas pipeline between Kochi in Kerala to Mangaluru in Karnataka, PM said India under his government is seeing unprecedented work on highways, railway, metro, air, water, digital and gas connectivity which will aid economic development.",
            userip: "Interesting",
            category: "Energy",
            comment: "Energy Consumption and PM roadmap",
            pdftitle: "Gas Consumption",
            review: "",
            dn: "",
        },
        {
            rank: '2',
            date: 'Jan 08, 2021, 13:42 IST',
            source: "Economic Times",
            arttitle: 'Airtel expects new security directive to come into effect in 6-9 months',
            author: "Anandita Singh Mankotia",
            url: "https://economictimes.indiatimes.com/industry/telecom/telecom-news/airtel-expects-new-security-directive-to-come-into-effect-in-6-9-months/articleshow/80112479.cms",
            artcontent: "NEW DELHI: Bharti Airtel expects the new security directive for telecom networks to come into effect in six to nine months, and is studying the implications, including cost elements, given that future orders will be limited to certain types of partners, a senior company executive said.",
            artsummary: "“The (5G) spectrum prices are too high and the ecosystem doesnt exist. Even if we move rapidly, it will take at least 18-24 months for us to get to 5G,” a senior executive at Bharti Airtel told ET.",
            userip: "Interesting",
            category: "Security Directive",
            comment: "New Security Directive at Airtel",
            pdftitle: "New Security Directive",
            review: "",
            dn: "",
        },
        {
            rank: '3',
            date: 'Jan 08, 2021, 00:00 IST',
            source: "Business Line",
            arttitle: 'Prospects for base metals hinge on four key themes',
            author: "",
            url: "https://www.thehindubusinessline.com/markets/commodities/prospects-for-base-metals-hinge-on-four-key-themes/article33502995.ece",
            artcontent: " More Base metals are likely to see high volatility in prices  -  Getty Images/iStockphoto Sandeep Daga Base metals have seen a big swing in prices and expectations in last nine months. Following themes explore whether the uptrend could continue in 2021 or the bulls are up for a surprise.More than 90 per cent of the incremental demand of metals in 2020 came from a single country i.e. China. On the one hand, China stepped up local consumption of metals into infrastructure spending. And, on the other, its exporters replaced local manufacturers in several countries, who struggled amid repeated lockdowns. However, it is highly likely that Chinese intensity of demand for commodities will face a slump. Generally, Chinese stimulus is front-loaded; this year was not different. Further, Chinese export growth could cool in 2021 as manufacturers in developed markets recover post vaccination.Can the demand of metals from the rest of the world offset slowing Chinese intensity in 2021? The metal bulls think so, but history shows otherwise.The supply chain for metals was badly disrupted this year on account of three factors — Covid-19 related interruption in mining, shipping delays slowing international trade of metals, and postponed implementation of new Chinese scrap policy. These disruptions have either eased or are likely to. South American miners are back on their foot; experts suggest that shipping schedules could normalise post Chinese Lunar holidays (February 11-17) and scrap imports into China are rising after new policy was notified from November 1, 2020.Commodity prices move in cycles. At extreme points, it gives pain to producers with smile to consumers or vice-versa.Currently, high prices are pushing miners, smelters and refiners to step-up output to the best possible pace. No surprise that Chinese output of most of the metals have been hitting record highs recently. Analysts are penning a strong rebound in mining output in 2021.On the other hand, high prices are becoming difficult for consumers to absorb. This is resulting in deferral of demand and search for substitutes.Unless metal prices see a sizeable downward revision, physical demand-supply conditions could put the bull market in danger.It is for the first time since 2009 that commodities have attained such popularity amongst investors. Their conviction and thereby money at stake for a long-lasting bull market has been growing every passing month. Bulls see no interruption in the uptrend in 2021.However, history shows that with high expectations and stake come high volatility in prices. Irrespective of the debate whether prices will make higher highs or not in 2021, something that can be said with certainty is that 2021 will see high volatility in metal prices.The writer is Founder, CEO of Metal Intelligence Centre (MIC), an information hub for metals. Views are personal",
            artsummary: "",
            userip: "Interesting",
            category: "Metal",
            comment: "",
            pdftitle: "Base Metals",
            review: "",
            dn: "",
        },
        {
            rank: '4',
            date: 'Jan 08, 2021, 14:13 IST',
            source: "The Hindu",
            arttitle: 'India’s economy riding against COVID-19 wave, says Finance Ministry',
            author: "",
            url: "https://www.thehindu.com/news/national/indias-economy-riding-against-covid-19-wave-says-finance-ministry/article33500096.ece",
            artcontent: " While the global economic recovery had been hit by second waves of infections and more stringent lockdowns in several countries, India’s economy was riding against the COVID-19 wave with persistent improvements in economic indicators showing a V-shaped recovery, the Finance Ministry said on Tuesday. “The new year has dawned with the approval of long-awaited Covid-19 vaccine and initiation of vaccination drives in various countries. This gives strength to the optimism on both health and economic fronts despite continuing surge in global cases and the potential challenge of a mutant strain,” the Department of Economic Affairs said in its monthly economy review for December. “In the global economy, rise in lockdown stringency following second waves has slowed down recovery, as seen in tapering Purchasing Managers’ Index estimates, decline in port traffic activity, and stagnating commercial flight activity…,” the review noted, contrasting the trend with India’s recovery path.“The effective management of Covid-19 spread despite the festive season and onset of winter season, combined with sustained improvement in high frequency indicators and V-shaped recovery along with easing of lockdown restrictions distinguish Indian economy as one riding against the Covid-wave,” it said. Stressing that the agriculture sector, which clocked 3.4% growth in the first two quarters of 2020-21, remained the bright spot of the Indian economy, the review said a 2.9% rise in rabi sowing this year, along with accelerating tractor sales, suggested rural distress had been successfully addressed by the PM Garib Kalyan Yojana (PMGKY). “Rise in minimum support prices accompanied by record procurement, and accelerated wage employment generation through MGNREGS, bodes well for rural incomes and bears testimony to PMGKY’s success in alleviating rural distress. This rise in rural incomes is mirrored in the healthy, though moderated, sales in passenger vehicles, two and three wheelers and tractor, and a rebound in vehicle registrations for the first time after March 2020,” the review said.Asserting that the government is well prepared to undertake a mega vaccination drive, following emergency use approval for two vaccines in India, the Ministry said a blueprint was “ready with priority for health workers among others, real-time Intelligence Network Co-WIN in place, upgradation of cold-chain infrastructure for last-mile delivery, and ongoing dry runs.”",
            artsummary: "Persistent improvements in economic indicators showing V-shaped recovery, it says",
            userip: "Neutral",
            category: "",
            comment: "",
            pdftitle: "",
            review: "",
            dn: "",
        },
        {
            rank: '5',
            date: 'Jan 08, 2021, 14:13 IST',
            source: "Business Line",
            arttitle: 'Agri-tech startup RMSI Cropalytics to engage with policymakers for crop evaluations',
            author: "",
            url: "https://www.thehindubusinessline.com/economy/agri-business/agri-tech-startup-rmsi-cropalytics-to-engage-with-policymakers-for-crop-evaluations/article33500658.ece",
            artcontent: "More To equip farmers with new-age technologies of artificial intelligence and machine learning, Noida-based agri-tech startup, RMSI Cropalytics is looking to engage with agri policymakers and agri value-chain companies for crop acreage, crop health and yield estimations. Since its inception in 2019, RMSI Cropalytics was recently selected by the Union Ministry of Agriculture and Farmers’ Welfare to conduct pilots for developing the methodology for technology-based crop yield estimation on a large scale. It was also commissioned task to run actual yield estimation at Gram Panchayat level for districts, which are spread across the country. We aim to develop such a platform - PInCER (Profiler for Insured Crop Exposure and Risk) - that any government agency, research scholar, farm lending or insurance company, agri-input company or trading company may - by using satellite imagery, be able to estimate crop acreages, assess crop health and derive crop yield estimates on-demand, said Roli Jindal, Co-Founder RMSI Cropalytics - a subsidiary of RMSI, one of the global players in geospatial and engineering solutions. The company has executed satellite-based crop health tracking and yield estimation for several districts in India. Our user-friendly platform forecasts crop-wise yield and production for the crop season in progress for more than 700 districts, added Jindal. In the past few years, agri tech and solutions are the areas that have seen tremendous progress. Company's digital agri market place service was created by its parent RMSI Global for the Government of Malawi, Africa as part of an African Development Bank Technical Assistance Program. Jindal informed that these solutions apply accurate, timely and high-resolution crop yield estimation for crop risk estimation, distress mitigation, stock and manpower allocation as well as efficient procurement.",
            artsummary: "",
            userip: "Interesting",
            category: "Technology",
            comment: "",
            pdftitle: "Tech in Agri",
            review: "",
            dn: "",
        },


    ])

    const columnDefs = [
        { headerName: 'Rank', field: 'rank', width: 90, align: 'center', cellStyle: { textAlign: 'center' } },
        { headerName: 'Publish Date and Time', field: 'date', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'New Source', field: 'source', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'Article Title', field: 'arttitle', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'Author', field: 'author', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'URL', field: 'url', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'Article Content', field: 'artcontent', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'Article Summary', field: 'artsummary', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        {
            headerName: 'User Input', field: 'userip', width: 200, align: 'center', cellStyle: { textAlign: 'left' },
            cellEditor: 'agRichSelectCellEditor',
            cellEditorPopup: true,
            cellEditorParams: {
                values: ['Male', 'Female'],
                // cellRenderer: GenderCellRenderer,
                cellEditorPopup: true,
            },
        },
        { headerName: 'Category', field: 'category', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'Comment', field: 'comment', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'PDF Title', field: 'pdftitle', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: 'Reviewed By', field: 'review', width: 200, align: 'center', cellStyle: { textAlign: 'left' } },
        { headerName: '', field: 'dn', width: 70, align: 'center', cellStyle: { textAlign: 'center' }, cellRendererFramework: (params) => <FileDownloadOutlinedIcon size="large" />, },
    ]



    return (
        <>
            <Header />
            <Box className='portals-ext'>
                <Container maxWidth="xl">
                    <Typography className='text-normal-color font-18-16 fw-600 my-3'>
                        Bosch Personalized News | Admin Portal
                    </Typography>
                    <Card className='p-3'>
                        <CardContent className='p-0'>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={3} md={2} lg={2} className="d-flex align-items-center">
                                    <Typography className='text-head-color font-20-18 fw-700 mb-3'>
                                        Daily Feeds
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sm={3} md={2} lg={2} className="d-flex align-items-center">
                                    <Typography className='text-normal-color font-12-16 fw-600 mb-3'>
                                        8th January 2021
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={8} className={isMobile ? "pt-0 d-flex align-items-center justify-content-center" : "pt-0 d-flex align-items-center justify-content-end"}>
                                    <Box onClick={handleSearch} className='searchico d-flex align-items-center justify-content-center'>
                                        <SearchIcon />
                                    </Box>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            className="dtpicker"
                                            placeholder="Basic example"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                            <Divider />
                            {isShown && (
                                <Box>
                                    <Box className='my-3'>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        className="dtpicker"
                                                        placeholder="Basic example"
                                                        value={value}
                                                        onChange={(newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </Grid>
                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        className="dtpicker"
                                                        placeholder="Basic example"
                                                        value={value}
                                                        onChange={(newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </Grid>
                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                                                <FormControl fullWidth>
                                                    <TextField className='reg-ipbox font-12-16' placeholder="Article Content" />
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                                                <FormControl fullWidth>
                                                    <TextField className='reg-ipbox font-12-16' placeholder="News Source" />
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                                                <FormControl fullWidth>
                                                    <TextField className='reg-ipbox font-12-16' placeholder="Category" />
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                                                <FormControl fullWidth>
                                                    <TextField className='reg-ipbox font-12-16' placeholder="Article Title" />
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                                                <FormControl fullWidth>
                                                    <TextField className='reg-ipbox font-12-16' placeholder="Comment" />
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                                                <FormControl fullWidth>
                                                    <TextField className='reg-ipbox font-12-16' placeholder="URL" />
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                                                <FormControl fullWidth>
                                                    <TextField className='reg-ipbox font-12-16' placeholder="PDF Title" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                                            </Grid>
                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-end">
                                                <Button className='btn btwl font-12-16 fw-600' variant="contained" size="small">Apply Filter</Button>
                                            </Grid>
                                            <Grid item xs={6} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-end">
                                                <Button className='btn btwl font-12-16 fw-600' variant="contained" size="small">Reset Filter</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Divider />
                                </Box>
                            )}
                            <Box className='my-3 ag'>
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
                            <Divider />
                            <Box className={isMobile ? "mt-3 d-flex align-items-center justify-content-center" : "mt-3 d-flex align-items-center justify-content-end"}>
                                <Button className='btn bt-auto font-12-16 fw-600' variant="contained" size="small">Save and Generate PDF</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    )
}
