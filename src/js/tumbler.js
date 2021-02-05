export default class Tumbler {
  constructor() {
    this.cylinderOne = {
      a: {0:4,1:10,2:12,3:5,4:11,5:6,6:3,7:16,8:21,9:25,10:13,11:19,12:14,13:22,14:24,15:7,16:23,17:20,18:18,19:15,20:0,21:8,22:1,23:17,24:2,25:9},
      b: {4:0,10:1,12:2,5:3,11:4,6:5,3:6,16:7,21:8,25:9,13:10,19:11,14:12,22:13,24:14,7:15,23:16,17:20,18:18,15:19,0:20,8:21,1:22,17:23,2:24,9:25}
    };
    
    this.cylinderTwo = {
      a:{0:0,1:9,2:3,3:10,4:18,5:8,6:17,7:20,8:23,9:1,10:11,11:7,12:22,13:19,14:12,15:2,16:16,17:6,18:25,19:13,20:15,21:24,22:5,23:5,23:21,24:14,25:4},
      b:{0:0,9:1,3:2,10:3,18:4,8:5,17:6,20:7,23:8,1:9,11:10,7:11,22:12,19:13,12:14,2:15,16:16,6:17,25:18,13:19,15:20,24:21,5:22,5:23,21:23,14:24,4:25}
    };
    
    this.cylinderThree = {
      a: {0:1,1:3,2:5,3:7,4:9,5:11,6:2,7:15,8:17,9:19,10:23,11:21,12:25,13:13,14:24,15:4,16:8,17:22,18:6,19:0,20:10,21:12,22:20,23:18,24:16,25:14},
      b: {1:0,3:1,5:2,7:3,9:4,11:5,2:6,15:7,17:8,19:9,23:10,21:11,25:12,13:13,24:14,4:15,8:16,22:17,6:18,0:19,10:20,12:21,20:22,18:23,16:24,14:25}
    };

    this.active1 = this.cylinderOne;
    this.active2 = this.cylinderTwo;
    this.active3 = this.cylinderThree;

    this.offset1 = 0;
    this.offset2 = 0;
    this.offset3 = 0;
  }

  setActive(select,cylinder) {
    this.[`active${select}`] = this.[`cylinder${cylinder}`];
  }
}