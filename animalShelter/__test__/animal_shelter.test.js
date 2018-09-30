'use strict';

const AnimalShelter = require('../src/lib/animal-shelter');
const Animal = require('../src/lib/animal');

const shelter = new AnimalShelter();

const dog1 = new Animal();
dog1.type = 'dog';
dog1.name = 'sam';
const cat1 = new Animal();
cat1.type= 'cat';
cat1.name = 'luna';
const dog2 = new Animal();
dog2.type = 'dog';
dog2.name = 'spike';
const cat2 = new Animal();
cat2.type ='cat';
cat2.name = 'midnight';
const dog3 = new Animal();
dog3.type = 'dog';
dog3.name = 'zie';
const cat3 = new Animal();
cat3.type = 'cat';
cat3.name ='pie';
const dog4 = new Animal();
dog4.type = 'dog';
dog4.name = 'spot';
const cat4 = new Animal();
cat4.type ='cat';
cat4.name = 'jax';

shelter.enqueue(dog1);
shelter.enqueue(dog2);
shelter.enqueue(dog3);
shelter.enqueue(dog4);
shelter.enqueue(cat1);
shelter.enqueue(cat2);
shelter.enqueue(cat3);

describe('#animal-shelter.js', () =>{
    test('testing to see if the right cat got picked', () =>{
        shelter.enqueue(dog1);
        shelter.enqueue(cat1);
        shelter.enqueue(dog2);
        shelter.enqueue(cat2);
    expect(shelter.dequeue('cat')).toEqual({type : 'cat', name:'luna'})
    });

    test('testing to see if the right animal was picked', () =>{
        shelter.enqueue(dog1);
        shelter.enqueue(cat1);
        shelter.enqueue(dog2);
        shelter.enqueue(cat2);
        expect(shelter.dequeue('cat')).toEqual({type: 'cat', name:'luna'});
        expect(shelter.dequeue('dog')).toEqual({type: 'dog', name:'sam'});
        expect(shelter.dequeue('dog')).toEqual({type: 'dog', name:'sam'});
    });

    test('to see if the longest waiting animal gets chosen first', () =>{
        expect(shelter.dequeue('dog')).toEqual({type:'dog', name: 'sam'});
    });
});


