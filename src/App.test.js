import App from './App';
import {mount,shallow} from 'enzyme'
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new Adapter()})

let wrapper;

beforeEach(() => {
wrapper = mount(<App />);
});
describe('<App /> rendering', () => {
// it('should render one <h1>', () => {
// expect(wrapper.find('h1')).toHaveLength(2);
// });
// it('should render two <Form>', () => {
// expect(wrapper.find('Form')).toHaveLength(1);
// });
// it('should render three <label>s', () => {
// expect(wrapper.find('label')).toHaveLength(2);
// });
it('first-test',()=>{
// let comp=shallow(<App/>);
// let wrap=wrapper.find('.hai');
expect(wrapper.find('p').text().length).toBe(6);
});
});