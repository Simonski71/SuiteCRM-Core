import {Observable, of} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {SystemConfigFacade} from '@base/facades/system-config/system-config.facade';
import {CollectionGQL} from '@services/api/graphql-api/api.collection.get';

export const systemConfigMockData = {
    systemConfigs: {
        default_language: {
            id: '/docroot/api/system-configs/default_language',
            _id: 'default_language',
            value: 'en_us',
            items: []
        },
        passwordsetting: {
            id: '/docroot/api/system-configs/passwordsetting',
            _id: 'passwordsetting',
            value: null,
            items: {
                forgotpasswordON: false
            }
        },
        languages: {
            id: '/docroot/api/system-configs/languages',
            _id: 'languages',
            value: null,
            items: {
                en_us: 'English (US)',
                pt_PT: 'Português (Portugal) - pt-PT'
            }
        }
    }
};

class SystemConfigRecordGQLSpy extends CollectionGQL {

    constructor() {
        super(null);
    }

    public fetchAll(module: string, metadata: { fields: string[] }): Observable<any> {
        const data = {
            data: {
                systemConfigs: {
                    edges: []
                }
            }
        };

        Object.keys(systemConfigMockData.systemConfigs).forEach(key => {
            data.data.systemConfigs.edges.push({
                node: systemConfigMockData.systemConfigs[key]
            });
        })

        return of(data).pipe(shareReplay());
    }
}

export const systemConfigFacadeMock = new SystemConfigFacade(new SystemConfigRecordGQLSpy());