import { combineReducers } from 'redux';
import { homes,
  messages} from './HomePageContent/reducers';


export default combineReducers({
  homes,
  messages
});
