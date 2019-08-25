import * as actions from './index';

describe('actions', () => {
  it('should have a type of STORE_PALETTE', () => {
    const palette = [543421, 543211, 778866, 555555, 443255];

    const expectedAction = {
      type: 'STORE_PALETTE',
      palette: [543421, 543211, 778866, 555555, 443255]
    };

    const result = actions.storePalette(palette);

    expect(result).toEqual(expectedAction);
  });
  it('should have a type of CHANGE_SCHEME', () => {
    const scheme = 'titrade'

    const expectedAction = {
      type: 'CHANGE_SCHEME',
      scheme: 'titrade'
    };

    const result = actions.changeScheme(scheme);

    expect(result).toEqual(expectedAction);
  });
  // it('should have a type of CHANGE_VARIATION', () => {
  //   const variation = 'hard'

  //   const expectedAction = {
  //     type: 'CHANGE_VARIATION',
  //     scheme: 'hard'
  //   };

  //   const result = actions.changeVariation(variation);

  //   expect(result).toEqual(expectedAction);
  // });
});