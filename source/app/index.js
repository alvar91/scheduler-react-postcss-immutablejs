// Core
import React from 'react';
import { render } from 'react-dom';

// Instruments
import './theme/init';

// App
import { Scheduler } from './components/Scheduler';

render(<Scheduler />, document.getElementById('app'));
