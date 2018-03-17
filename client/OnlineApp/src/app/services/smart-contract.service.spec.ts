import { TestBed, inject } from '@angular/core/testing';

import { SmartContractService } from './smart-contract.service';

describe('SmartContractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartContractService]
    });
  });

  it('should be created', inject([SmartContractService], (service: SmartContractService) => {
    expect(service).toBeTruthy();
  }));
});
