export default class Validator {
  static validateUsername(nickName) {
  //   const nickNameValid = /^([^\-_\d][a-z]*)/i.test(nickName);
  //   console.log(nickNameValid);
  //   const nickNameValid1 = /([a-z]*[^\-_\d])$/i.test(nickName);
  //   console.log(nickNameValid1);
  //   const nickNameValid2 = /[a-z]+[a-z\d\-_]*/i.test(nickName);
  //   console.log(`проверка середины ${nickNameValid2}`);
  //   const nickNameValid3 = !/\d{4}/i.test(nickName);
  //   console.log(`проверка середины на три цифры ${nickNameValid3}`);
    const nickNameValidOLL = /^([^\-_\d][a-z]*)/i.test(nickName)
     && /([a-z]*[^\-_\d])$/i.test(nickName)
     && /^[a-z]+[a-z\d\-_]*/i.test(nickName)
     && !/\d{4}/i.test(nickName);
    return nickNameValidOLL;
  //   console.log(nickNameValidOLL);
  }
}

// Validator.validateUsername('mama5fg555_-fg');
Validator.validateUsername('5mama5fg555_-fg');
// Validator.validateUsername('f3336_-333kl25g');
// ^([a-z][^\-_\d])[a-z_\-(\d?\d?\d?)]*([^\d\-_][a-z])$
