const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates/POST a new character in our database', () => {
    return request(app)
      .post('/api/character')
      .send({     
        'name': 'Simon Kaine',
        'status': 'Alive',
        'species': 'Alien Beast and Lord Of All Space and Time', })
      .then(res => {
        expect(res.body).toEqual({
          'id': '1', // Should i make this one?
          'name': 'Simon Kaine',
          'status': 'Alive',
          'species': 'Alien Beast and Lord Of All Space and Time',
        });
      });
  });

  // Should I just GET one character instead to avoid nested array 'results': [..]
  it('should GET all characters from Rick and Morty API', async () => {
    
  });

  // afterAll(() => {
  //   pool.end();
  // });



});
