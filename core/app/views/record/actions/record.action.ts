import {ActionData, ActionHandler} from '@app-common/actions/action.model';
import {RecordViewStore} from '@views/record/store/record-view/record-view.store';
import {ViewMode} from '@app-common/views/view.model';

export interface RecordActionData extends ActionData {
    store: RecordViewStore;
}

export interface RecordActionHandlerMap {
    [key: string]: RecordActionHandler;
}

export abstract class RecordActionHandler extends ActionHandler {

    abstract modes: ViewMode[];

    getStatus(store: RecordViewStore): string {
        return '';
    }

    abstract run(data: RecordActionData): void;

    abstract shouldDisplay(store: RecordViewStore): boolean;
}
