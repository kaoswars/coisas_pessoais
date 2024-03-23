import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaImagensComponent } from './tabela-imagens.component';

describe('TabelaImagensComponent', () => {
  let component: TabelaImagensComponent;
  let fixture: ComponentFixture<TabelaImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaImagensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
