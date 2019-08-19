import {
    validatePost
} from './../src/assets/js/post.js';
import {
    exportAllDeclaration
} from "@babel/types";

//prueba para validar si el post está vacio
describe("validatePost", () => {
    it('debería retornar false si parametro es un string vacio', () => {
        expect(validatePost('')).toBe(false);
    })
    it('debería retornar false si longitud de parametro es menos de 2', () => {
        expect(validatePost('p')).toBe(false);
    })
    it('debería retornar true si parametro no es string vacio y su longitud es mas de 2', () => {
        expect(validatePost('blablabla')).toBe(true);
    })

})