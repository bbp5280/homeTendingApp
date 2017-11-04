import { combineReducers } from 'redux';
import { homes,
  messages,
  weather,
  invoices} from './HomePageContent/reducers';


export default combineReducers({
  homes,
  messages,
  weather,
  invoices
});
