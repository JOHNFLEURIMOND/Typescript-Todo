import MyComponent from '../src/Index';

describe('rendering', () => {
  it('renders', () => {
    expect(new MyComponent({}).render()).toMatchSnapshot();
  });
});
