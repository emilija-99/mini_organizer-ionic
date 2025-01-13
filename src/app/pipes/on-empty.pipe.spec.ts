import { OnEmptyPipe } from './on-empty.pipe';

describe('OnEmptyPipe', () => {
  it('create an instance', () => {
    const pipe = new OnEmptyPipe();
    expect(pipe).toBeTruthy();
  });
});
