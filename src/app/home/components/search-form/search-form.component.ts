import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DbService } from 'src/app/core/services/db.service';
// import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass'],
})
export class SearchFormComponent implements OnInit {
  input = {
    property: {
      title: 'Property Type',
      control: 'propertyType',
      options: [{ value: 'hotel', text: 'Hotels' }],
      iconName: 'business',
    },
    city: {
      title: 'City',
      control: 'city',
      options: [{ value: 'London', text: 'London' }],
      iconName: 'map',
    },
  };
  form: FormGroup;
  properties;
  constructor(
    private formBuilder: FormBuilder,
    private db: DbService
  ) // private loadingService: LoadingService
  {}

  async onSubmit() {
    // this.loadingService.startLoading();
    const data = await this.db.findPropertyTypeInCity(
      'properties',
      this.form.controls.propertyType.value,
      this.form.controls.city.value
    );
    this.properties = data;
    // this.loadingService.stopLoading();
    console.log(data);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      propertyType: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
}
