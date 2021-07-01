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


    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{1,}$');
        if (firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'Invalid FirstName';
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{1,}$');
        if (lastNameRegex.test(lastName))
            this._lastName = lastName;
        else throw 'Invalid LastName '
    }


    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp('^[0-9 A-Z]{1}[A-Z a-z 0-9]{1,}$');
        if (addressRegex.test(address))
            this._address = address;
        else throw 'Invalid Address'
    }

    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp('^[A-Z]{1}[A-Z a-z]{1,}$');
        if (cityRegex.test(city))
            this._city = city;
        else throw 'Invalid City Name'
    }

    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp('^[A-Z]{1}[A-Z a-z]{1,}$');
        if (stateRegex.test(state))
            this._state = state;
        else throw 'Invalid State Name'
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if (zipRegex.test(zip))
            this._zip = zip;
        else throw 'Invalid Zip'
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[1-9]{2}\\s{0,1}[1-9]{1}[0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = this.phoneNumber;
        else throw 'Invalid PhoneNumber'
    }

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp('^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}([.][a-z A-Z]{2})$');
        if (emailRegex.test(email))
            this._email = email;
        else throw 'Invalid Email'
    }

    toString() {
        return "FirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address + ", City =" + this.city +
            ", State = " + this.state + ", Zip= " + this.zip + ", PhoneNumber=" + this.phoneNumber + ", Email=" + this.email;
    }
}

//UC-3
let addressbook = new Array();
  
  let contact=new Contact("Amit","Shah","patna",'PATNA','BIHAR','852014','78541232','amit@gmail.com');
  addressbook.push(contact.toString())
  
  let contact1=new Contact("Siddharth","Ranjan","Hajipur",'Delhi','New-Delhi','855414','785576315','sid41@gmail.com');
  addressbook.push(contact1.toString())
  
  console.log("Addressbook : "+addressbook)

  //UC-4
  let searchResult = addressbook.find( firstName => firstName="Amit" )
console.log("Searched Contact"+searchResult)