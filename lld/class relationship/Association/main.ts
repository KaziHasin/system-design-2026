

class Doctor {
    constructor(public name: string) { }

    treat(patient: Patient): void {
        console.log(`${this.name} is treating ${patient.name}`);
    }
}

class Patient {
    constructor(public name: string) { }

    visit(doctor: Doctor): void {
        console.log(`${this.name} is visiting ${doctor.name}`);
        doctor.treat(this);
    }
}

const doctor = new Doctor("Dr. Smith");
const patient = new Patient("John Doe");


patient.visit(doctor); 