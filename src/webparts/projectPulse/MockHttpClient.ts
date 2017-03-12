import { IPulseItem } from './components/IPulseItem';

export default class MockHttpClient  {

    private static _items: IPulseItem[] = [{ PulseFeeling: 'Meh', Id: 1 },
                                        { PulseFeeling: 'Meh', Id: 2 },
                                        { PulseFeeling: 'Sad', Id: 3 }];
    
    public static getMockListData(): Promise<IPulseItem[]> {
    return new Promise<IPulseItem[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}