class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
  
    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNumber = params[6];
      this.email = params[7];
    }
  
    get firstName() {return this._firstName;}
    set firstName(firstName) {this._firstName =firstName;}
    
    get lastName() {return this._lastName;}
    set lastName(lastName) {this._lastName = lastName;}
  
    get address() {return this._address;}
    set address(address) {this._address = address;}
  
    get city() {return this._city;}
    set city(city) {this._city = city;}
  
    get state() {return this._state;}
    set state(state) {this._state = state;}
  
    get zip() {return this._zip;}
    set zip(zip) {this._zip = zip;}
  
    get phoneNumber() {return this._phoneNumber;}
    set phoneNumber(phoneNumber) {this._phoneNumber = this.phoneNumber;}
  
    get email() {return this._email;}
    set email(email) {this._email = email;}
  
  
  
      toString() {
         return "FirstName = "+ this.firstName +", LastName = "+this.lastName+", Address = "+this.address+", City ="+this.city+
         ", State = "+this.state+", Zip= "+this.zip+", PhoneNumber="+this.phoneNumber+", Email="+this.email;
      }
  }
  
  let contact=new Contact("Amit","Shah","patna",'PATNA','BIHAR','852014','78541232','amit@gmail.com');
  console.log(contact)