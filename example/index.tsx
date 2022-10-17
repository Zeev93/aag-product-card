import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
    id: '2',
    title: 'Coffe Mug 2',
}

const App = () => {
  return (
    <>
      <ProductCard 
            product={ product } 
            className="bg-dark text-white"
            initialValues={{
                count: 4,
                // maxCount: 15
            }}
        >
            {
            ({ reset, increaseBy, maxCount, count, isMaxCountReached, ...args }) => (
                <>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>   
                </>
            ) }
        </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
