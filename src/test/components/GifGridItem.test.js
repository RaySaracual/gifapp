import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Componente gitGridItem', () => {

    const title ='Hola';
    const url = 'http://localhost/hola.img';
    const wrapper  = shallow ( <GifGridItem title={title} url={url} /> );

    test('Debe mostrar <GifGridItem /> correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe( title );
    })

    test('Debe tener la imagen igual al url  y alt de los props', () => {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe (url);
        expect(img.prop('alt')).toBe (title);
        
    })
    

test('debe de tener animate__fadeIn    ', () => {

    const div = wrapper.find('div');
    const data = div.props().className;
  
    expect(data.includes('animate__fadeIn')).toBe(true);
    
})


    
})
