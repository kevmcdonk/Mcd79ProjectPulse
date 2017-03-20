import { IPulseItem } from './components/IPulseItem';

export default class MockHttpClient  {

    private static _items: IPulseItem[] = [{ Title: 'Meh', Id: 1 },
                                        { Title: 'Meh', Id: 2 },
                                        { Title: 'Sad', Id: 3 }];
    
    public static getMockListData(): Promise<IPulseItem[]> {
    return new Promise<IPulseItem[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}