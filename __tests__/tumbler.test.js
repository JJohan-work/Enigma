import Tumbler from '../src/js/tumbler.js'

describe('Tumbler', () => {

  let tumbler;

  beforeEach(() => {
    tumbler = new Tumbler();
  })

  test('should create a new tumbler object with 3 cylinders and set cylinders to default active slots', () => {
    expect(tumbler.cylinderOne.a[5]).toEqual(6);
    expect(tumbler.cylinderTwo.a[10]).toEqual(11);
    expect(tumbler.cylinderThree.a[7]).toEqual(15);
    expect(tumbler.active1).toEqual(tumbler.cylinderOne);
    expect(tumbler.active2).toEqual(tumbler.cylinderTwo);
    expect(tumbler.active3).toEqual(tumbler.cylinderThree);
    expect(tumbler.offset1).toEqual(0);
    expect(tumbler.offset2).toEqual(0);
    expect(tumbler.offset3).toEqual(0);
  })

  test('should set a given cylinder to a given slot', () => {
    tumbler.setActive(2,"One");
    tumbler.setActive(3,"Two");
    tumbler.setActive(1,"Three");
    expect(tumbler.active1).toEqual(tumbler.cylinderThree);
    expect(tumbler.active2).toEqual(tumbler.cylinderOne);
    expect(tumbler.active3).toEqual(tumbler.cylinderTwo);
  })
});