import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {

  const testCases = [
    { amount: 100, from: 'PLN', to: 'USD', output: 'PLN 100.00 = $28.57' },
    { amount: 45, from: 'USD', to: 'PLN', output: '$45.00 = PLN 157.5' },
    { amount: 123, from: 'PLN', to: 'USD', output: 'PLN 123.00 = $35.14' },
    { amount: -69, from: 'USD', to: 'PLN', output: 'Error, wrong value' },
    { amount: 666, from: 'PLN', to: 'PLN', output: 'PLN 666.00 = PLN 666.00' },
  ]; 


  for (const testObj of testCases) {
    it('should render proper info about conversion', () => {
      render(
        <ResultBox
          from={testObj.from}
          to={testObj.to}
          amount={testObj.amount}
        />
      );
      const output = screen.getByTestId('output');

      expect(output).toHaveTextContent(testObj.output);

      cleanup();

    });
  };
});