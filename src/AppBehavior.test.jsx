import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount, shallow } from 'enzyme';
import App from './App';
import ValueInput from './Components/ValueInput';

Enzyme.configure({ adapter: new Adapter() });

it('uses title prop', () => {
    const titleVal = "test title"
    const wrapper = shallow(<App title={titleVal} />)
    const firstTitle = wrapper.find('h5').text()
    const stateTitle = wrapper.state('title')
    expect(firstTitle).toBe(titleVal)
    expect(stateTitle).toBe(titleVal)
})

it('updates state data', () => {
    const wrapper = shallow(<App />)
    const values = [10, 20, 30]

    values.forEach((val, index) => {
        wrapper.instance().updateFieldValue(index + 1, val);
    })
    wrapper.instance().updateTotal()
    expect(wrapper.state('total')).toBe(values.reduce((total, val) => total + val, 0))
})

it("Button listens for event", () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('button')
    const values = [10, 20, 30]
    values.forEach((val, index) => {
        wrapper.instance().updateFieldValue(index + 1, val);
    })
    button.simulate('click')
    expect(wrapper.state('total')).toBe(values.reduce((total, val) => total + val, 0))
})

it('tests child function prop updates state', () => {
    const wrapper = mount(<App />)
    const valInput = wrapper.find(ValueInput).first()
    const inputElem = valInput.find('input')

    inputElem.simulate('change', { target: { value: 100 } })
    wrapper.instance().updateTotal()

    expect(valInput.state('fieldValue')).toBe(100)
    expect(wrapper.state('total')).toBe(100)
})

it("Button Text Test", () => {
    const wrapper = shallow(<App btnText="Click Me" />)
    const btnGrab = wrapper.find('button').text()
    expect(btnGrab).toBe("Click Me")
})