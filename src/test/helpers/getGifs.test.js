import { getGifs }  from '../../helpers/getGifs';

describe('Prueba con getGifs Fetch', () => {


    test('Debe de traer 10 elementos', async() => {
        
        const gifs  = await getGifs('One punch')

        expect( gifs.length ).toBe(30);
    })
    

    
})
