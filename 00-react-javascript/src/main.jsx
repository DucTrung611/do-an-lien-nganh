import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home.jsx';
import UserPage from './pages/user.jsx';
import RegisterPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import { AuthWrapper } from './components/context/auth.context.jsx';
import StockPage from './pages/stock-table.jsx';
import ACBTable from './pages/BCTC/ACB.jsx';
import BCMTable from './pages/BCTC/BCM.jsx';
import BIDTable from './pages/BCTC/BID.jsx';
import BVHTable from './pages/BCTC/BVH.jsx';
import CTGTable from './pages/BCTC/CTG.jsx';
import FPTTable from './pages/BCTC/FPT.jsx';
import GASTable from './pages/BCTC/GAS.jsx';
import GVRTable from './pages/BCTC/GVR.jsx';
import HDBTable from './pages/BCTC/HDB.jsx';
import HPGTable from './pages/BCTC/HPG.jsx';
import MBBTable from './pages/BCTC/MBB.jsx';
import MSNTable from './pages/BCTC/MSN.jsx';
import MWGTable from './pages/BCTC/MWG.jsx';
import PLXTable from './pages/BCTC/PLX.jsx';
import POWTable from './pages/BCTC/POW.jsx';
import SABTable from './pages/BCTC/SAB.jsx';
import SHBTable from './pages/BCTC/SHB.jsx';
import SSBTable from './pages/BCTC/SSB.jsx';
import SSITable from './pages/BCTC/SSI.jsx';
import STBTable from './pages/BCTC/STB.jsx';
import TCBTable from './pages/BCTC/TCB.jsx';
import TPBTable from './pages/BCTC/TPB.jsx';
import VCBTable from './pages/BCTC/VCB.jsx';
import VHMTable from './pages/BCTC/VHM.jsx';
import VIBTable from './pages/BCTC/VIB.jsx';
import VICTable from './pages/BCTC/VIC.jsx';
import VJCTable from './pages/BCTC/VJC.jsx';
import VNMTable from './pages/BCTC/VNM.jsx';
import VPBTable from './pages/BCTC/VPB.jsx';
import VRETable from './pages/BCTC/VRE.jsx';
import ACBFinancialChart from './pages/chart/ACB-chart.jsx';
import BCMFinancialChart from './pages/chart/BCM-chart.jsx';
import BIDFinancialChart from './pages/chart/BID-chart.jsx';
import BVHFinancialChart from './pages/chart/BVH-chart.jsx';
import CTGFinancialChart from './pages/chart/CTG-chart.jsx';
import FPTFinancialChart from './pages/chart/FPT-chart.jsx';
import GASFinancialChart from './pages/chart/GAS-chart.jsx';
import GVRFinancialChart from './pages/chart/GVR-chart.jsx';
import HDBFinancialChart from './pages/chart/HDB-chart.jsx';
import HPGFinancialChart from './pages/chart/HPG-chart.jsx';
import MBBFinancialChart from './pages/chart/MBB-chart.jsx';
import MSNFinancialChart from './pages/chart/MSN-chart.jsx';
import MWGFinancialChart from './pages/chart/MWG-chart.jsx';
import PLXFinancialChart from './pages/chart/PLX-chart.jsx';
import POWFinancialChart from './pages/chart/POW-chart.jsx';
import SABFinancialChart from './pages/chart/SAB-chart.jsx';
import SHBFinancialChart from './pages/chart/SHB-chart.jsx';
import SSBFinancialChart from './pages/chart/SSB-chart.jsx';
import SSIFinancialChart from './pages/chart/SSI-chart.jsx';
import STBFinancialChart from './pages/chart/STB-chart.jsx';
import TCBFinancialChart from './pages/chart/TCB-chart.jsx';
import TPBFinancialChart from './pages/chart/TPB-chart.jsx';
import VCBFinancialChart from './pages/chart/VCB-chart.jsx';
import VHMFinancialChart from './pages/chart/VHM-chart.jsx';
import VIBFinancialChart from './pages/chart/VIB-chart.jsx';
import VICFinancialChart from './pages/chart/VIC-chart.jsx';
import VJCFinancialChart from './pages/chart/VJC-chart.jsx';
import VNMFinancialChart from './pages/chart/VNM-chart.jsx';
import VPBFinancialChart from './pages/chart/VPB-chart.jsx';
import VREFinancialChart from './pages/chart/VRE-chart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "user",
        element: <UserPage />
      },
      {
        path: "stock",
        element: <StockPage />
      },

    ]
  },
  {
    path: "register",
    element: <RegisterPage />
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "stock/acb",
    element: <ACBTable />
  },
  {
    path: "stock/bcm",
    element: <BCMTable />
  },
  {
    path: "stock/bid",
    element: <BIDTable />
  },
  {
    path: "stock/bvh",
    element: <BVHTable />
  },
  {
    path: "stock/ctg",
    element: <CTGTable />
  },
  {
    path: "stock/fpt",
    element: <FPTTable />
  },
  {
    path: "stock/gas",
    element: <GASTable />
  },
  {
    path: "stock/gvr",
    element: <GVRTable />
  },
  {
    path: "stock/hdb",
    element: <HDBTable />
  },
  {
    path: "stock/hpg",
    element: <HPGTable />
  },
  {
    path: "stock/mbb",
    element: <MBBTable />
  },
  {
    path: "stock/msn",
    element: <MSNTable />
  },
  {
    path: "stock/mwg",
    element: <MWGTable />
  },
  {
    path: "stock/plx",
    element: <PLXTable />
  },
  {
    path: "stock/pow",
    element: <POWTable />
  },
  {
    path: "stock/sab",
    element: <SABTable />
  },
  {
    path: "stock/shb",
    element: <SHBTable />
  },
  {
    path: "stock/ssb",
    element: <SSBTable />
  },
  {
    path: "stock/ssi",
    element: <SSITable />
  },
  {
    path: "stock/stb",
    element: <STBTable />
  },
  {
    path: "stock/tcb",
    element: <TCBTable />
  },
  {
    path: "stock/tpb",
    element: <TPBTable />,
  },
  {
    path: "stock/vcb",
    element: <VCBTable />,
  },
  {
    path: "stock/vhm",
    element: <VHMTable />,
  },
  {
    path: "stock/vib",
    element: <VIBTable />,
  },
  {
    path: "stock/vic",
    element: <VICTable />,
  },
  {
    path: "stock/vjc",
    element: <VJCTable />,
  },
  {
    path: "stock/vnm",
    element: <VNMTable />,
  },
  {
    path: "stock/vpb",
    element: <VPBTable />,
  },
  {
    path: "stock/vre",
    element: <VRETable />,
  },
  {
    path: "acbchart",
    element: <ACBFinancialChart />
  },
  {
    path: "bcmchart",
    element: <BCMFinancialChart />
  },
  {
    path: "bidchart",
    element: <BIDFinancialChart />
  },
  {
    path: "bvhchart",
    element: <BVHFinancialChart />
  },
  {
    path: "ctgchart",
    element: <CTGFinancialChart />
  },
  {
    path: "fptchart",
    element: <FPTFinancialChart />
  },
  {
    path: "gaschart",
    element: <GASFinancialChart />
  },
  {
    path: "gvrchart",
    element: <GVRFinancialChart />
  },
  {
    path: "hdbchart",
    element: <HDBFinancialChart />
  },
  {
    path: "hpgchart",
    element: <HPGFinancialChart />
  },
  {
    path: "mbbchart",
    element: <MBBFinancialChart />
  },
  {
    path: "msnchart",
    element: <MSNFinancialChart />
  },
  {
    path: "mwgchart",
    element: <MWGFinancialChart />
  },
  {
    path: "plxchart",
    element: <PLXFinancialChart />
  },
  {
    path: "powchart",
    element: <POWFinancialChart />
  },
  {
    path: "sabchart",
    element: <SABFinancialChart />
  },
  {
    path: "shbchart",
    element: <SHBFinancialChart />
  },
  {
    path: "ssbchart",
    element: <SSBFinancialChart />
  },
  {
    path: "ssichart",
    element: <SSIFinancialChart />
  },
  {
    path: "stbchart",
    element: <STBFinancialChart />
  },
  {
    path: "tcbchart",
    element: <TCBFinancialChart />
  },
  {
    path: "tpbchart",
    element: <TPBFinancialChart />
  },
  {
    path: "vcbchart",
    element: <VCBFinancialChart />
  },
  {
    path: "vhmchart",
    element: <VHMFinancialChart />
  },
  {
    path: "vibchart",
    element: <VIBFinancialChart />
  },
  {
    path: "vicchart",
    element: <VICFinancialChart />
  },
  {
    path: "vjcchart",
    element: <VJCFinancialChart />
  },
  {
    path: "vnmchart",
    element: <VNMFinancialChart />
  },
  {
    path: "vpbchart",
    element: <VPBFinancialChart />
  },
  {
    path: "vrechart",
    element: <VREFinancialChart />
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </React.StrictMode>,
)
