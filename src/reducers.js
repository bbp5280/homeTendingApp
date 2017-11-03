import { combineReducers } from 'redux';
import { homes,
  messages,
  weather} from './HomePageContent/reducers';


export default combineReducers({
  homes,
  messages,
  weather
});
