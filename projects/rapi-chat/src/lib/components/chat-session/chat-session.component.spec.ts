import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSessionComponent } from './chat-session.component';

describe('ChatSessionComponent', () => {
  let component: ChatSessionComponent;
  let fixture: ComponentFixture<ChatSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
