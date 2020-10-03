import DownloadDataService from './DownloadDataService';
import CrudeDataRepository from '../repositories/CrudeDataRepository';
import api from '../client/jsonplaceholer';

jest.mock('../client/jsonplaceholer');

describe('DownloadData', () => {
  it('should be able to get data from API', async () => {
    const mockedApi = api as jest.Mocked<typeof api>;

    mockedApi.get.mockResolvedValue({
      data: [
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
      ],
    });
    const crudeDataRepository = new CrudeDataRepository();
    const downloadService = new DownloadDataService(crudeDataRepository);
    const usersData = await downloadService.execute();

    expect(usersData).toEqual([
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
    ]);
  });
  it('should be able to detect and throw error when a problem occurs', async () => {
    const mockedApi = api as jest.Mocked<typeof api>;
    const errorMessage = 'Error in API downloading.';

    mockedApi.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    const crudeDataRepository = new CrudeDataRepository();
    const downloadService = new DownloadDataService(crudeDataRepository);

    await expect(downloadService.execute()).rejects.toThrow(errorMessage);
  });
});
