import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertApp';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<GifExpertApp />);

