import CrudeDataRepository from '../repositories/CrudeDataRepository';
import FakeAddressDataRepository from '../repositories/fakes/FakeAddressDataRepository';
import FakeContactDataRepository from '../repositories/fakes/FakeContactDataRepository';
import FakePersonalDataRepository from '../repositories/fakes/FakePersonalDataRepository';
import StoreDataService from './StoreDataService';

describe('StoreDataService', () => {
  it('should be able to store user data', async () => {
    const crudeDataRepository = new CrudeDataRepository();
    const fakepersonalDataRepository = new FakePersonalDataRepository();
    const fakeaddressDataRepository = new FakeAddressDataRepository();
    const fakecontactDataRepository = new FakeContactDataRepository();

    crudeDataRepository.initializeCrudeData([
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618',
          },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains',
        },
      },
    ]);

    const storeDataService = new StoreDataService(
      crudeDataRepository,
      fakepersonalDataRepository,
      fakeaddressDataRepository,
      fakecontactDataRepository,
    );

    const storedData = await storeDataService.execute();
    expect(storedData[0]).toHaveProperty('id');
    expect(storedData[0].name).toBe('Ervin Howell');
  });

  it('should not be able to store user data with Apt. suite', async () => {
    const crudeDataRepository = new CrudeDataRepository();
    const fakepersonalDataRepository = new FakePersonalDataRepository();
    const fakeaddressDataRepository = new FakeAddressDataRepository();
    const fakecontactDataRepository = new FakeContactDataRepository();

    crudeDataRepository.initializeCrudeData([
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618',
          },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains',
        },
      },
    ]);

    const storeDataService = new StoreDataService(
      crudeDataRepository,
      fakepersonalDataRepository,
      fakeaddressDataRepository,
      fakecontactDataRepository,
    );

    const storedData = await storeDataService.execute();

    expect(storedData[0].name).not.toBe('Leanne Graham');
    expect(storedData[0].name).toBe('Ervin Howell');
  });
});
