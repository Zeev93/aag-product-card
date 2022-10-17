import React from 'react'
import renderer from "react-test-renderer";
import {ProductCard, ProductImage } from '../../src/components'
import { product1, product2 } from '../data/products';

describe('ProductImage', () => {
    test('debe mostrar el componente correctamte con la imagen', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot(); 
    })


    test(' Debe mostrar el componente con la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductImage img={product2.img}/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot(); 
    })
})