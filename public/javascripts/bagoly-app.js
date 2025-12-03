import '../css/style.css'; // without this import webpack doesn't generate the css file

import dropdownMenu from './modules/dropdownMenu';
import activeNavItem from './modules/activeNavItem';

import showDetails from './modules/showDetails';
import scrollToProducts from './modules/scrollToProducts';
import accordion from './modules/accordion';


dropdownMenu();
activeNavItem();
showDetails();
scrollToProducts();
accordion();

