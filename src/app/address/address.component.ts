import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'address',
    templateUrl: 'address.component.html'
})
export class AddressComponent {
    @Input()
    public adressForm: FormGroup;
}