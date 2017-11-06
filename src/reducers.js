import { combineReducers } from 'redux';
import { homes, messages} from './HomePageContent/reducers';
import { invoices } from './Catalog/reducers';



export default combineReducers({
  homes,
  messages,
  invoices
});
