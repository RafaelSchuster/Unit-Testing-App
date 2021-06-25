import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount, shallow } from 'enzyme';
import App from './App';
import ValueInput from './Components/ValueInput';
import Result from './Components/Result'

Enzyme.configure({ adapter: new Adapter() });

it("renders three ValueInputs", () => {
    const wrapper = shallow(<App />);
    const valCount = wrapper.find(ValueInput).length;
    expect(valCount).toBe(3);
})
it("Total os Result's Comp", () => {
    const wrapper = shallow(<App />)
    const totCount = wrapper.find(Result).length
    expect(totCount).toBe(1)
})
it("Checks Result Defined", () => {
    const wrapper = shallow(<App />)
    const resultWrap = wrapper.find(Result)
    expect(resultWrap).toBeDefined()
})

it("Renders 3 inputs", () => {
    const wrapper = mount(<App title="tester" />)
    const count = wrapper.find('.form-control').length
    expect(count).toBe(3)
})

it('Shallow Renders 0 inputs', () => {
    const wrapper = shallow(<App />)
    const inputCount = wrapper.find('input.form-control').length
    expect(inputCount).toBe(0)
})

it("Text H5 Matches", () => {
    const wrapper = shallow(<App title="Funky" />)
    const headerText = wrapper.find('h5').text()
    expect(headerText).toBe("Funky")


})

