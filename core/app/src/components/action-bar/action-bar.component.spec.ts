import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {ActionBarUiComponent} from './action-bar.component';

describe('ActionBarUiComponent', () => {
    let component: ActionBarUiComponent;
    let fixture: ComponentFixture<ActionBarUiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [ActionBarUiComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActionBarUiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`should create`, async(inject([HttpTestingController],
        (httpClient: HttpTestingController) => {
            expect(component).toBeTruthy();
        })));
});