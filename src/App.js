
import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './components/MainPage';
import ActivityPage from './components/pages/ActivityPage';
import WalletPage from './components/pages/WalletPage'
import MarketPage from './components/pages/MarketPage';
import EarnPage from './components/pages/EarnPage';
import ErrorPage from './components/pages/ErrorPage';
import Nav from './components/Nav';
import { Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import SideNav from './components/SideNav';
import MobileBottomNav from './components/MobileBottomNav';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav/>

        <Flex>
          <Box className='side_menu' >
              <SideNav />
          </Box>

          <Box className='pages' flex='1'>
            <Switch>  
              <Route path="/home" component={MainPage} />
              <Route path="/activity" component={ActivityPage} />
              <Route path="/wallet" component={WalletPage} />
              <Route path="/market" component={MarketPage} />
              <Route path="/earn" component={EarnPage} />
              <Route path="/" component={MainPage} />
              <Route component={ErrorPage} />
            </Switch>
          </Box>
        </Flex>
        
        <Box className='mobile_menu'>
                <Box className='mobile_menu_inner'>
                    <MobileBottomNav />
                </Box>
            </Box>
        
      </div>
    </Router>
  );
}

export default App;
